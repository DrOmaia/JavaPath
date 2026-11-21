JP.unit({
  course: 'cs102',
  key: 8,
  n: 3,
  title: 'Building Systems from Several Classes',
  titleAr: 'بناء أنظمة من عدة أصناف',
  intro: "In Unit 2 you built one class at a time. Real programs, such as a clinic system, a library or a course registration system, are made of several classes that work together. In this unit you will put objects inside objects, decide when a part is owned or shared, keep many objects in an array, let objects call each other, turn a story into a UML design, and finally build and test a small registration system step by step.",
  introAr: "في الوحدة الثانية بنيت صنفًا واحدًا في كل مرة. البرامج الحقيقية مكوّنة من عدة أصناف تتعاون معًا. سنضع كائنات داخل كائنات، ونحفظ كائنات كثيرة في مصفوفة، ونجعل الكائنات تتواصل، ونحوّل القصة إلى تصميم، ثم نبني نظام تسجيل ونختبره.",
  lessons: [

    // ---------------------------------------------------------------- Lesson 1
    {
      title: 'Has-a: an object inside an object',
      titleAr: 'علاقة «يملك»: كائن داخل كائن',
      minutes: 30,
      body: [
        { type: 'h', en: 'The problem: one class with too many fields' },
        { type: 'p', en: "Imagine the <code>Student</code> class of the university. A student has a name. The registrar also wants the home address: the street and the city. Your clinic program needs the same address fields for a patient, and the library needs them for a member. If you copy the same fields into every class, you write the same thing again and again. Worse, one change (for example, adding a postal code) must be made in many places." ,
          ar: "نسخ حقول العنوان في كل صنف متعب ويسبب الأخطاء عند أي تعديل." },
        { type: 'p', en: "The fix: make the address its own small class. Then give the student <b>one</b> field whose type is that class. This idea is called <b>composition</b>: building a big object from smaller objects. (To compose means &quot;to put parts together&quot;.)" },
        { type: 'analogy', title: 'A car and its engine', en: "A car is not one big piece of metal. It is built from parts: an engine, wheels, seats. The engine is a complete thing with its own details: its power and its fuel type. The factory builds the engine first, then puts it inside the car. In Java, <code>Engine</code> is a class, and <code>Car</code> has a field that holds an engine.",
          ar: "السيارة مبنية من أجزاء، والمحرك جزء كامل له تفاصيله. في جافا المحرك صنف، والسيارة فيها حقل من نوعه." },
        { type: 'p', en: "First, the part. This is a normal class, exactly like the classes of Unit 2. Nothing new yet." },
        { type: 'code', code: J`
          class Address {
              String city;
              String street;

              Address(String city, String street) {
                  this.city = city;
                  this.street = street;
              }
          }
        ` },
        { type: 'p', en: "Now the new idea. Look at the <b>type</b> of the field <code>home</code>: it is our own class." },
        { type: 'code', code: J`
          class Student {
              String name;
              Address home;   // a field whose type is a class
          }
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['class Student {', 'A normal class, as in Unit 2.'],
          ['String name;', 'You know this field. Fun fact: <code>String</code> is also a class, so you have used objects inside objects all along!'],
          ['Address home;', 'The new idea: a field whose type is <code>Address</code>. Like every object variable, it holds an <b>arrow</b> (a reference) to an Address object, not the object itself.']
        ], ar: "الحقل home نوعه Address، فهو يحمل سهمًا إلى كائن عنوان." },
        { type: 'note', kind: 'tip', en: "To keep the first examples short, the fields in this lesson are not <code>private</code>. From Lesson 2 we make them private again, as good design asks (Unit 2).",
          ar: "الحقول هنا ليست خاصة لتقصير الأمثلة فقط، وسنعيدها خاصة في الدرس الثاني." },
        { type: 'check', q: "In <code>class Car { Engine engine; }</code>, what does the field <code>engine</code> hold?",
          options: ["A copy of the whole Engine class", "An arrow (reference) to an Engine object, or null", "A number", "The word engine"], answer: 1,
          explain: "A field of a class type holds a reference: an arrow to an object. Before you give it an object, it is <code>null</code>.", hint: "Think about what any object variable holds." },

        { type: 'h', en: 'The has-a test' },
        { type: 'p', en: "How do you know that one class should hold another? Say a sentence with <b>has a</b>. If the sentence sounds right, use a field. &quot;A student <b>has an</b> address&quot;: yes. &quot;A car <b>has an</b> engine&quot;: yes. &quot;An appointment <b>has a</b> date&quot;: yes. This is why composition is also called the <b>has-a relationship</b>." },
        { type: 'analogy', title: 'The school bag and the pencil case', en: "Your school bag has a pencil case, and the pencil case has its own pens and an eraser. To get a pen, you first open the bag, then you open the pencil case. Objects inside objects work the same way: to reach the city, you go to the student first, then to the address.",
          ar: "الحقيبة فيها مقلمة، والمقلمة فيها أقلام. نصل إلى القلم عبر الحقيبة ثم المقلمة." },
        { type: 'table', head: ['Sentence', 'Has-a?', 'In Java'], rows: [
          ['A student has an address', 'Yes', '<code>Address home;</code> inside <code>Student</code>'],
          ['A car has an engine', 'Yes', '<code>Engine engine;</code> inside <code>Car</code>'],
          ['An appointment has a date', 'Yes', '<code>Date date;</code> inside <code>Appointment</code>'],
          ['A car is an engine', 'No, this is wrong', 'No field. (A different relation, &quot;is-a&quot;, comes in Unit 4.)']
        ] },
        { type: 'check', q: "Which sentence passes the has-a test?",
          options: ["A phone is a battery", "A phone has a battery", "A battery is a phone", "None of them"], answer: 1,
          explain: "A phone <b>has a</b> battery, so <code>Phone</code> would get a field <code>Battery battery;</code>." },

        { type: 'h', en: 'Building the part, then the whole' },
        { type: 'p', en: "To build a student with an address, you build <b>two</b> objects. First build the address with <code>new</code>. Then build the student and put the arrow to the address into the student's <code>home</code> field." },
        { type: 'code', code: J`
          Address a = new Address("Riyadh", "Olaya St");
          Student s = new Student();
          s.name = "Sara";
          s.home = a;
        ` },
        { type: 'lines', rows: [
          ['Address a = new Address("Riyadh", "Olaya St");', 'Object number 1: an address. The variable <code>a</code> points to it.'],
          ['Student s = new Student();', 'Object number 2: a student. Its <code>home</code> starts as <code>null</code>: no address yet.'],
          ['s.name = "Sara";', 'Write the name into the student.'],
          ['s.home = a;', 'Copy the arrow from <code>a</code> into <code>s.home</code>. Now the student points to the address.']
        ] },
        { type: 'memory', title: 'Two objects, one inside the other',
          en: "Press Next to run the code one line at a time. Watch the arrow from the student to the address. (Text values are shown inside the boxes to keep the picture simple.)",
          frames: [
            { label: 'After <code>Address a = new Address("Riyadh", "Olaya St");</code>',
              vars: [{ name: 'a', type: 'Address', ref: 'A' }],
              objects: [{ id: 'A', cls: 'Address', fields: [{ name: 'city', value: '"Riyadh"' }, { name: 'street', value: '"Olaya St"' }] }] },
            { label: 'After <code>Student s = new Student();</code>',
              vars: [{ name: 'a', type: 'Address', ref: 'A' }, { name: 's', type: 'Student', ref: 'B' }],
              objects: [
                { id: 'A', cls: 'Address', fields: [{ name: 'city', value: '"Riyadh"' }, { name: 'street', value: '"Olaya St"' }] },
                { id: 'B', cls: 'Student', fields: [{ name: 'name', value: 'null' }, { name: 'home', value: 'null' }] }] },
            { label: 'After <code>s.name = "Sara";</code>',
              vars: [{ name: 'a', type: 'Address', ref: 'A' }, { name: 's', type: 'Student', ref: 'B' }],
              objects: [
                { id: 'A', cls: 'Address', fields: [{ name: 'city', value: '"Riyadh"' }, { name: 'street', value: '"Olaya St"' }] },
                { id: 'B', cls: 'Student', fields: [{ name: 'name', value: '"Sara"' }, { name: 'home', value: 'null' }] }] },
            { label: 'After <code>s.home = a;</code>',
              vars: [{ name: 'a', type: 'Address', ref: 'A' }, { name: 's', type: 'Student', ref: 'B' }],
              objects: [
                { id: 'A', cls: 'Address', fields: [{ name: 'city', value: '"Riyadh"' }, { name: 'street', value: '"Olaya St"' }] },
                { id: 'B', cls: 'Student', fields: [{ name: 'name', value: '"Sara"' }, { name: 'home', ref: 'A' }] }] }
          ],
          ar: "كائنان: عنوان وطالب. بعد s.home = a يشير حقل الطالب إلى كائن العنوان نفسه." },
        { type: 'p', en: "To reach the city, follow two arrows: from <code>s</code> to the student, then from <code>home</code> to the address. In Java you write two dots: <code>s.home.city</code>. Read it from left to right: &quot;the student s, then her home, then its city&quot;.",
          ar: "s.home.city: من الطالب إلى عنوانه ثم إلى المدينة، من اليسار إلى اليمين." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Address a = new Address("Riyadh", "Olaya St");
                  Student s = new Student();
                  s.name = "Sara";
                  s.home = a;
                  System.out.println(s.name + " lives in " + s.home.city);
                  System.out.println("Street: " + s.home.street);
              }
          }

          class Address {
              String city;
              String street;

              Address(String city, String street) {
                  this.city = city;
                  this.street = street;
              }
          }

          class Student {
              String name;
              Address home;
          }
        `, out: J`
          Sara lives in Riyadh
          Street: Olaya St
        ` },
        { type: 'check', q: "What is <code>s.home</code> right after <code>Student s = new Student();</code>, before the line <code>s.home = a;</code>?",
          options: ["An empty address", "null", "\"Riyadh\"", "A copy of a"], answer: 1,
          explain: "A field of a class type starts as <code>null</code>. If you wrote <code>s.home.city</code> at that moment, the program would crash with a <code>NullPointerException</code>." },

        { type: 'h', en: 'A constructor that receives the part' },
        { type: 'p', en: "Writing <code>s.home = a;</code> by hand is easy to forget. As in Unit 2, a constructor can fill all the fields at once. The only new thing: one of the parameters is an object." },
        { type: 'code', code: J`
          Student(String name, Address home) {
              this.name = name;
              this.home = home;
          }
        ` },
        { type: 'lines', rows: [
          ['Student(String name, Address home)', 'The second parameter is an Address: an arrow to an address object.'],
          ['this.home = home;', 'Store the arrow in the field. From now on the student has its address.']
        ] },
        { type: 'p', en: "You can even build the address right inside the call. The address then has no variable of its own: you can reach it only through the student.",
          ar: "يمكن إنشاء العنوان داخل استدعاء المُنشئ مباشرة، فلا نصل إليه إلا عبر الطالب." },
        { type: 'code', code: J`
          Student t = new Student("Omar", new Address("Dammam", "Corniche Rd"));
          System.out.println(t.home.city);   // Dammam
        ` },

        { type: 'h', en: 'When does a group of fields deserve its own class?' },
        { type: 'p', en: "Not every field needs a class. A GPA is just one number. For a <b>group</b> of fields, ask three questions:" },
        { type: 'list', items: [
          "Do the fields <b>belong together</b>? Day, month and year make one date.",
          "Does the group appear in <b>more than one class</b>? An address is needed by students, patients and library members.",
          "Does the group have its <b>own behaviour</b>? A date can print itself as 15/3/2026, or check that the month is between 1 and 12."
        ], ar: "إذا كانت الحقول مترابطة، أو تتكرر في عدة أصناف، أو لها سلوك خاص، فاجعلها صنفًا مستقلًا." },
        { type: 'p', en: "If the answer to one or more questions is yes, make a class. Here are typical examples:" },
        { type: 'table', head: ['Fields you see', 'New class', 'Used inside'], rows: [
          ['street, city', '<code>Address</code>', 'Student, Patient, Member'],
          ['day, month, year', '<code>Date</code>', 'Appointment, Exam, Loan'],
          ['power, fuel', '<code>Engine</code>', 'Car, Bus'],
          ['name, price', '<code>MenuItem</code>', 'Order (the lab of this unit)']
        ] },
        { type: 'note', kind: 'exam', en: "Exam question: &quot;What is the relationship between <code>Car</code> and <code>Engine</code>?&quot; Answer: <b>composition</b> (a has-a relationship): a Car has an Engine, so Car has a field of type Engine.",
          ar: "العلاقة بين السيارة والمحرك تركيب: السيارة تملك محركًا." },
        { type: 'check', q: "Which group of fields most deserves its own class?",
          options: ["gpa", "day, month, year", "count", "name"], answer: 1,
          explain: "Day, month and year belong together, appear in many classes (appointments, exams, loans) and have their own behaviour (printing, checking). One number like gpa stays a simple field." },

        { type: 'steps', title: 'Worked example: a clinic appointment', problem: "A clinic stores appointments. Each appointment has a patient name and a date (day, month, year). Read a patient name and a date, then print the appointment.",
          steps: [
            { en: "Step 1: The part. A date is three numbers that belong together, so it gets its own class.", code: J`
              class Date {
                  int day;
                  int month;
                  int year;

                  Date(int day, int month, int year) {
                      this.day = day;
                      this.month = month;
                      this.year = year;
                  }
              }
            ` },
            { en: "Step 2: The whole. An appointment <b>has a</b> patient name and <b>has a</b> date. Its constructor receives the date object.", code: J`
              class Appointment {
                  String patient;
                  Date date;

                  Appointment(String patient, Date date) {
                      this.patient = patient;
                      this.date = date;
                  }
              }
            ` },
            { en: "Step 3: A method in Appointment that prints. To reach the day, it follows its own field: <code>date.day</code>.", code: J`
              void print() {
                  System.out.println("Patient: " + patient);
                  System.out.println("Date: " + date.day + "/" + date.month + "/" + date.year);
              }
            ` },
            { en: "Step 4: In main, read the input and build the part first.", code: J`
              String patient = sc.next();
              int d = sc.nextInt();
              int m = sc.nextInt();
              int y = sc.nextInt();
              Date when = new Date(d, m, y);
            ` },
            { en: "Step 5: Build the whole with the part, then ask it to print.", code: J`
              Appointment ap = new Appointment(patient, when);
              ap.print();
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String patient = sc.next();
                    int d = sc.nextInt();
                    int m = sc.nextInt();
                    int y = sc.nextInt();
                    Date when = new Date(d, m, y);

                    Appointment ap = new Appointment(patient, when);
                    ap.print();
                }
            }

            class Date {
                int day;
                int month;
                int year;

                Date(int day, int month, int year) {
                    this.day = day;
                    this.month = month;
                    this.year = year;
                }
            }

            class Appointment {
                String patient;
                Date date;

                Appointment(String patient, Date date) {
                    this.patient = patient;
                    this.date = date;
                }

                void print() {
                    System.out.println("Patient: " + patient);
                    System.out.println("Date: " + date.day + "/" + date.month + "/" + date.year);
                }
            }
          `, stdin: 'Noura 15 3 2026', out: J`
            Patient: Noura
            Date: 15/3/2026
          `, ar: "ابن{{g:|ي}} الجزء أولًا (التاريخ)، ثم الكل (الموعد) وأعطه الجزء، ثم اطبع{{g:|ي}} بالوصول إلى date.day." }
      ],
      mistakes: [
        { title: 'Forgetting to build the part', en: "A field of a class type starts as <code>null</code>. If you never give the student an address, following the arrow crashes with a <code>NullPointerException</code>.", code: J`
          Student s = new Student();
          s.name = "Sara";
          System.out.println(s.home.city);   // crash: home is null
        `, ar: "الحقل يبدأ null، فلا بد من إعطائه كائنًا قبل استعماله." },
        { title: 'Copying the same fields into every class', en: "Repeating <code>city</code> and <code>street</code> in Patient, Member and Student means three places to fix. Write one <code>Address</code> class and use it everywhere.", code: J`
          // repeated fields:
          class Patient { String city; String street; }
          class Member  { String city; String street; }

          // better: one Address class, used by both
          class Patient { Address home; }
          class Member  { Address home; }
        ` },
        { title: 'One String for a thing with parts', en: "A date stored as one text like <code>\"15/3/2026\"</code> is hard to use: how do you get the month, or add one day? A <code>Date</code> class with three int fields is much easier.", code: J`
          String date = "15/3/2026";    // hard to work with
          Date date2 = new Date(15, 3, 2026);   // easy: date2.month
        ` },
        { title: 'Mixing up has-a and is-a', en: "&quot;A car <b>is an</b> engine&quot; is wrong. The car <b>has an</b> engine, so the engine is a field. The is-a relationship is a different idea (inheritance, Unit 4).", code: J`
          class Car {
              Engine engine;   // has-a: correct
          }
        ` }
      ],
      remember: [
        "<b>Composition</b> = an object inside an object: a field whose type is another class.",
        "Use the <b>has-a test</b>: &quot;A car has an engine&quot; → <code>Engine engine;</code> inside <code>Car</code>.",
        "A field of a class type holds an <b>arrow</b> (reference). It is <code>null</code> until you give it an object.",
        "Build the part with <code>new</code>, then give it to the whole, often through the constructor.",
        "Follow the arrows with dots, from left to right: <code>s.home.city</code>.",
        "Make a new class when fields belong together, repeat in many classes, or have their own behaviour."
      ],
      rememberAr: "التركيب: كائن داخل كائن، أي حقل نوعه صنف آخر. استخدم{{g:|ي}} اختبار «يملك». الحقل يحمل سهمًا ويبقى null حتى نعطيه كائنًا، ونصل إلى ما بداخله بالنقاط مثل s.home.city.",
      practice: [
        { t: 'mcq', q: "Which sentence describes composition (a has-a relationship)?",
          qAr: "أي جملة تصف علاقة «يملك»؟",
          options: ["A car has an engine", "A car is a number", "An engine is a car", "A loop has a semicolon"], answer: 0,
          explain: "A car <b>has an</b> engine: the engine is a part, so <code>Car</code> gets a field of type <code>Engine</code>.",
          explainAr: "السيارة تملك محركًا، فالمحرك حقل داخل السيارة." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Engine e = new Engine(150);
                  Car c = new Car("White", e);
                  System.out.println(c.color + " car, " + c.engine.power + " hp");
              }
          }

          class Engine {
              int power;

              Engine(int power) {
                  this.power = power;
              }
          }

          class Car {
              String color;
              Engine engine;

              Car(String color, Engine engine) {
                  this.color = color;
                  this.engine = engine;
              }
          }
        `, answer: 'White car, 150 hp',
          explain: "<code>c.engine</code> is the Engine object built first, and <code>c.engine.power</code> follows the arrow to its power: 150.",
          explainAr: "نتبع السهم من السيارة إلى المحرك ثم إلى القدرة." },
        { t: 'fill', q: "A patient has a home address. Complete the field type, build the address, and set its city.", code: J`
          class Address {
              String city;
          }

          class Patient {
              String name;
              ___ home;
          }

          // inside main:
          Patient p = new Patient();
          p.home = ___ Address();
          p.home.___ = "Abha";
        `, answers: ['Address', 'new', 'city'],
          explain: "The field type is the class <code>Address</code>. <code>new Address()</code> builds the part, and <code>p.home.city</code> reaches its city through two arrows." },
        { t: 'order', q: "Put the lines in order: build an engine, build a car with it, read the power through the car, and print it.",
          lines: [
            "Engine e = new Engine(200);",
            "Car c = new Car(\"Blue\", e);",
            "int p = c.engine.power;",
            "System.out.println(\"Power: \" + p);"
          ],
          explain: "The part must exist before the whole receives it, and the car must exist before you can follow <code>c.engine</code>." },
        { t: 'mcq', q: "A <code>Bus</code> class has the fields <code>plate</code>, <code>driverName</code>, <code>driverPhone</code> and <code>driverLicense</code>. What is the best design?",
          options: [
            "Keep all four fields in Bus",
            "Make a class Driver (name, phone, license) and give Bus one field: <code>Driver driver;</code>",
            "Make a class Plate for the plate only",
            "Delete the driver fields"
          ], answer: 1,
          explain: "The three driver fields belong together and describe one thing: the driver. A bus <b>has a</b> driver, so make a <code>Driver</code> class and give Bus one field of that type.",
          explainAr: "حقول السائق مترابطة، فنجعلها صنفًا اسمه Driver." },
        { t: 'bug', q: "This code should print the city of Sara's address, but it does not compile. Tap the line with the bug.",
          code: J`
            Address a = new Address("Riyadh", "Olaya St");
            Student s = new Student();
            s.name = "Sara";
            s.home = a;
            System.out.println(s.name);
            System.out.println(s.city);
          `, bug: 6,
          fix: J`
            Address a = new Address("Riyadh", "Olaya St");
            Student s = new Student();
            s.name = "Sara";
            s.home = a;
            System.out.println(s.name);
            System.out.println(s.home.city);
          `,
          hint: "Does a Student have a field called city?",
          explain: "<code>Student</code> has no field <code>city</code>; the city lives inside the address. The compiler says <i>cannot find symbol</i>. Follow both arrows: <code>s.home.city</code>.",
          explainAr: "المدينة داخل العنوان وليست داخل الطالب، فنكتب s.home.city." },
        { t: 'bug', q: "<code>new Car(\"Red\", new Engine(120)).engine.power</code> crashes with a <code>NullPointerException</code>. Tap the line with the bug.",
          code: J`
            class Engine {
                int power;
                Engine(int power) {
                    this.power = power;
                }
            }

            class Car {
                String color;
                Engine engine;
                Car(String color, Engine engine) {
                    this.color = color;
                    engine = engine;
                }
            }
          `, bug: 13,
          fix: J`
            class Engine {
                int power;
                Engine(int power) {
                    this.power = power;
                }
            }

            class Car {
                String color;
                Engine engine;
                Car(String color, Engine engine) {
                    this.color = color;
                    this.engine = engine;
                }
            }
          `,
          hint: "Which line should store the engine in the field?",
          explain: "<code>engine = engine;</code> copies the parameter into itself. The field <code>engine</code> stays <code>null</code>, so following it crashes. Write <code>this.engine = engine;</code> (Unit 2).",
          explainAr: "بدون this بقي حقل المحرك null." },
        { t: 'code', q: "Write class <code>Author</code> with fields <code>name</code> (String) and <code>born</code> (int) and a constructor, and class <code>Book</code> with fields <code>title</code> (String) and <code>author</code> (Author) and a constructor. In <code>main</code> read a one-word title, a one-word author name and a birth year (no prompts). Build the Author, then the Book, and print <code>TITLE by NAME (born YEAR)</code>, reading the author's data through the book (for example <code>b.author.name</code>).",
          qAr: "اكتب{{g:|ي}} صنف المؤلف وصنف الكتاب الذي يملك مؤلفًا، ثم اطبع{{g:|ي}} البيانات عبر الكتاب.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    // read title, name, year; build Author, then Book; print
                }
            }

            class Author {
                // fields and constructor
            }

            class Book {
                // fields and constructor
            }
          `,
          tests: [
            { stdin: 'Algorithms Nora 1990', expected: 'Algorithms by Nora (born 1990)' },
            { stdin: 'Poems Ahmad 1975', expected: 'Poems by Ahmad (born 1975)' }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String title = sc.next();
                    String name = sc.next();
                    int year = sc.nextInt();
                    Author a = new Author(name, year);
                    Book b = new Book(title, a);
                    System.out.println(b.title + " by " + b.author.name + " (born " + b.author.born + ")");
                }
            }

            class Author {
                String name;
                int born;

                Author(String name, int born) {
                    this.name = name;
                    this.born = born;
                }
            }

            class Book {
                String title;
                Author author;

                Book(String title, Author author) {
                    this.title = title;
                    this.author = author;
                }
            }
          `,
          hint: "In Book write <code>Author author;</code>. In main build <code>new Author(name, year)</code> first, then <code>new Book(title, a)</code>.",
          explain: "The book has an author (composition). You build the part first, give it to the book, then follow the arrows: <code>b.author.name</code>." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 2
    {
      title: 'Building and using the parts',
      titleAr: 'بناء الأجزاء واستخدامها',
      minutes: 30,
      body: [
        { type: 'h', en: 'Private fields again' },
        { type: 'p', en: "In Unit 2 you made fields <code>private</code> and added getters, so that other classes cannot break the data. From now on we do that again. Here is the Address class written properly. It is the part we use in this lesson." },
        { type: 'code', code: J`
          class Address {
              private String city;
              private String street;

              public Address(String city, String street) {
                  this.city = city;
                  this.street = street;
              }

              public String getCity() { return city; }
              public String getStreet() { return street; }
          }
        ` },
        { type: 'p', en: "A class that has a part has three jobs in this lesson: it must <b>build</b> (or receive) the part, <b>ask</b> the part for information, and <b>describe</b> itself together with the part." },

        { type: 'h', en: 'Two ways to get the part: receive it or build it' },
        { type: 'p', en: "Who builds the address object? There are two good answers, and you choose the one that fits the story. Sometimes the part already exists outside, so the constructor <b>receives</b> it. Sometimes the part is born together with the whole, so the constructor <b>builds</b> it." },
        { type: 'analogy', title: 'The café cup', en: "At some cafés you bring your own cup, and the barista fills it: the cup comes from outside. At other cafés the barista takes a new cup from the shelf: the café makes its own part. Both are fine; it depends on the café.",
          ar: "إما أن تُحضِر كوبك معك (المُنشئ يستقبل الجزء) أو يعطيك المقهى كوبًا جديدًا (المُنشئ يبني الجزء)." },
        { type: 'code', code: J`
          // Way 1: receive the part
          public Student(String name, Address home) {
              this.name = name;
              this.home = home;
          }
        ` },
        { type: 'code', code: J`
          // Way 2: build the part
          public Student(String name, String city, String street) {
              this.name = name;
              this.home = new Address(city, street);
          }
        ` },
        { type: 'lines', title: 'Read Way 2 like a programmer', rows: [
          ['public Student(String name, String city, String street)', 'Only simple values come in: three Strings. Main does not need to know the Address class.'],
          ['this.name = name;', 'Store the name, as in Unit 2.'],
          ['this.home = new Address(city, street);', 'The student builds its own address from two Strings and keeps the arrow in its field.']
        ], ar: "في الطريقة الثانية يبني الطالب كائن العنوان بنفسه داخل المُنشئ." },
        { type: 'note', kind: 'tip', en: "A class may have both constructors (overloading, Unit 2). Then main can choose: pass an address it already has, or pass the city and street.",
          ar: "يمكن أن يملك الصنف المُنشئين معًا." },
        { type: 'check', q: "In <code>this.home = new Address(city, street);</code>, who builds the Address object?",
          options: ["main", "the Student constructor", "Java, automatically", "the getter getCity()"], answer: 1,
          explain: "The line is inside the Student constructor, so every new student builds its own address." },

        { type: 'h', en: 'Delegation: pass the question to the part' },
        { type: 'p', en: "Main wants to know the student's city. The city is inside the address, and the address is private inside the student. The kind solution: give <code>Student</code> a short method that passes the question to its address. This is called <b>delegation</b>. (To delegate means &quot;to give a job to someone else&quot;.)" },
        { type: 'analogy', title: 'The clinic receptionist', en: "You ask the receptionist: &quot;When is my appointment?&quot;. She does not know it by heart. She asks the schedule system and tells you the answer. You only talk to one person. The receptionist <b>delegates</b> your question to the system.",
          ar: "موظفة الاستقبال لا تحفظ الموعد، بل تسأل النظام وتخبرك. هذا هو التفويض." },
        { type: 'code', code: J`
          public String getCity() {
              return home.getCity();
          }
        ` },
        { type: 'lines', rows: [
          ['public String getCity()', 'A method of <b>Student</b>. Main can call <code>s.getCity()</code>.'],
          ['return home.getCity();', 'The student asks its own part, the address, and returns the answer. One line of work.']
        ], ar: "التفويض: الطالب يمرّر السؤال إلى عنوانه ويُرجع الجواب." },
        { type: 'check', q: "<code>s.getCity()</code> runs <code>return home.getCity();</code>. Which object really knows the city?",
          options: ["the Student", "the Address", "main", "the Scanner"], answer: 1,
          explain: "The city is stored in the Address. The Student only passes the question on." },

        { type: 'h', en: "toString that uses the part's toString" },
        { type: 'p', en: "If Address has its own <code>toString()</code>, then Student's <code>toString()</code> can simply add the address to its text. Java calls the address's toString for you, as you saw in Unit 2 with <code>println</code>." },
        { type: 'code', code: J`
          // in Address
          @Override
          public String toString() {
              return street + ", " + city;
          }

          // in Student
          @Override
          public String toString() {
              return name + " (" + home + ")";
          }
        ` },
        { type: 'lines', rows: [
          ['return street + ", " + city;', 'The address describes itself: <code>Olaya St, Riyadh</code>.'],
          ['name + " (" + home + ")"', 'When text meets an object with <code>+</code>, Java calls that object\'s <code>toString()</code>. So <code>home</code> becomes <code>Olaya St, Riyadh</code>.']
        ], ar: "toString للطالب يستعمل toString للعنوان تلقائيًا؛ كل صنف يصف نفسه." },
        { type: 'p', en: "This is good design: each class describes only itself. If one day the address must show a postal code, you change Address only, and every student shows it at once. Here is everything together:" },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Student s = new Student("Sara", "Riyadh", "Olaya St");
                  System.out.println(s);
                  System.out.println(s.getName() + " lives in " + s.getCity());
              }
          }

          class Address {
              private String city;
              private String street;

              public Address(String city, String street) {
                  this.city = city;
                  this.street = street;
              }

              public String getCity() { return city; }
              public String getStreet() { return street; }

              @Override
              public String toString() {
                  return street + ", " + city;
              }
          }

          class Student {
              private String name;
              private Address home;

              public Student(String name, String city, String street) {
                  this.name = name;
                  this.home = new Address(city, street);
              }

              public String getName() { return name; }
              public Address getAddress() { return home; }

              public String getCity() {
                  return home.getCity();
              }

              @Override
              public String toString() {
                  return name + " (" + home + ")";
              }
          }
        `, out: J`
          Sara (Olaya St, Riyadh)
          Sara lives in Riyadh
        ` },
        { type: 'check', q: "Address has <b>no</b> toString. What would <code>System.out.println(s)</code> show inside the brackets?",
          options: ["Olaya St, Riyadh", "Something like Address@5e91993f", "null", "It does not compile"], answer: 1,
          explain: "Without its own toString, an object prints as the class name and a memory number, as you saw in Unit 2." },

        { type: 'h', en: 'Chained calls: two calls in one line' },
        { type: 'p', en: "The getter <code>getAddress()</code> returns the address object itself (its arrow). So main can also write <code>s.getAddress().getCity()</code>. This is a <b>chained call</b>: the first call gives back an object, and you call a method on that object at once." },
        { type: 'lines', title: 'Read the chain from left to right', rows: [
          ['s.getAddress()', 'First: run getAddress() on s. The result is the Address object.'],
          ['.getCity()', 'Then: run getCity() on that Address. The result is <code>"Riyadh"</code>.']
        ], ar: "الاستدعاء المتسلسل يُقرأ من اليسار إلى اليمين: نأخذ العنوان أولًا ثم نسأله عن المدينة." },
        { type: 'memory', title: 'What a chained call does',
          en: "<code>s.getAddress().getCity()</code> does the same work as the last two lines below, but without the extra variable <code>a</code>.",
          code: J`
            Student s = new Student("Sara", "Riyadh", "Olaya St");
            Address a = s.getAddress();
            String c = a.getCity();
          `,
          frames: [
            { label: 'After <code>Student s = new Student("Sara", "Riyadh", "Olaya St");</code> (the constructor built the address)',
              vars: [{ name: 's', type: 'Student', ref: 'B' }],
              objects: [
                { id: 'B', cls: 'Student', fields: [{ name: 'name', value: '"Sara"' }, { name: 'home', ref: 'A' }] },
                { id: 'A', cls: 'Address', fields: [{ name: 'city', value: '"Riyadh"' }, { name: 'street', value: '"Olaya St"' }] }] },
            { label: 'After <code>Address a = s.getAddress();</code> (no new address: the same arrow is given back)',
              vars: [{ name: 's', type: 'Student', ref: 'B' }, { name: 'a', type: 'Address', ref: 'A' }],
              objects: [
                { id: 'B', cls: 'Student', fields: [{ name: 'name', value: '"Sara"' }, { name: 'home', ref: 'A' }] },
                { id: 'A', cls: 'Address', fields: [{ name: 'city', value: '"Riyadh"' }, { name: 'street', value: '"Olaya St"' }] }] },
            { label: 'After <code>String c = a.getCity();</code>',
              vars: [{ name: 's', type: 'Student', ref: 'B' }, { name: 'a', type: 'Address', ref: 'A' }, { name: 'c', type: 'String', value: '"Riyadh"' }],
              objects: [
                { id: 'B', cls: 'Student', fields: [{ name: 'name', value: '"Sara"' }, { name: 'home', ref: 'A' }] },
                { id: 'A', cls: 'Address', fields: [{ name: 'city', value: '"Riyadh"' }, { name: 'street', value: '"Olaya St"' }] }] }
          ],
          ar: "getAddress تُرجع السهم إلى العنوان نفسه، لا نسخة منه." },
        { type: 'h', en: 'Why short delegating methods are kinder' },
        { type: 'p', en: "Both lines below give the same answer. But the second one is kinder to the person who uses your class." },
        { type: 'code', code: J`
          String c1 = s.getAddress().getCity();   // main must know Address exists
          String c2 = s.getCity();                // main only talks to Student
        ` },
        { type: 'list', items: [
          "<b>Easier to read:</b> one dot, one idea.",
          "<b>Safer to change:</b> if one day the city is stored in a different way, only <code>Student.getCity()</code> changes. Every call in main stays the same.",
          "<b>One place for checks:</b> if a student may have no address yet (<code>null</code>), the student checks it once, inside <code>getCity()</code>, instead of every caller checking."
        ] },
        { type: 'analogy', title: 'Talk to your friends, not to strangers', en: "Many programmers follow a simple rule: a method should talk to its own fields (its friends), not reach through them to objects far away (strangers). Main is a friend of the student, but the address is a stranger to main. So main asks the student, and the student asks the address.",
          ar: "قاعدة بسيطة: تحدّث مع أصدقائك المباشرين ولا تمد يدك عبرهم إلى الغرباء." },
        { type: 'code', code: J`
          public String getCity() {
              if (home == null) {
                  return "unknown";
              }
              return home.getCity();
          }
        ` },
        { type: 'p', en: "This version is safe even for a student without an address: the check lives in one place only.",
          ar: "التحقق من null يكون في مكان واحد داخل دالة التفويض." },
        { type: 'note', kind: 'exam', en: "Read chained calls <b>left to right</b>. In <code>c.getEngine().getPower()</code>, <code>getEngine()</code> runs first and returns an Engine; then <code>getPower()</code> runs on that Engine.",
          ar: "اقرأ{{g:|ي}} الاستدعاء المتسلسل من اليسار إلى اليمين." },
        { type: 'check', q: "In <code>c.getEngine().getPower()</code>, which method runs FIRST?",
          options: ["getPower()", "getEngine()", "Both at the same time", "Neither: it does not compile"], answer: 1,
          explain: "Left to right: <code>getEngine()</code> gives back the Engine object, then <code>getPower()</code> is called on it." },

        { type: 'steps', title: 'Worked example: a pharmacy prescription', problem: "A pharmacy prints prescriptions. A prescription has a patient name, a medicine (name and price in riyals) and a number of boxes. Read the data, then print the prescription and the total price.",
          steps: [
            { en: "Step 1: The part. A medicine has a name and a price, getters and its own toString.", code: J`
              class Medicine {
                  private String name;
                  private double price;

                  public Medicine(String name, double price) {
                      this.name = name;
                      this.price = price;
                  }

                  public double getPrice() { return price; }

                  @Override
                  public String toString() {
                      return name + " (" + price + " SAR)";
                  }
              }
            ` },
            { en: "Step 2: The whole. The prescription <b>receives</b> a Medicine in its constructor.", code: J`
              class Prescription {
                  private String patient;
                  private Medicine med;
                  private int boxes;

                  public Prescription(String patient, Medicine med, int boxes) {
                      this.patient = patient;
                      this.med = med;
                      this.boxes = boxes;
                  }
              }
            ` },
            { en: "Step 3: Delegation. The total needs the price, so the prescription asks its medicine.", code: J`
              public double total() {
                  return med.getPrice() * boxes;
              }
            ` },
            { en: "Step 4: toString uses the medicine's toString automatically.", code: J`
              @Override
              public String toString() {
                  return patient + ": " + med + " x " + boxes;
              }
            ` },
            { en: "Step 5: In main, read the input, build the part, build the whole, and print.", code: J`
              Medicine m = new Medicine(medName, price);
              Prescription p = new Prescription(patient, m, boxes);
              System.out.println(p);
              System.out.println("Total: " + p.total() + " SAR");
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String patient = sc.next();
                    String medName = sc.next();
                    double price = sc.nextDouble();
                    int boxes = sc.nextInt();

                    Medicine m = new Medicine(medName, price);
                    Prescription p = new Prescription(patient, m, boxes);
                    System.out.println(p);
                    System.out.println("Total: " + p.total() + " SAR");
                }
            }

            class Medicine {
                private String name;
                private double price;

                public Medicine(String name, double price) {
                    this.name = name;
                    this.price = price;
                }

                public double getPrice() { return price; }

                @Override
                public String toString() {
                    return name + " (" + price + " SAR)";
                }
            }

            class Prescription {
                private String patient;
                private Medicine med;
                private int boxes;

                public Prescription(String patient, Medicine med, int boxes) {
                    this.patient = patient;
                    this.med = med;
                    this.boxes = boxes;
                }

                public double total() {
                    return med.getPrice() * boxes;
                }

                @Override
                public String toString() {
                    return patient + ": " + med + " x " + boxes;
                }
            }
          `, stdin: 'Fahad Paracetamol 12.5 2', out: J`
            Fahad: Paracetamol (12.5 SAR) x 2
            Total: 25.0 SAR
          `, ar: "الوصفة تستقبل الدواء، وتسأله عن سعره لحساب المجموع (تفويض)، وتستعمل toString الخاص به." }
      ],
      mistakes: [
        { title: 'A local variable instead of the field', en: "Writing the type again creates a new <b>local</b> variable that disappears when the constructor ends. The field stays <code>null</code>, and the first call of <code>getCity()</code> crashes.", code: J`
          public Student(String name, String city, String street) {
              this.name = name;
              Address home = new Address(city, street);   // local variable!
              // correct: this.home = new Address(city, street);
          }
        `, ar: "كتابة النوع قبل home تُنشئ متغيرًا محليًا ويبقى الحقل null." },
        { title: 'The part has no toString', en: "If Address has no toString, the student prints as <code>Sara (Address@5e91993f)</code>. Give every part its own toString.", code: J`
          return name + " (" + home + ")";   // needs toString() in Address
        ` },
        { title: 'Long chains everywhere in main', en: "Writing <code>s.getAddress().getCity()</code> in ten places means ten places to fix later. Write one delegating method and call it.", code: J`
          System.out.println(s.getAddress().getCity());   // works, but...
          System.out.println(s.getCity());                // kinder
        ` },
        { title: 'Calling a method on a missing part', en: "If the part was never built, <code>home.getCity()</code> crashes with a <code>NullPointerException</code>. Build the part in the constructor, or check for <code>null</code> inside the delegating method.", code: J`
          public String getCity() {
              return home.getCity();   // crash if home is null
          }
        ` }
      ],
      remember: [
        "A constructor can <b>receive</b> a part (<code>Student(String n, Address a)</code>) or <b>build</b> it (<code>this.home = new Address(...)</code>).",
        "<b>Delegation</b>: a short method passes the job to the part: <code>return home.getCity();</code>",
        "<code>name + home</code> calls <code>home.toString()</code> automatically: each class describes itself.",
        "Chained calls run <b>left to right</b>: <code>s.getAddress().getCity()</code>.",
        "Short delegating methods are kinder: easier to read, safer to change, one place for checks."
      ],
      rememberAr: "المُنشئ إما يستقبل الجزء أو يبنيه. التفويض: دالة قصيرة تمرّر السؤال إلى الجزء. toString للكل يستعمل toString للجزء. الاستدعاء المتسلسل يُقرأ من اليسار، ودوال التفويض القصيرة أوضح وأسلم.",
      practice: [
        { t: 'mcq', q: "What is <b>delegation</b>?",
          qAr: "ما معنى التفويض؟",
          options: [
            "A method that passes the job to a part and returns its answer",
            "A constructor with no parameters",
            "Copying an object with a copy constructor",
            "Printing an object with println"
          ], answer: 0,
          explain: "In delegation a short method such as <code>getCity()</code> asks a part (<code>home.getCity()</code>) and returns the answer.",
          explainAr: "التفويض: دالة تطلب العمل من الجزء وتُرجع جوابه." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Phone p = new Phone("Grey", 80);
                  System.out.println("Battery: " + p.getLevel() + "%");
              }
          }

          class Battery {
              private int level;

              public Battery(int level) { this.level = level; }

              public int getLevel() { return level; }
          }

          class Phone {
              private String color;
              private Battery battery;

              public Phone(String color, int level) {
                  this.color = color;
                  this.battery = new Battery(level);
              }

              public int getLevel() {
                  return battery.getLevel();
              }
          }
        `, answer: 'Battery: 80%',
          explain: "The Phone constructor builds its own Battery with level 80. <code>p.getLevel()</code> delegates to <code>battery.getLevel()</code>.",
          explainAr: "الهاتف يسأل البطارية عن مستواها." },
        { t: 'fill', q: "A car builds its own engine and delegates <code>getPower()</code> to it. Complete the code.", code: J`
          class Car {
              private String plate;
              private Engine engine;

              public Car(String plate, int power) {
                  this.plate = plate;
                  this.engine = ___ Engine(power);
              }

              public int getPower() {
                  ___ engine.___();
              }
          }
        `, answers: ['new', 'return', 'getPower'],
          explain: "<code>new Engine(power)</code> builds the part. The delegating method returns the engine's answer: <code>return engine.getPower();</code>" },
        { t: 'order', q: "Put the lines in order: build a student (who builds her own address), get the address, ask it for the city, and print the city.",
          lines: [
            "Student s = new Student(\"Reem\", \"Abha\", \"Main St\");",
            "Address a = s.getAddress();",
            "String city = a.getCity();",
            "System.out.println(city);"
          ],
          explain: "Each line needs the result of the line before it. These four lines do what <code>s.getAddress().getCity()</code> does in one chain." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Team t = new Team("Falcons", "Khalid", 12);
                  System.out.println(t);
                  System.out.println(t.getCoach().getName());
                  System.out.println(t.getCoachYears());
              }
          }

          class Coach {
              private String name;
              private int years;

              public Coach(String name, int years) {
                  this.name = name;
                  this.years = years;
              }

              public String getName() { return name; }
              public int getYears() { return years; }

              @Override
              public String toString() {
                  return name + ", " + years + " years";
              }
          }

          class Team {
              private String name;
              private Coach coach;

              public Team(String name, String coachName, int years) {
                  this.name = name;
                  this.coach = new Coach(coachName, years);
              }

              public Coach getCoach() { return coach; }

              public int getCoachYears() {
                  return coach.getYears();
              }

              @Override
              public String toString() {
                  return "Team " + name + " - coach " + coach;
              }
          }
        `, answer: J`
          Team Falcons - coach Khalid, 12 years
          Khalid
          12
        `, explain: "Line 1 uses Team's toString, which uses Coach's toString. Line 2 is a chained call: getCoach() then getName(). Line 3 is a delegating method." },
        { t: 'bug', q: "<code>s.getCity()</code> crashes with a <code>NullPointerException</code>, even though the constructor gets a city and a street. Tap the line with the bug.",
          code: J`
            class Student {
                private String name;
                private Address home;

                public Student(String name, String city, String street) {
                    this.name = name;
                    Address home = new Address(city, street);
                }

                public String getCity() {
                    return home.getCity();
                }
            }
          `, bug: 7,
          fix: J`
            class Student {
                private String name;
                private Address home;

                public Student(String name, String city, String street) {
                    this.name = name;
                    this.home = new Address(city, street);
                }

                public String getCity() {
                    return home.getCity();
                }
            }
          `,
          hint: "Look for a line that declares a NEW variable with the same name as a field.",
          explain: "<code>Address home = ...</code> declares a local variable that hides the field. The address is stored in the local variable, which is thrown away when the constructor ends. The field <code>home</code> stays <code>null</code>, so <code>home.getCity()</code> crashes. Write <code>this.home = new Address(city, street);</code>",
          explainAr: "كتابة النوع أنشأت متغيرًا محليًا جديدًا، وبقي الحقل null." },
        { t: 'bug', q: "Two boxes of a medicine at 12.5 SAR should cost 25.0, but <code>total()</code> returns 14.5. Tap the line with the bug.",
          code: J`
            class Prescription {
                private Medicine med;
                private int boxes;

                public Prescription(Medicine med, int boxes) {
                    this.med = med;
                    this.boxes = boxes;
                }

                public double total() {
                    return med.getPrice() + boxes;
                }
            }
          `, bug: 11,
          fix: J`
            class Prescription {
                private Medicine med;
                private int boxes;

                public Prescription(Medicine med, int boxes) {
                    this.med = med;
                    this.boxes = boxes;
                }

                public double total() {
                    return med.getPrice() * boxes;
                }
            }
          `,
          hint: "12.5 and 2 give 14.5 with which operator?",
          explain: "The delegation is right (the prescription asks its medicine for the price), but the price is <b>added</b> to the number of boxes: 12.5 + 2 = 14.5. The total is price <b>times</b> boxes: 12.5 * 2 = 25.0." },
        { t: 'code', q: "Class <code>Room</code> is given. Write class <code>Lecture</code> with private fields <code>course</code> (String) and <code>room</code> (Room), a constructor <code>Lecture(String course, String building, int number)</code> that <b>builds</b> the room, a delegating method <code>getBuilding()</code>, and a toString that returns <code>COURSE in ROOM</code> (use the room's toString). In main read the course, the building and the room number (no prompts). Print the lecture, then <code>Building: X</code> using <code>getBuilding()</code>.",
          qAr: "اكتب{{g:|ي}} صنف المحاضرة الذي يبني القاعة بنفسه، مع دالة تفويض و toString.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    // read course, building, number; build the Lecture; print
                }
            }

            class Room {
                private String building;
                private int number;

                public Room(String building, int number) {
                    this.building = building;
                    this.number = number;
                }

                public String getBuilding() { return building; }

                @Override
                public String toString() {
                    return building + "-" + number;
                }
            }

            class Lecture {
                // fields, constructor, getBuilding(), toString()
            }
          `,
          tests: [
            { stdin: 'CS102 B 104', expected: J`
              CS102 in B-104
              Building: B
            ` },
            { stdin: 'IS201 F 12', expected: J`
              IS201 in F-12
              Building: F
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String course = sc.next();
                    String building = sc.next();
                    int number = sc.nextInt();
                    Lecture lec = new Lecture(course, building, number);
                    System.out.println(lec);
                    System.out.println("Building: " + lec.getBuilding());
                }
            }

            class Room {
                private String building;
                private int number;

                public Room(String building, int number) {
                    this.building = building;
                    this.number = number;
                }

                public String getBuilding() { return building; }

                @Override
                public String toString() {
                    return building + "-" + number;
                }
            }

            class Lecture {
                private String course;
                private Room room;

                public Lecture(String course, String building, int number) {
                    this.course = course;
                    this.room = new Room(building, number);
                }

                public String getBuilding() {
                    return room.getBuilding();
                }

                @Override
                public String toString() {
                    return course + " in " + room;
                }
            }
          `,
          hint: "In the constructor: <code>this.room = new Room(building, number);</code>. In getBuilding: <code>return room.getBuilding();</code>",
          explain: "The lecture builds its own part, delegates <code>getBuilding()</code> to the room, and lets the room describe itself inside the lecture's toString." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 3
    {
      title: 'Owned or shared parts',
      titleAr: 'أجزاء مملوكة أو مشتركة',
      minutes: 30,
      body: [
        { type: 'h', en: 'Two kinds of has-a' },
        { type: 'p', en: "Some parts belong to one object only. Other parts are shared, or used by many objects. In code both look the same: a field. But the difference matters a lot when something changes, so a good designer always asks: &quot;Is this part <b>mine only</b>, or is it <b>shared</b>?&quot;" },
        { type: 'analogy', title: 'Rooms and players', en: "The rooms of a house belong to that house. If the house is knocked down, its rooms are gone too. A football player is different: he plays for a club, he may also play for the national team, and he still exists if the club closes. Rooms are <b>owned</b> parts. Players are <b>shared</b> (used) parts.",
          ar: "غرف البيت ملك للبيت وتزول بزواله، أما اللاعب فيلعب لعدة فرق ويبقى موجودًا إذا أُغلق النادي." },
        { type: 'p', en: "The two kinds have names. <b>Composition</b> means the whole owns the part. <b>Aggregation</b> means the whole only uses a part that has its own life. (To aggregate means &quot;to collect things together&quot;.)",
          ar: "التركيب: الكل يملك الجزء. التجميع: الكل يستعمل جزءًا له حياة مستقلة." },
        { type: 'table', head: ['', 'Composition (owned)', 'Aggregation (shared / used)'], rows: [
          ['Meaning', 'The part belongs to one whole only', 'The part has its own life; others may use it too'],
          ['Who builds the part?', 'Usually the whole, inside its constructor', 'Usually someone else; the whole receives it'],
          ['If the whole is gone', 'The part is gone too', 'The part still exists'],
          ['Examples', 'House–Room, Appointment–Date, Order–OrderLine', 'Course–Student, Team–Player, Department–Teacher'],
          ['UML sign (Lesson 7)', 'filled diamond ◆', 'empty diamond ◇']
        ] },
        { type: 'check', q: "A course has students. If the course is cancelled, the students still exist and take other courses. What is this relationship?",
          options: ["Composition", "Aggregation", "Neither", "A copy constructor"], answer: 1,
          explain: "The students have their own life outside the course, so the course only <b>uses</b> them: aggregation." },

        { type: 'h', en: 'Sharing one part: two arrows to one object' },
        { type: 'p', en: "When two objects receive the <b>same</b> part, there is only one part in memory and two arrows to it. This is called <b>aliasing</b>. (An alias is a second name for the same thing.) A change made through one object is seen through the other." },
        { type: 'analogy', title: 'Two brothers, one flat', en: "Faisal and Majed are brothers and live in the same flat. If the family moves to Jeddah, both brothers now live in Jeddah. There is one flat, not two. Changing the flat once changes it for both.",
          ar: "أخوان في شقة واحدة: إذا انتقلت الأسرة إلى جدة صار الاثنان في جدة." },
        { type: 'p', en: "For this example, Address gets a setter, so an address can change:" },
        { type: 'code', code: J`
          public void setCity(String city) {
              this.city = city;
          }
        ` },
        { type: 'code', code: J`
          Address flat = new Address("Riyadh", "Olaya St");
          Student a = new Student("Faisal", flat);
          Student b = new Student("Majed", flat);
          a.getAddress().setCity("Jeddah");
          System.out.println(b.getCity());   // Jeddah
        ` },
        { type: 'memory', title: 'One address, three arrows',
          frames: [
            { label: 'After <code>Address flat = new Address("Riyadh", "Olaya St");</code>',
              vars: [{ name: 'flat', type: 'Address', ref: 'A' }],
              objects: [{ id: 'A', cls: 'Address', fields: [{ name: 'city', value: '"Riyadh"' }, { name: 'street', value: '"Olaya St"' }] }] },
            { label: 'After <code>Student a = new Student("Faisal", flat);</code>',
              vars: [{ name: 'flat', type: 'Address', ref: 'A' }, { name: 'a', type: 'Student', ref: 'B' }],
              objects: [
                { id: 'A', cls: 'Address', fields: [{ name: 'city', value: '"Riyadh"' }, { name: 'street', value: '"Olaya St"' }] },
                { id: 'B', cls: 'Student', fields: [{ name: 'name', value: '"Faisal"' }, { name: 'home', ref: 'A' }] }] },
            { label: 'After <code>Student b = new Student("Majed", flat);</code> (the same address again)',
              vars: [{ name: 'flat', type: 'Address', ref: 'A' }, { name: 'a', type: 'Student', ref: 'B' }, { name: 'b', type: 'Student', ref: 'C' }],
              objects: [
                { id: 'A', cls: 'Address', fields: [{ name: 'city', value: '"Riyadh"' }, { name: 'street', value: '"Olaya St"' }] },
                { id: 'B', cls: 'Student', fields: [{ name: 'name', value: '"Faisal"' }, { name: 'home', ref: 'A' }] },
                { id: 'C', cls: 'Student', fields: [{ name: 'name', value: '"Majed"' }, { name: 'home', ref: 'A' }] }] },
            { label: 'After <code>a.getAddress().setCity("Jeddah");</code>',
              vars: [{ name: 'flat', type: 'Address', ref: 'A' }, { name: 'a', type: 'Student', ref: 'B' }, { name: 'b', type: 'Student', ref: 'C' }],
              objects: [
                { id: 'A', cls: 'Address', fields: [{ name: 'city', value: '"Jeddah"' }, { name: 'street', value: '"Olaya St"' }] },
                { id: 'B', cls: 'Student', fields: [{ name: 'name', value: '"Faisal"' }, { name: 'home', ref: 'A' }] },
                { id: 'C', cls: 'Student', fields: [{ name: 'name', value: '"Majed"' }, { name: 'home', ref: 'A' }] }] }
          ],
          ar: "عنوان واحد وثلاثة أسهم إليه، فالتغيير عبر a يراه b و flat أيضًا." },
        { type: 'p', en: "For two brothers this is correct. But imagine only Faisal moves. Then we changed Majed's city by mistake! Sharing is good when the part really is one shared thing, and dangerous when each object should have its own." },
        { type: 'check', q: "After the code above, what is <code>flat.getCity()</code>?",
          options: ["Riyadh", "Jeddah", "null", "It crashes"], answer: 1,
          explain: "<code>flat</code>, <code>a.home</code> and <code>b.home</code> are three arrows to the same Address object, and its city is now Jeddah." },

        { type: 'h', en: 'The privacy leak' },
        { type: 'p', en: "In Unit 2 you made fields private so that nobody can change them without asking the class. Now look at this appointment. Its date is private, but the getter returns the <b>arrow</b> to the private Date object. Main can now change the appointment's date directly, and the appointment never knows. This hole is called a <b>privacy leak</b>." },
        { type: 'code', code: J`
          public Date getDate() {
              return date;    // gives away the arrow to the private object
          }
        ` },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Date d = new Date(10, 3, 2026);
                  Appointment ap = new Appointment("Huda", d);
                  Date g = ap.getDate();
                  g.setDay(31);
                  System.out.println(ap);
              }
          }

          class Date {
              private int day, month, year;

              public Date(int day, int month, int year) {
                  this.day = day;
                  this.month = month;
                  this.year = year;
              }

              public void setDay(int day) { this.day = day; }

              @Override
              public String toString() {
                  return day + "/" + month + "/" + year;
              }
          }

          class Appointment {
              private String patient;
              private Date date;

              public Appointment(String patient, Date date) {
                  this.patient = patient;
                  this.date = date;
              }

              public Date getDate() {
                  return date;
              }

              @Override
              public String toString() {
                  return patient + " on " + date;
              }
          }
        `, out: 'Huda on 31/3/2026' },
        { type: 'lines', title: 'Follow the leak', rows: [
          ['Date g = ap.getDate();', '<code>g</code> now points to the appointment\'s <b>own</b> Date object.'],
          ['g.setDay(31);', 'Main changes that object. The appointment did not agree; it was not even asked.'],
          ['System.out.println(ap);', 'The appointment now says 31/3/2026. Its private data was changed from outside.']
        ] },
        { type: 'analogy', title: 'A photo or the key?', en: "A friend wants to see your house. You can show him a <b>photo</b>, or you can give him your <b>key</b>. With the photo he can look, but he cannot change anything. With the key he can walk in and move the furniture. A getter that returns the private object itself gives away the key.",
          ar: "إرجاع الكائن الخاص نفسه مثل إعطاء مفتاح البيت، أما النسخة فمثل صورة للبيت." },
        { type: 'note', kind: 'warn', en: "<code>private</code> protects the <b>variable</b>, not the object it points to. A private field is only truly private if no method gives its arrow away.",
          ar: "private تحمي المتغير فقط، لا الكائن الذي يشير إليه إذا أعطينا سهمه لغيرنا." },

        { type: 'h', en: 'Defensive copies with a copy constructor' },
        { type: 'p', en: "The fix is a <b>defensive copy</b>: when the class receives or gives out a part that can change, it makes a copy. (A thing that can change is called <b>mutable</b>. Date has setDay, so it is mutable.) You already know the tool from Unit 2: the copy constructor." },
        { type: 'code', code: J`
          public Date(Date other) {      // copy constructor in Date
              this.day = other.day;
              this.month = other.month;
              this.year = other.year;
          }
        ` },
        { type: 'note', kind: 'tip', en: "Inside class Date you may read the private fields of <b>another</b> Date, like <code>other.day</code>. <code>private</code> means &quot;private to the class&quot;, not &quot;private to one object&quot;.",
          ar: "داخل الصنف نفسه يمكن قراءة الحقول الخاصة لكائن آخر من النوع نفسه." },
        { type: 'code', code: J`
          public Appointment(String patient, Date date) {
              this.patient = patient;
              this.date = new Date(date);     // copy coming in
          }

          public Date getDate() {
              return new Date(date);          // copy going out
          }
        ` },
        { type: 'lines', rows: [
          ['this.date = new Date(date);', 'Keep our <b>own</b> copy. If main changes its Date later, our date stays the same.'],
          ['return new Date(date);', 'Give out a photo, not the key: main gets a new Date with the same numbers.']
        ], ar: "ننسخ عند الاستلام وعند الإرجاع، فلا يصل أحد إلى كائننا الخاص." },
        { type: 'memory', title: 'Defensive copies in memory',
          en: "Watch the appointment's own Date (object C). Nothing that main does can reach it.",
          code: J`
            Date d = new Date(10, 3, 2026);
            Appointment ap = new Appointment("Huda", d);
            d.setDay(25);
            Date g = ap.getDate();
            g.setDay(1);
          `,
          frames: [
            { label: 'After <code>Date d = new Date(10, 3, 2026);</code>',
              vars: [{ name: 'd', type: 'Date', ref: 'A' }],
              objects: [{ id: 'A', cls: 'Date', fields: [{ name: 'day', value: '10' }, { name: 'month', value: '3' }, { name: 'year', value: '2026' }] }] },
            { label: 'After <code>Appointment ap = new Appointment("Huda", d);</code> (the constructor made copy C)',
              vars: [{ name: 'd', type: 'Date', ref: 'A' }, { name: 'ap', type: 'Appointment', ref: 'B' }],
              objects: [
                { id: 'A', cls: 'Date', fields: [{ name: 'day', value: '10' }, { name: 'month', value: '3' }, { name: 'year', value: '2026' }] },
                { id: 'B', cls: 'Appointment', fields: [{ name: 'patient', value: '"Huda"' }, { name: 'date', ref: 'C' }] },
                { id: 'C', cls: 'Date', fields: [{ name: 'day', value: '10' }, { name: 'month', value: '3' }, { name: 'year', value: '2026' }] }] },
            { label: 'After <code>d.setDay(25);</code> (only A changes)',
              vars: [{ name: 'd', type: 'Date', ref: 'A' }, { name: 'ap', type: 'Appointment', ref: 'B' }],
              objects: [
                { id: 'A', cls: 'Date', fields: [{ name: 'day', value: '25' }, { name: 'month', value: '3' }, { name: 'year', value: '2026' }] },
                { id: 'B', cls: 'Appointment', fields: [{ name: 'patient', value: '"Huda"' }, { name: 'date', ref: 'C' }] },
                { id: 'C', cls: 'Date', fields: [{ name: 'day', value: '10' }, { name: 'month', value: '3' }, { name: 'year', value: '2026' }] }] },
            { label: 'After <code>Date g = ap.getDate();</code> (the getter made copy D)',
              vars: [{ name: 'd', type: 'Date', ref: 'A' }, { name: 'ap', type: 'Appointment', ref: 'B' }, { name: 'g', type: 'Date', ref: 'D' }],
              objects: [
                { id: 'A', cls: 'Date', fields: [{ name: 'day', value: '25' }, { name: 'month', value: '3' }, { name: 'year', value: '2026' }] },
                { id: 'B', cls: 'Appointment', fields: [{ name: 'patient', value: '"Huda"' }, { name: 'date', ref: 'C' }] },
                { id: 'C', cls: 'Date', fields: [{ name: 'day', value: '10' }, { name: 'month', value: '3' }, { name: 'year', value: '2026' }] },
                { id: 'D', cls: 'Date', fields: [{ name: 'day', value: '10' }, { name: 'month', value: '3' }, { name: 'year', value: '2026' }] }] },
            { label: 'After <code>g.setDay(1);</code> (only D changes; C is still 10/3/2026)',
              vars: [{ name: 'd', type: 'Date', ref: 'A' }, { name: 'ap', type: 'Appointment', ref: 'B' }, { name: 'g', type: 'Date', ref: 'D' }],
              objects: [
                { id: 'A', cls: 'Date', fields: [{ name: 'day', value: '25' }, { name: 'month', value: '3' }, { name: 'year', value: '2026' }] },
                { id: 'B', cls: 'Appointment', fields: [{ name: 'patient', value: '"Huda"' }, { name: 'date', ref: 'C' }] },
                { id: 'C', cls: 'Date', fields: [{ name: 'day', value: '10' }, { name: 'month', value: '3' }, { name: 'year', value: '2026' }] },
                { id: 'D', cls: 'Date', fields: [{ name: 'day', value: '1' }, { name: 'month', value: '3' }, { name: 'year', value: '2026' }] }] }
          ],
          ar: "النسخة C ملك الموعد وحده؛ تغيير A أو D لا يصل إليها." },
        { type: 'check', q: "With defensive copies, main changes the Date object it passed to the constructor. Does the appointment's date change?",
          options: ["Yes", "No"], answer: 1,
          explain: "The constructor stored a copy, so the appointment has its own separate Date object." },

        { type: 'h', en: 'When NOT to copy' },
        { type: 'p', en: "Copies are not always right. A String can never change after it is built: it is <b>immutable</b> (the opposite of mutable). So a getter may return a String field safely, with no copy. And some parts must stay shared. Think of a course and its teacher: if the course kept a <i>copy</i> of the teacher, a new phone number for the teacher would not reach the course. Ask yourself: should this part be <b>one</b> thing seen by everybody, or <b>my own</b> thing?" },
        { type: 'table', head: ['Part', 'Copy it?', 'Why'], rows: [
          ['Date of an Appointment', 'Yes', 'The appointment owns its date; nobody else may move it.'],
          ['Address of two brothers', 'No, share it', 'One real flat; a move must reach both.'],
          ['Teacher of a Course', 'No, share it', 'One real person, used by many courses.'],
          ['A String field such as name', 'No need', 'Strings are immutable: nobody can change them.']
        ] },
        { type: 'note', kind: 'exam', en: "Typical exam question: &quot;Explain the privacy leak in this getter and fix it.&quot; Answer: the getter returns a reference to a mutable private object, so callers can change it. Return a copy instead: <code>return new Date(date);</code>",
          ar: "سؤال شائع: اشرح تسرّب الخصوصية وأصلحه بإرجاع نسخة." },

        { type: 'steps', title: 'Worked example: a safe exam date', problem: "The university keeps the final exam date of each course, and it must not change by accident. Read a course code and a date. Then try to change the date from outside in two ways, and show that the exam date is still correct.",
          steps: [
            { en: "Step 1: Date needs a copy constructor and a setter (so it is mutable).", code: J`
              public Date(Date other) {
                  this.day = other.day;
                  this.month = other.month;
                  this.year = other.year;
              }

              public void setDay(int day) { this.day = day; }
            ` },
            { en: "Step 2: Exam keeps its own copy when it receives the date.", code: J`
              public Exam(String course, Date date) {
                  this.course = course;
                  this.date = new Date(date);
              }
            ` },
            { en: "Step 3: Exam gives out a copy, never its own object.", code: J`
              public Date getDate() {
                  return new Date(date);
              }
            ` },
            { en: "Step 4: In main, try to break it in two ways: change the date we passed in, and change the date we got back.", code: J`
              d.setDay(1);
              ex.getDate().setDay(2);
            ` },
            { en: "Step 5: Print the exam and the outside date. Only the outside date changed.", code: J`
              System.out.println(ex);
              System.out.println("Outside date: " + d);
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String code = sc.next();
                    int day = sc.nextInt();
                    int month = sc.nextInt();
                    int year = sc.nextInt();
                    Date d = new Date(day, month, year);
                    Exam ex = new Exam(code, d);

                    d.setDay(1);
                    ex.getDate().setDay(2);

                    System.out.println(ex);
                    System.out.println("Outside date: " + d);
                }
            }

            class Date {
                private int day, month, year;

                public Date(int day, int month, int year) {
                    this.day = day;
                    this.month = month;
                    this.year = year;
                }

                public Date(Date other) {
                    this.day = other.day;
                    this.month = other.month;
                    this.year = other.year;
                }

                public void setDay(int day) { this.day = day; }

                @Override
                public String toString() {
                    return day + "/" + month + "/" + year;
                }
            }

            class Exam {
                private String course;
                private Date date;

                public Exam(String course, Date date) {
                    this.course = course;
                    this.date = new Date(date);
                }

                public Date getDate() {
                    return new Date(date);
                }

                @Override
                public String toString() {
                    return course + " exam on " + date;
                }
            }
          `, stdin: 'CS102 20 1 2027', out: J`
            CS102 exam on 20/1/2027
            Outside date: 1/1/2027
          `, ar: "بفضل النسخ الدفاعية بقي تاريخ الاختبار صحيحًا رغم محاولتين لتغييره من الخارج." }
      ],
      mistakes: [
        { title: 'Returning the private part itself', en: "The getter hands out the arrow to a mutable private object: a privacy leak. Return a copy.", code: J`
          public Date getDate() {
              return date;             // leak
              // correct: return new Date(date);
          }
        `, ar: "إرجاع الكائن الخاص نفسه تسرّب؛ أرجع{{g:|ي}} نسخة." },
        { title: 'Storing the received part without a copy', en: "If the class must own its part, <code>this.date = date;</code> is not enough: main still holds an arrow to the same object and can change it later.", code: J`
          this.date = date;              // main can still change it
          this.date = new Date(date);    // our own copy
        ` },
        { title: 'Thinking = makes a copy', en: "<code>Date copy = date;</code> copies the arrow only. There is still one Date object. A real copy needs <code>new</code>.", code: J`
          Date copy = date;              // same object, two names
          Date copy2 = new Date(date);   // a real second object
        ` },
        { title: 'Copying a part that must be shared', en: "A course must point to the <b>real</b> teacher. If it stores a copy, later changes to the teacher (a new office, a new phone) are not seen by the course.", code: J`
          this.teacher = new Teacher(t);   // wrong here: the teacher is shared
          this.teacher = t;                // right: one real teacher
        ` }
      ],
      remember: [
        "<b>Composition</b>: the whole owns the part (House–Room). <b>Aggregation</b>: the part is shared or used and lives on its own (Course–Student).",
        "Two objects with the same part = one object, two arrows (<b>aliasing</b>). A change through one is seen by both.",
        "A getter that returns a mutable private object causes a <b>privacy leak</b>.",
        "Fix it with <b>defensive copies</b>: <code>this.date = new Date(date);</code> and <code>return new Date(date);</code>",
        "Do not copy Strings (immutable) or parts that must stay shared."
      ],
      rememberAr: "التركيب: الكل يملك الجزء، والتجميع: الجزء مشترك وله حياة مستقلة. الجزء المشترك سهمان لكائن واحد. إرجاع كائن خاص قابل للتغيير تسرّب، وعلاجه النسخ الدفاعية بمُنشئ النسخ.",
      practice: [
        { t: 'mcq', q: "Which pair is <b>composition</b> (the whole owns the part)?",
          qAr: "أي زوج يمثل التركيب؟",
          options: ["A house and its rooms", "A course and its students", "A team and its players", "A department and its teachers"], answer: 0,
          explain: "Rooms belong to one house and disappear with it. Students, players and teachers have their own lives: aggregation.",
          explainAr: "الغرف تزول بزوال البيت، فهي تركيب." },
        { t: 'output', q: "Ali and Omar share one wallet. What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Wallet w = new Wallet(100);
                  Person a = new Person("Ali", w);
                  Person b = new Person("Omar", w);
                  a.getWallet().spend(30);
                  System.out.println(b.getWallet().getCash());
              }
          }

          class Wallet {
              private int cash;

              public Wallet(int cash) { this.cash = cash; }

              public void spend(int amount) { cash = cash - amount; }

              public int getCash() { return cash; }
          }

          class Person {
              private String name;
              private Wallet wallet;

              public Person(String name, Wallet wallet) {
                  this.name = name;
                  this.wallet = wallet;
              }

              public Wallet getWallet() { return wallet; }
          }
        `, answer: '70',
          explain: "There is only one Wallet object. Ali spends 30 from it, and Omar looks at the same wallet: 100 - 30 = 70.",
          explainAr: "محفظة واحدة لشخصين، فالتغيير يظهر للاثنين." },
        { t: 'fill', q: "Complete the defensive copies in class <code>Appointment</code>.", code: J`
          public Appointment(String patient, Date date) {
              this.patient = patient;
              this.date = ___ Date(___);
          }

          public Date getDate() {
              return new Date(___);
          }
        `, answers: ['new', 'date', ['date', 'this.date']],
          explain: "Both methods use the copy constructor: <code>new Date(date)</code>. The constructor copies the parameter; the getter copies the field." },
        { t: 'order', q: "Put the lines in order: build a date, give it to an appointment, get a copy back, change the copy, and only at the <b>end</b> print the appointment.",
          lines: [
            "Date d = new Date(5, 4, 2026);",
            "Appointment ap = new Appointment(\"Huda\", d);",
            "Date copy = ap.getDate();",
            "copy.setDay(9);",
            "System.out.println(ap);"
          ],
          explain: "With defensive copies, the last line still prints 5/4/2026: changing the copy does not touch the appointment." },
        { t: 'output', q: "The constructor copies, but look at the getter. What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Date d = new Date(10, 3);
                  Appointment ap = new Appointment(d);
                  d.setDay(20);
                  ap.getDate().setDay(30);
                  System.out.println(d + " " + ap);
              }
          }

          class Date {
              private int day, month;

              public Date(int day, int month) {
                  this.day = day;
                  this.month = month;
              }

              public Date(Date other) {
                  this.day = other.day;
                  this.month = other.month;
              }

              public void setDay(int day) { this.day = day; }

              @Override
              public String toString() { return day + "/" + month; }
          }

          class Appointment {
              private Date date;

              public Appointment(Date date) {
                  this.date = new Date(date);
              }

              public Date getDate() {
                  return date;
              }

              @Override
              public String toString() { return "Appointment on " + date; }
          }
        `, answer: '20/3 Appointment on 30/3',
          explain: "The constructor made a copy, so <code>d.setDay(20)</code> changes only <code>d</code>. But <code>getDate()</code> returns the appointment's own object, so <code>setDay(30)</code> changes the appointment: a privacy leak.",
          explainAr: "المُنشئ نسخ، لكن دالة الجلب سرّبت الكائن الخاص." },
        { t: 'bug', q: "Class <code>Exam</code> must protect its date with defensive copies, but main can still change the exam's date. Tap the line with the bug.",
          code: J`
            class Exam {
                private String course;
                private Date date;

                public Exam(String course, Date date) {
                    this.course = course;
                    this.date = new Date(date);
                }

                public Date getDate() {
                    return date;
                }
            }
          `, bug: 11,
          fix: J`
            class Exam {
                private String course;
                private Date date;

                public Exam(String course, Date date) {
                    this.course = course;
                    this.date = new Date(date);
                }

                public Date getDate() {
                    return new Date(date);
                }
            }
          `,
          hint: "The constructor is fine. What does the getter give away?",
          explain: "<code>return date;</code> gives main the arrow to the exam's own Date, so <code>ex.getDate().setDay(1)</code> changes the exam. Returning <code>new Date(date)</code> gives a separate copy.",
          explainAr: "دالة الجلب تُرجع الكائن الخاص نفسه؛ الصحيح إرجاع نسخة." },
        { t: 'bug', q: "A copy of the date 15/3/2026 prints as <code>15/0/2026</code>. Tap the line with the bug.",
          code: J`
            class Date {
                private int day, month, year;

                public Date(int day, int month, int year) {
                    this.day = day;
                    this.month = month;
                    this.year = year;
                }

                public Date(Date other) {
                    this.day = other.day;
                    this.month = month;
                    this.year = other.year;
                }
            }
          `, bug: 12,
          fix: J`
            class Date {
                private int day, month, year;

                public Date(int day, int month, int year) {
                    this.day = day;
                    this.month = month;
                    this.year = year;
                }

                public Date(Date other) {
                    this.day = other.day;
                    this.month = other.month;
                    this.year = other.year;
                }
            }
          `,
          hint: "In the copy constructor, every value must come from <code>other</code>.",
          explain: "In the copy constructor there is no parameter called <code>month</code>, so <code>month</code> means the new object's own field, which is still 0. The line copies 0 into itself. It must read <code>other.month</code>." },
        { t: 'code', q: "Class <code>Time</code> (mutable, with a copy constructor) and the whole <code>main</code> are given. Write class <code>Lecture</code> with private fields <code>course</code> (String) and <code>time</code> (Time), a constructor <code>Lecture(String course, Time time)</code>, a getter <code>getTime()</code>, and toString <code>COURSE at TIME</code>. Use <b>defensive copies</b> so that main cannot change the lecture's time.",
          qAr: "اكتب{{g:|ي}} صنف المحاضرة مع نسخ دفاعية في المُنشئ ودالة الجلب.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String course = sc.next();
                    int hour = sc.nextInt();
                    int minute = sc.nextInt();
                    int newHour = sc.nextInt();
                    Time t = new Time(hour, minute);
                    Lecture lec = new Lecture(course, t);
                    t.setHour(newHour);
                    lec.getTime().setHour(newHour);
                    System.out.println(lec);
                    System.out.println("Outside: " + t);
                }
            }

            class Time {
                private int hour, minute;

                public Time(int hour, int minute) {
                    this.hour = hour;
                    this.minute = minute;
                }

                public Time(Time other) {
                    this.hour = other.hour;
                    this.minute = other.minute;
                }

                public void setHour(int hour) { this.hour = hour; }

                @Override
                public String toString() { return hour + ":" + minute; }
            }

            class Lecture {
                // fields, constructor, getTime(), toString()
            }
          `,
          tests: [
            { stdin: 'IS201 10 30 13', expected: J`
              IS201 at 10:30
              Outside: 13:30
            ` },
            { stdin: 'CS102 8 15 9', expected: J`
              CS102 at 8:15
              Outside: 9:15
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String course = sc.next();
                    int hour = sc.nextInt();
                    int minute = sc.nextInt();
                    int newHour = sc.nextInt();
                    Time t = new Time(hour, minute);
                    Lecture lec = new Lecture(course, t);
                    t.setHour(newHour);
                    lec.getTime().setHour(newHour);
                    System.out.println(lec);
                    System.out.println("Outside: " + t);
                }
            }

            class Time {
                private int hour, minute;

                public Time(int hour, int minute) {
                    this.hour = hour;
                    this.minute = minute;
                }

                public Time(Time other) {
                    this.hour = other.hour;
                    this.minute = other.minute;
                }

                public void setHour(int hour) { this.hour = hour; }

                @Override
                public String toString() { return hour + ":" + minute; }
            }

            class Lecture {
                private String course;
                private Time time;

                public Lecture(String course, Time time) {
                    this.course = course;
                    this.time = new Time(time);
                }

                public Time getTime() {
                    return new Time(time);
                }

                @Override
                public String toString() {
                    return course + " at " + time;
                }
            }
          `,
          hint: "Copy in the constructor (<code>new Time(time)</code>) and copy again in the getter.",
          explain: "Main changes its own Time and the Time returned by the getter. Because both are copies, the lecture keeps its original time." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 4
    {
      title: 'Arrays of objects',
      titleAr: 'مصفوفات الكائنات',
      minutes: 30,
      body: [
        { type: 'h', en: 'The problem: many objects of the same class' },
        { type: 'p', en: "A section of CS102 has 30 students. You would never write 30 variables <code>s1</code>, <code>s2</code>, … <code>s30</code>. In CS101 you stored many numbers in an array. Now you will store many <b>objects</b> in an array: one variable, many students, and a loop to visit them all." },
        { type: 'p', en: "In this lesson we use this small Student class:" },
        { type: 'code', code: J`
          class Student {
              private String name;
              private double gpa;

              public Student(String name, double gpa) {
                  this.name = name;
                  this.gpa = gpa;
              }

              public String getName() { return name; }
              public double getGpa() { return gpa; }

              @Override
              public String toString() { return name + " (" + gpa + ")"; }
          }
        ` },
        { type: 'h', en: 'Creating the array: slots, not students' },
        { type: 'code', code: J`
          Student[] list = new Student[3];
        ` },
        { type: 'lines', rows: [
          ['Student[]', 'The type: an array of Student references.'],
          ['list', 'The variable. It points to the array object.'],
          ['new Student[3]', 'Build the array with 3 slots. Each slot can hold an arrow to a Student. <b>No Student is built!</b> Every slot starts as <code>null</code>.']
        ], ar: "new Student[3] تبني مصفوفة فيها ثلاث خانات فارغة null، ولا تبني أي طالب." },
        { type: 'analogy', title: 'The empty car park', en: "A new car park with 3 numbered spaces is built. The spaces are ready, but there are no cars yet. Each car must arrive by itself. <code>new Student[3]</code> builds the spaces; every <code>new Student(...)</code> brings one car into one space.",
          ar: "new Student[3] تبني المواقف فقط، وكل سيارة (كائن) تأتي وحدها بـ new." },
        { type: 'note', kind: 'exam', en: "<code>new Student[3]</code> builds <b>one</b> object: the array. It builds <b>zero</b> Student objects. Exams love this question.",
          ar: "هذا السطر يبني كائنًا واحدًا هو المصفوفة، وصفر طلاب." },
        { type: 'check', q: "How many Student objects exist after <code>Student[] list = new Student[5];</code>?",
          options: ["0", "1", "5", "6"], answer: 0,
          explain: "Only the array object is built. Its 5 slots are all <code>null</code> until you put students in them." },

        { type: 'h', en: 'Filling the slots' },
        { type: 'p', en: "Each slot gets its own object, built with <code>new</code>. Slot numbers (indexes) start at 0, as with every array in CS101." },
        { type: 'code', code: J`
          list[0] = new Student("Sara", 3.6);
          list[1] = new Student("Omar", 2.9);
          list[2] = new Student("Lina", 3.2);
        ` },
        { type: 'lines', rows: [
          ['list[0]', 'The first slot (index 0).'],
          ['= new Student("Sara", 3.6);', 'Build one student and put its arrow in slot 0.']
        ] },
        { type: 'memory', title: 'An array object whose slots point to students',
          frames: [
            { label: 'After <code>Student[] list = new Student[3];</code>',
              vars: [{ name: 'list', type: 'Student[]', ref: 'A' }],
              objects: [{ id: 'A', cls: 'Student[]', fields: [{ name: 'length', value: '3' }, { name: '[0]', value: 'null' }, { name: '[1]', value: 'null' }, { name: '[2]', value: 'null' }] }] },
            { label: 'After <code>list[0] = new Student("Sara", 3.6);</code>',
              vars: [{ name: 'list', type: 'Student[]', ref: 'A' }],
              objects: [
                { id: 'A', cls: 'Student[]', fields: [{ name: 'length', value: '3' }, { name: '[0]', ref: 'B' }, { name: '[1]', value: 'null' }, { name: '[2]', value: 'null' }] },
                { id: 'B', cls: 'Student', fields: [{ name: 'name', value: '"Sara"' }, { name: 'gpa', value: '3.6' }] }] },
            { label: 'After <code>list[1] = new Student("Omar", 2.9);</code>',
              vars: [{ name: 'list', type: 'Student[]', ref: 'A' }],
              objects: [
                { id: 'A', cls: 'Student[]', fields: [{ name: 'length', value: '3' }, { name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', value: 'null' }] },
                { id: 'B', cls: 'Student', fields: [{ name: 'name', value: '"Sara"' }, { name: 'gpa', value: '3.6' }] },
                { id: 'C', cls: 'Student', fields: [{ name: 'name', value: '"Omar"' }, { name: 'gpa', value: '2.9' }] }] },
            { label: 'After <code>list[2] = new Student("Lina", 3.2);</code>',
              vars: [{ name: 'list', type: 'Student[]', ref: 'A' }],
              objects: [
                { id: 'A', cls: 'Student[]', fields: [{ name: 'length', value: '3' }, { name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'D' }] },
                { id: 'B', cls: 'Student', fields: [{ name: 'name', value: '"Sara"' }, { name: 'gpa', value: '3.6' }] },
                { id: 'C', cls: 'Student', fields: [{ name: 'name', value: '"Omar"' }, { name: 'gpa', value: '2.9' }] },
                { id: 'D', cls: 'Student', fields: [{ name: 'name', value: '"Lina"' }, { name: 'gpa', value: '3.2' }] }] }
          ],
          ar: "المصفوفة نفسها كائن، وكل خانة فيها سهم إلى كائن طالب مستقل." },
        { type: 'check', q: "After the three lines above, what does <code>list[1].getName()</code> return?",
          options: ["Sara", "Omar", "Lina", "null"], answer: 1,
          explain: "Slot 1 (the second slot) points to the student Omar." },

        { type: 'h', en: 'Looping over the objects' },
        { type: 'p', en: "A normal for loop from CS101 visits every slot. Inside the loop, <code>list[i]</code> is a Student, so you can call its methods with a dot." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Student[] list = new Student[3];
                  list[0] = new Student("Sara", 3.6);
                  list[1] = new Student("Omar", 2.9);
                  list[2] = new Student("Lina", 3.2);

                  for (int i = 0; i < list.length; i++) {
                      System.out.println(list[i].getName() + " " + list[i].getGpa());
                  }
              }
          }

          class Student {
              private String name;
              private double gpa;

              public Student(String name, double gpa) {
                  this.name = name;
                  this.gpa = gpa;
              }

              public String getName() { return name; }
              public double getGpa() { return gpa; }

              @Override
              public String toString() { return name + " (" + gpa + ")"; }
          }
        `, out: J`
          Sara 3.6
          Omar 2.9
          Lina 3.2
        ` },
        { type: 'lines', rows: [
          ['i < list.length', '<code>list.length</code> is 3, the number of slots.'],
          ['list[i].getName()', 'Go to slot i, follow the arrow to the student, and call getName().']
        ], ar: "list[i] طالب، فنستدعي دواله بالنقطة." },
        { type: 'p', en: "You can also use the for-each loop from CS101. Each round, <code>s</code> is the arrow from the next slot. Because Student has a toString, <code>println(s)</code> prints it nicely." },
        { type: 'code', code: J`
          for (Student s : list) {
              System.out.println(s);     // Sara (3.6), then Omar (2.9), then Lina (3.2)
          }
        ` },

        { type: 'h', en: 'Danger: calling a method on an empty slot' },
        { type: 'p', en: "What if a slot is still empty? It holds <code>null</code>: there is no student to ask. Calling a method on <code>null</code> stops the program at once with an error called <code>NullPointerException</code>." },
        { type: 'analogy', title: 'Ringing the bell of an empty plot', en: "You walk to house number 2 on your street and ring the bell, but number 2 is an empty plot of land: nobody lives there. Nobody can answer you. Java is in the same position when you ask an empty slot for a name, so it stops.",
          ar: "كأنك تطرق باب أرض فارغة: لا أحد يجيب، فيتوقف البرنامج." },
        { type: 'code', code: J`
          public class Main {
              public static void main(String[] args) {
                  Student[] list = new Student[3];
                  list[0] = new Student("Sara", 3.6);
                  System.out.println(list[0].getName());
                  System.out.println(list[1].getName());
              }
          }
          // class Student as above
        ` },
        { type: 'p', en: "This program prints <code>Sara</code> and then stops with the message below. (In NetBeans it appears in red in the Output window.) Do not be afraid of it: read it with us, part by part." },
        { type: 'code', code: J`
          Sara
          Exception in thread "main" java.lang.NullPointerException: Cannot invoke "Student.getName()" because "list[1]" is null
              at Main.main(Main.java:6)
        ` },
        { type: 'lines', title: 'Read the error message', rows: [
          ['NullPointerException', 'The name of the error: a <code>null</code> reference was used as if it were an object.'],
          ['Cannot invoke "Student.getName()"', 'Java could not call getName().'],
          ['because "list[1]" is null', 'The reason: slot 1 is empty.'],
          ['at Main.main(Main.java:6)', 'Line 6 of Main.java: start looking there.']
        ], ar: "رسالة الخطأ تخبرك بالسبب ورقم السطر؛ اقرأ{{g:|ي}}ها بهدوء." },
        { type: 'note', kind: 'tip', en: "The exact words can differ a little between Java versions, but the error name and the line number are always there.",
          ar: "قد تختلف الكلمات قليلًا، لكن اسم الخطأ ورقم السطر موجودان دائمًا." },
        { type: 'p', en: "The fix: if some slots may be empty, check each slot before you use it.",
          ar: "قبل استدعاء دالة على خانة، تأكد{{g:|ي}} أنها ليست null." },
        { type: 'code', code: J`
          for (int i = 0; i < list.length; i++) {
              if (list[i] != null) {
                  System.out.println(list[i].getName());
              }
          }
        ` },
        { type: 'check', q: "What happens with <code>list[2].getGpa()</code> when <code>list[2]</code> is <code>null</code>?",
          options: ["It returns 0.0", "It prints null", "The program stops with a NullPointerException", "It does not compile"], answer: 2,
          explain: "The code compiles, but at run time there is no object in slot 2, so Java stops with a NullPointerException." },

        { type: 'h', en: 'Searching the array: the best student' },
        { type: 'p', en: "With numbers, a search remembers the best <i>number</i>. With objects, a search remembers an <b>arrow to the best object</b>. Then you can print anything about it: its name, its GPA, or the whole object." },
        { type: 'code', code: J`
          Student best = list[0];
          for (int i = 1; i < list.length; i++) {
              if (list[i].getGpa() > best.getGpa()) {
                  best = list[i];
              }
          }
          System.out.println("Top: " + best.getName());
        ` },
        { type: 'lines', rows: [
          ['Student best = list[0];', '<code>best</code> is an arrow. No new student is built: it points to the same object as slot 0.'],
          ['if (list[i].getGpa() > best.getGpa())', 'Compare the GPA of the student in slot i with the best so far.'],
          ['best = list[i];', 'Move the arrow to the better student.']
        ], ar: "المتغير best سهم إلى أفضل طالب، ولا يُنشئ طالبًا جديدًا." },
        { type: 'check', q: "With the array Sara 3.6, Omar 2.9, Lina 3.2, what does the search print?",
          options: ["Top: Sara", "Top: Omar", "Top: Lina", "Top: 3.6"], answer: 0,
          explain: "Sara starts as the best. Omar (2.9) and Lina (3.2) are not higher than 3.6, so the arrow never moves." },

        { type: 'steps', title: 'Worked example: a football league table', problem: "Read the number of teams, then each team's name and points. Keep them as Team objects in an array. Print every team, then the leader (the team with the most points).",
          steps: [
            { en: "Step 1: A small Team class with a constructor, getters and toString.", code: J`
              class Team {
                  private String name;
                  private int points;

                  public Team(String name, int points) {
                      this.name = name;
                      this.points = points;
                  }

                  public String getName() { return name; }
                  public int getPoints() { return points; }

                  @Override
                  public String toString() { return name + " " + points; }
              }
            ` },
            { en: "Step 2: Read n and build an array with n empty slots.", code: J`
              int n = sc.nextInt();
              Team[] table = new Team[n];
            ` },
            { en: "Step 3: Fill every slot with a new Team built from the input.", code: J`
              for (int i = 0; i < n; i++) {
                  String name = sc.next();
                  int points = sc.nextInt();
                  table[i] = new Team(name, points);
              }
            ` },
            { en: "Step 4: Print every team (println uses toString).", code: J`
              for (int i = 0; i < n; i++) {
                  System.out.println(table[i]);
              }
            ` },
            { en: "Step 5: Find the leader: keep an arrow to the best team so far.", code: J`
              Team leader = table[0];
              for (int i = 1; i < n; i++) {
                  if (table[i].getPoints() > leader.getPoints()) {
                      leader = table[i];
                  }
              }
              System.out.println("Leader: " + leader.getName() + " with " + leader.getPoints() + " points");
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Team[] table = new Team[n];

                    for (int i = 0; i < n; i++) {
                        String name = sc.next();
                        int points = sc.nextInt();
                        table[i] = new Team(name, points);
                    }

                    for (int i = 0; i < n; i++) {
                        System.out.println(table[i]);
                    }

                    Team leader = table[0];
                    for (int i = 1; i < n; i++) {
                        if (table[i].getPoints() > leader.getPoints()) {
                            leader = table[i];
                        }
                    }
                    System.out.println("Leader: " + leader.getName() + " with " + leader.getPoints() + " points");
                }
            }

            class Team {
                private String name;
                private int points;

                public Team(String name, int points) {
                    this.name = name;
                    this.points = points;
                }

                public String getName() { return name; }
                public int getPoints() { return points; }

                @Override
                public String toString() { return name + " " + points; }
            }
          `, stdin: J`
            4
            Falcons 45
            Eagles 41
            Stars 47
            Lions 38
          `, out: J`
            Falcons 45
            Eagles 41
            Stars 47
            Lions 38
            Leader: Stars with 47 points
          `, ar: "ننشئ المصفوفة، ثم نملأ كل خانة بكائن جديد، ثم نطبع ونبحث عن المتصدر بسهم إلى أفضل فريق." }
      ],
      mistakes: [
        { title: 'Thinking new Student[3] builds three students', en: "The array starts with three <code>null</code> slots. Using a slot before putting a student in it crashes.", code: J`
          Student[] list = new Student[3];
          System.out.println(list[0].getName());   // crash: list[0] is null
        `, ar: "المصفوفة الجديدة خاناتها null، ولا طلاب فيها بعد." },
        { title: 'Calling a method on an empty slot', en: "When only some slots are filled, check <code>list[i] != null</code> before calling a method.", code: J`
          if (list[i] != null) {
              System.out.println(list[i].getName());
          }
        ` },
        { title: 'Going one step too far', en: "<code>i &lt;= list.length</code> visits index 3 of a 3-slot array, which does not exist: <code>ArrayIndexOutOfBoundsException</code>. Use <code>i &lt; list.length</code>.", code: J`
          for (int i = 0; i <= list.length; i++)   // wrong
          for (int i = 0; i < list.length; i++)    // right
        ` },
        { title: 'Printing the whole array at once', en: "<code>System.out.println(list)</code> prints something like <code>[LStudent;@1b6d3586</code>, not the students. Use a loop and print each slot.", code: J`
          System.out.println(list);        // [LStudent;@1b6d3586
          for (Student s : list) {
              System.out.println(s);       // each student
          }
        ` }
      ],
      remember: [
        "<code>new Student[3]</code> builds one array with 3 slots, all <code>null</code>. No Student exists yet.",
        "Fill each slot with <code>new</code>: <code>list[0] = new Student(...);</code>",
        "<code>list[i].getName()</code>: go to slot i, follow the arrow, call the method.",
        "Calling a method on a <code>null</code> slot stops the program with a <b>NullPointerException</b>. Check <code>list[i] != null</code> when slots may be empty.",
        "A search keeps an arrow to the best object: <code>Student best = list[0];</code>"
      ],
      rememberAr: "new Student[3] تبني مصفوفة بخانات null فقط. ضع{{g:|ي}} في كل خانة كائنًا جديدًا بـ new. list[i] كائن نستدعي دواله بالنقطة، واستدعاء دالة على خانة null يوقف البرنامج. البحث يحفظ سهمًا إلى أفضل كائن.",
      practice: [
        { t: 'mcq', q: "After these two lines, how many <b>Book</b> objects exist?", code: J`
          Book[] shelf = new Book[4];
          shelf[0] = new Book("Java");
        `,
          qAr: "كم كائن كتاب يوجد بعد هذين السطرين؟",
          options: ["0", "1", "4", "5"], answer: 1,
          explain: "The first line builds only the array (4 empty slots). The second line builds one Book and puts it in slot 0.",
          explainAr: "السطر الأول يبني المصفوفة فقط، والثاني يبني كتابًا واحدًا." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Item[] cart = new Item[3];
                  cart[0] = new Item("Tea", 5);
                  cart[2] = new Item("Cake", 12);
                  for (int i = 0; i < cart.length; i++) {
                      if (cart[i] != null) {
                          System.out.println(cart[i].getName());
                      } else {
                          System.out.println("empty");
                      }
                  }
              }
          }

          class Item {
              private String name;
              private int price;

              public Item(String name, int price) {
                  this.name = name;
                  this.price = price;
              }

              public String getName() { return name; }
          }
        `, answer: J`
          Tea
          empty
          Cake
        `, explain: "Slot 1 was never filled, so it is <code>null</code> and the else branch prints <code>empty</code>. The null check prevents a crash.",
          explainAr: "الخانة 1 فارغة، فطبعنا empty بدل أن يتوقف البرنامج." },
        { t: 'fill', q: "Build an array for two patients, fill both slots, and print every name.", code: J`
          Patient[] queue = ___ Patient[2];
          queue[0] = new Patient("Noura", 30);
          queue[1] = ___ Patient("Fahad", 45);
          for (int i = 0; i < queue.___; i++) {
              System.out.println(queue[i].getName());
          }
        `, answers: ['new', 'new', 'length'],
          explain: "<code>new Patient[2]</code> builds the array; each <code>new Patient(...)</code> builds one patient; <code>queue.length</code> is the number of slots." },
        { t: 'order', q: "Put the lines in order: read n, build an array of n items, fill it from the input, then print the name of the last item.",
          lines: [
            "Scanner sc = new Scanner(System.in);",
            "int n = sc.nextInt();",
            "Item[] cart = new Item[n];",
            "for (int i = 0; i < n; i++) {",
            "    cart[i] = new Item(sc.next(), sc.nextInt());",
            "}",
            "System.out.println(cart[n - 1].getName());"
          ],
          explain: "You need n before you can build the array, and the array must be filled before you read its last slot (index n - 1)." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Player[] team = new Player[3];
                  team[0] = new Player("Salem", 4);
                  team[1] = new Player("Yousef", 7);
                  team[2] = new Player("Turki", 7);
                  Player best = team[0];
                  for (int i = 1; i < team.length; i++) {
                      if (team[i].getGoals() > best.getGoals()) {
                          best = team[i];
                      }
                  }
                  System.out.println(best.getName() + " " + best.getGoals());
              }
          }

          class Player {
              private String name;
              private int goals;

              public Player(String name, int goals) {
                  this.name = name;
                  this.goals = goals;
              }

              public String getName() { return name; }
              public int getGoals() { return goals; }
          }
        `, answer: 'Yousef 7',
          explain: "Yousef (7) is more than Salem (4), so the arrow moves to Yousef. Turki also has 7, but 7 &gt; 7 is false, so the arrow stays on Yousef." },
        { t: 'bug', q: "This code prints the three names and then crashes. Tap the line with the bug.",
          code: J`
            Student[] list = new Student[3];
            list[0] = new Student("Sara", 3.6);
            list[1] = new Student("Omar", 2.9);
            list[2] = new Student("Lina", 3.2);
            for (int i = 0; i <= list.length; i++) {
                System.out.println(list[i].getName());
            }
          `, bug: 5,
          fix: J`
            Student[] list = new Student[3];
            list[0] = new Student("Sara", 3.6);
            list[1] = new Student("Omar", 2.9);
            list[2] = new Student("Lina", 3.2);
            for (int i = 0; i < list.length; i++) {
                System.out.println(list[i].getName());
            }
          `,
          hint: "How many times does the loop run? Which indexes exist?",
          explain: "The indexes are 0, 1 and 2. With <code>&lt;=</code> the loop also tries <code>list[3]</code>, which does not exist, so Java stops with an <code>ArrayIndexOutOfBoundsException</code>. Use <code>i &lt; list.length</code>.",
          explainAr: "الشرط <= يتجاوز آخر خانة؛ الصحيح <." },
        { t: 'bug', q: "This search for the best student crashes with a <code>NullPointerException</code> on line 3. But the real mistake is on another line. Tap it.",
          code: J`
            Student best = null;
            for (int i = 0; i < list.length; i++) {
                if (list[i].getGpa() > best.getGpa()) {
                    best = list[i];
                }
            }
            System.out.println(best.getName());
          `, bug: 1,
          fix: J`
            Student best = list[0];
            for (int i = 1; i < list.length; i++) {
                if (list[i].getGpa() > best.getGpa()) {
                    best = list[i];
                }
            }
            System.out.println(best.getName());
          `,
          hint: "Where does best get its first value?",
          explain: "<code>best</code> starts as <code>null</code>, so the first <code>best.getGpa()</code> crashes. Start with a real student: <code>Student best = list[0];</code> and loop from 1. A crash line is where the problem <i>shows</i>; the bug can be earlier.",
          explainAr: "best يبدأ null؛ ابدأ{{g:|ي}} بأول طالب في المصفوفة." },
        { t: 'code', q: "Class <code>Product</code> is given. Read <code>n</code>, then <code>n</code> products, each a one-word name and a price (no prompts). Store them in a <code>Product[]</code> array. Print the most expensive product as <code>NAME PRICE</code>. If two products have the same highest price, print the first one.",
          qAr: "اقرأ{{g:|ي}} المنتجات في مصفوفة كائنات واطبع{{g:|ي}} الأغلى.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    // read n, fill the array, find and print the most expensive
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
          tests: [
            { stdin: J`
              3
              Tea 5.5
              Cake 12.0
              Juice 8.25
            `, expected: 'Cake 12.0' },
            { stdin: J`
              4
              Pen 2.5
              Bag 45.0
              Book 45.0
              Ruler 3.0
            `, expected: 'Bag 45.0' }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Product[] items = new Product[n];
                    for (int i = 0; i < n; i++) {
                        items[i] = new Product(sc.next(), sc.nextDouble());
                    }
                    Product best = items[0];
                    for (int i = 1; i < n; i++) {
                        if (items[i].getPrice() > best.getPrice()) {
                            best = items[i];
                        }
                    }
                    System.out.println(best.getName() + " " + best.getPrice());
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
          hint: "Fill the array with <code>items[i] = new Product(...)</code>, then keep an arrow <code>best</code> and use <code>&gt;</code> (not <code>&gt;=</code>) so the first one wins a tie.",
          explain: "Each slot gets its own Product. The search keeps an arrow to the best product; the strict <code>&gt;</code> keeps the first of two equal prices." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 5
    {
      title: 'A class that manages many objects',
      titleAr: 'صنف يدير كائنات كثيرة',
      minutes: 30,
      body: [
        { type: 'h', en: 'The problem: arrays in main get messy' },
        { type: 'p', en: "In Lesson 4 the array lived in main. Main had to remember the array, how many slots were used, and every loop. With two or three lists, main becomes a mess. A cleaner way: make a class whose job is to keep the list. For example, a <code>Course</code> keeps its students. Main only says &quot;add this student&quot; or &quot;find ID 1003&quot;, and the course does the work." },
        { type: 'p', en: "In this lesson a student has an ID, a name and a mark out of 100:" },
        { type: 'code', code: J`
          class Student {
              private int id;
              private String name;
              private int mark;

              public Student(int id, String name, int mark) {
                  this.id = id;
                  this.name = name;
                  this.mark = mark;
              }

              public int getId() { return id; }
              public String getName() { return name; }
              public int getMark() { return mark; }

              @Override
              public String toString() { return id + " " + name + " " + mark; }
          }
        ` },

        { type: 'h', en: 'An array plus a counter, inside a class' },
        { type: 'analogy', title: 'The school bus', en: "A school bus has 40 seats. Students sit from the front, one after another. The driver keeps a counter: &quot;now 12 students are on the bus&quot;. That one number tells two things: how many students are sitting, and the number of the next free seat (seats 0 to 11 are taken, so seat 12 is next). When the counter reaches 40, the bus is full.",
          ar: "الحافلة فيها 40 مقعدًا، والعدّاد يخبرنا بعدد الركاب ورقم المقعد الفارغ التالي." },
        { type: 'code', code: J`
          class Course {
              private String code;
              private Student[] students;
              private int count;

              public Course(String code, int capacity) {
                  this.code = code;
                  this.students = new Student[capacity];
                  this.count = 0;
              }
          }
        ` },
        { type: 'lines', rows: [
          ['private Student[] students;', 'The seats: an array of Student references, hidden inside the course.'],
          ['private int count;', 'How many seats are used. It is also the index of the next free seat.'],
          ['new Student[capacity]', 'The course decides its size when it is built, for example 30 seats.']
        ] },
        { type: 'p', en: "This is called a <b>partially filled array</b>: the array has <code>students.length</code> slots, but only the first <code>count</code> slots are used. The slots from index <code>count</code> to the end are still <code>null</code>.",
          ar: "المصفوفة المملوءة جزئيًا: أول count خانات مستعملة، والباقي null." },
        { type: 'check', q: "A course has capacity 30 and <code>count</code> is 12. Which index will the next student get?",
          options: ["11", "12", "13", "30"], answer: 1,
          explain: "Indexes 0 to 11 are used (12 students), so the next free index is 12, which is exactly <code>count</code>." },

        { type: 'h', en: 'add: put the new object in the next free seat' },
        { type: 'code', code: J`
          public boolean add(Student s) {
              if (count == students.length) {
                  return false;            // full
              }
              students[count] = s;
              count++;
              return true;
          }
        ` },
        { type: 'lines', rows: [
          ['if (count == students.length)', 'Are all seats used? Then refuse.'],
          ['return false;', 'Tell the caller &quot;I could not add it&quot;. No crash.'],
          ['students[count] = s;', 'Put the arrow in the next free seat.'],
          ['count++;', 'One more student. Without this line, the next add would overwrite this student!'],
          ['return true;', 'Tell the caller it worked.']
        ], ar: "add تضع الطالب في الخانة count ثم تزيد العدّاد، وتُرجع false إذا امتلأت المصفوفة." },
        { type: 'memory', title: 'Adding two students to a course',
          frames: [
            { label: 'After <code>Course c = new Course("CS102", 3);</code>',
              vars: [{ name: 'c', type: 'Course', ref: 'K' }],
              objects: [
                { id: 'K', cls: 'Course', fields: [{ name: 'code', value: '"CS102"' }, { name: 'students', ref: 'A' }, { name: 'count', value: '0' }] },
                { id: 'A', cls: 'Student[]', fields: [{ name: '[0]', value: 'null' }, { name: '[1]', value: 'null' }, { name: '[2]', value: 'null' }] }] },
            { label: 'After <code>c.add(new Student(1001, "Sara", 88));</code>',
              vars: [{ name: 'c', type: 'Course', ref: 'K' }],
              objects: [
                { id: 'K', cls: 'Course', fields: [{ name: 'code', value: '"CS102"' }, { name: 'students', ref: 'A' }, { name: 'count', value: '1' }] },
                { id: 'A', cls: 'Student[]', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', value: 'null' }, { name: '[2]', value: 'null' }] },
                { id: 'B', cls: 'Student', fields: [{ name: 'id', value: '1001' }, { name: 'name', value: '"Sara"' }, { name: 'mark', value: '88' }] }] },
            { label: 'After <code>c.add(new Student(1002, "Omar", 75));</code>',
              vars: [{ name: 'c', type: 'Course', ref: 'K' }],
              objects: [
                { id: 'K', cls: 'Course', fields: [{ name: 'code', value: '"CS102"' }, { name: 'students', ref: 'A' }, { name: 'count', value: '2' }] },
                { id: 'A', cls: 'Student[]', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', value: 'null' }] },
                { id: 'B', cls: 'Student', fields: [{ name: 'id', value: '1001' }, { name: 'name', value: '"Sara"' }, { name: 'mark', value: '88' }] },
                { id: 'C', cls: 'Student', fields: [{ name: 'id', value: '1002' }, { name: 'name', value: '"Omar"' }, { name: 'mark', value: '75' }] }] }
          ],
          ar: "كل إضافة تملأ الخانة رقم count ثم يزيد count بواحد." },
        { type: 'check', q: "The course has capacity 3 and already holds 3 students. What does <code>add</code> do?",
          options: ["It crashes", "It returns false and changes nothing", "It replaces the first student", "It makes the array bigger"], answer: 1,
          explain: "<code>count == students.length</code> is true, so the method returns false before touching the array." },

        { type: 'h', en: 'find: return the object, or null' },
        { type: 'p', en: "To find a student by ID, loop over the <b>used</b> seats only (index 0 to count - 1). If you find the student, return the object itself. If not, return <code>null</code>, which means &quot;not found&quot;." },
        { type: 'code', code: J`
          public Student findById(int id) {
              for (int i = 0; i < count; i++) {
                  if (students[i].getId() == id) {
                      return students[i];
                  }
              }
              return null;   // not found
          }
        ` },
        { type: 'lines', rows: [
          ['i < count', 'Only the used seats. The slots after count are null; calling getId() on them would crash.'],
          ['return students[i];', 'Give back the arrow to the student. The caller can then call its methods.'],
          ['return null;', 'After the whole loop, nobody matched.']
        ] },
        { type: 'analogy', title: 'The lost-and-found desk', en: "You ask at the lost-and-found desk for your bag. The officer either hands you the bag itself, or says &quot;nothing here&quot;. Before you open the bag, you must check what you got. In Java, the caller checks for <code>null</code>.",
          ar: "مكتب المفقودات يعطيك الحقيبة نفسها أو يقول: لا شيء (null). تحقق{{g:|ي}} قبل الاستعمال." },
        { type: 'code', code: J`
          Student s = c.findById(1002);
          if (s == null) {
              System.out.println("Not found");
          } else {
              System.out.println(s.getName());
          }
        ` },
        { type: 'check', q: "<code>findById</code> loops with <code>i &lt; students.length</code> instead of <code>i &lt; count</code>, and the course is not full. What can happen when the ID is not there?",
          options: ["Nothing different", "A NullPointerException on the first empty slot", "It returns the last student", "It does not compile"], answer: 1,
          explain: "The loop reaches a <code>null</code> slot and calls <code>getId()</code> on it, so the program crashes." },

        { type: 'h', en: 'remove: shift left to close the gap' },
        { type: 'p', en: "Removing a student from the middle leaves a hole. A hole breaks our rule &quot;the first <code>count</code> seats are used&quot;. So every student after the removed one moves one seat to the left." },
        { type: 'analogy', title: 'The bakery queue', en: "Five people wait in a line at the bakery. The second person leaves. The third person steps into place 2, the fourth into place 3, the fifth into place 4. The last place is now empty, and the order of the others is the same.",
          ar: "في طابور المخبز إذا خرج شخص تقدّم كل من خلفه خطوة واحدة." },
        { type: 'code', code: J`
          public boolean remove(int id) {
              for (int i = 0; i < count; i++) {
                  if (students[i].getId() == id) {
                      for (int j = i; j < count - 1; j++) {
                          students[j] = students[j + 1];
                      }
                      students[count - 1] = null;
                      count--;
                      return true;
                  }
              }
              return false;
          }
        ` },
        { type: 'lines', rows: [
          ['if (students[i].getId() == id)', 'The student to remove sits in seat i.'],
          ['for (int j = i; j < count - 1; j++)', 'From that seat up to the second-last used seat.'],
          ['students[j] = students[j + 1];', 'Copy the arrow from the seat on the right.'],
          ['students[count - 1] = null;', 'The last used seat is now a duplicate; clear it.'],
          ['count--;', 'One student fewer.']
        ], ar: "الحذف: ننقل كل من بعده خانة إلى اليسار، ونجعل آخر خانة null، وننقص العدّاد." },
        { type: 'memory', title: 'remove(1001) step by step',
          en: "The course holds Sara (1001), Omar (1002) and Lina (1003). Sara is in seat 0, so i = 0.",
          frames: [
            { label: 'Before <code>c.remove(1001);</code>',
              vars: [{ name: 'c', type: 'Course', ref: 'K' }],
              objects: [
                { id: 'K', cls: 'Course', fields: [{ name: 'students', ref: 'A' }, { name: 'count', value: '3' }] },
                { id: 'A', cls: 'Student[]', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'D' }] },
                { id: 'B', cls: 'Student', fields: [{ name: 'name', value: '"Sara"' }] },
                { id: 'C', cls: 'Student', fields: [{ name: 'name', value: '"Omar"' }] },
                { id: 'D', cls: 'Student', fields: [{ name: 'name', value: '"Lina"' }] }] },
            { label: 'After <code>students[0] = students[1];</code> (j = 0)',
              vars: [{ name: 'c', type: 'Course', ref: 'K' }],
              objects: [
                { id: 'K', cls: 'Course', fields: [{ name: 'students', ref: 'A' }, { name: 'count', value: '3' }] },
                { id: 'A', cls: 'Student[]', fields: [{ name: '[0]', ref: 'C' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'D' }] },
                { id: 'B', cls: 'Student', fields: [{ name: 'name', value: '"Sara"' }], gone: true },
                { id: 'C', cls: 'Student', fields: [{ name: 'name', value: '"Omar"' }] },
                { id: 'D', cls: 'Student', fields: [{ name: 'name', value: '"Lina"' }] }] },
            { label: 'After <code>students[1] = students[2];</code> (j = 1)',
              vars: [{ name: 'c', type: 'Course', ref: 'K' }],
              objects: [
                { id: 'K', cls: 'Course', fields: [{ name: 'students', ref: 'A' }, { name: 'count', value: '3' }] },
                { id: 'A', cls: 'Student[]', fields: [{ name: '[0]', ref: 'C' }, { name: '[1]', ref: 'D' }, { name: '[2]', ref: 'D' }] },
                { id: 'B', cls: 'Student', fields: [{ name: 'name', value: '"Sara"' }], gone: true },
                { id: 'C', cls: 'Student', fields: [{ name: 'name', value: '"Omar"' }] },
                { id: 'D', cls: 'Student', fields: [{ name: 'name', value: '"Lina"' }] }] },
            { label: 'After <code>students[count - 1] = null;</code>',
              vars: [{ name: 'c', type: 'Course', ref: 'K' }],
              objects: [
                { id: 'K', cls: 'Course', fields: [{ name: 'students', ref: 'A' }, { name: 'count', value: '3' }] },
                { id: 'A', cls: 'Student[]', fields: [{ name: '[0]', ref: 'C' }, { name: '[1]', ref: 'D' }, { name: '[2]', value: 'null' }] },
                { id: 'B', cls: 'Student', fields: [{ name: 'name', value: '"Sara"' }], gone: true },
                { id: 'C', cls: 'Student', fields: [{ name: 'name', value: '"Omar"' }] },
                { id: 'D', cls: 'Student', fields: [{ name: 'name', value: '"Lina"' }] }] },
            { label: 'After <code>count--;</code>',
              vars: [{ name: 'c', type: 'Course', ref: 'K' }],
              objects: [
                { id: 'K', cls: 'Course', fields: [{ name: 'students', ref: 'A' }, { name: 'count', value: '2' }] },
                { id: 'A', cls: 'Student[]', fields: [{ name: '[0]', ref: 'C' }, { name: '[1]', ref: 'D' }, { name: '[2]', value: 'null' }] },
                { id: 'B', cls: 'Student', fields: [{ name: 'name', value: '"Sara"' }], gone: true },
                { id: 'C', cls: 'Student', fields: [{ name: 'name', value: '"Omar"' }] },
                { id: 'D', cls: 'Student', fields: [{ name: 'name', value: '"Lina"' }] }] }
          ],
          ar: "بعد الإزاحة لم يعد أي سهم يشير إلى سارة، فيصبح كائنها مهملًا." },
        { type: 'check', q: "Seats: [Sara, Omar, Lina], count 3. After <code>remove</code> of Omar's ID, who sits in seat 1?",
          options: ["Sara", "Omar", "Lina", "null"], answer: 2,
          explain: "Omar was in seat 1. Lina moves from seat 2 to seat 1, seat 2 becomes null, and count becomes 2." },
        { type: 'note', kind: 'tip', en: "If the order does not matter, there is a shorter way: move the <b>last</b> student into the hole. Shifting is a little slower but keeps the order, so we use it here.",
          ar: "إذا لم يهم الترتيب يمكن نقل آخر عنصر إلى مكان المحذوف." },

        { type: 'h', en: 'average and printAll' },
        { type: 'p', en: "Every method that visits the students uses the same loop: from 0 to <code>count - 1</code>." },
        { type: 'code', code: J`
          public double average() {
              if (count == 0) {
                  return 0;
              }
              int sum = 0;
              for (int i = 0; i < count; i++) {
                  sum += students[i].getMark();
              }
              return (double) sum / count;
          }
        ` },
        { type: 'lines', rows: [
          ['if (count == 0)', 'An empty course: avoid dividing by zero.'],
          ['sum += students[i].getMark();', 'Ask each student for its mark (the student owns its data).'],
          ['(double) sum / count', 'The cast keeps the decimals (CS101).']
        ] },
        { type: 'note', kind: 'tip', en: "In Unit 7 you will meet <code>ArrayList</code>, a list that grows by itself and does add and remove for you. Writing it yourself once, as here, shows you what happens inside.",
          ar: "في الوحدة السابعة ستتعرف على ArrayList التي تكبر وحدها." },

        { type: 'steps', title: 'Worked example: the CS102 course list', problem: "Read the capacity of a course, then <code>n</code> students (ID, name, mark). Add each one; if the course is full, say so. Then read one ID and remove that student. Finally print the list and the average mark.",
          steps: [
            { en: "Step 1: The Student class from the start of the lesson (ID, name, mark, getters, toString)." },
            { en: "Step 2: Course with the array, the counter and <code>add</code>.", code: J`
              public boolean add(Student s) {
                  if (count == students.length) {
                      return false;
                  }
                  students[count] = s;
                  count++;
                  return true;
              }
            ` },
            { en: "Step 3: <code>remove</code> with the shift to the left." },
            { en: "Step 4: <code>average</code> and <code>printAll</code>, both looping from 0 to count - 1.", code: J`
              public void printAll() {
                  for (int i = 0; i < count; i++) {
                      System.out.println(students[i]);
                  }
              }
            ` },
            { en: "Step 5: Main reads the input and only talks to the course. It reacts to the true / false answers.", code: J`
              if (!c.add(s)) {
                  System.out.println("Course full: " + s.getName() + " not added");
              }
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int capacity = sc.nextInt();
                    Course c = new Course("CS102", capacity);

                    int n = sc.nextInt();
                    for (int i = 0; i < n; i++) {
                        Student s = new Student(sc.nextInt(), sc.next(), sc.nextInt());
                        if (!c.add(s)) {
                            System.out.println("Course full: " + s.getName() + " not added");
                        }
                    }

                    int id = sc.nextInt();
                    if (c.remove(id)) {
                        System.out.println("Removed " + id);
                    } else {
                        System.out.println("Not found: " + id);
                    }

                    c.printAll();
                    System.out.println("Average: " + c.average());
                }
            }

            class Student {
                private int id;
                private String name;
                private int mark;

                public Student(int id, String name, int mark) {
                    this.id = id;
                    this.name = name;
                    this.mark = mark;
                }

                public int getId() { return id; }
                public String getName() { return name; }
                public int getMark() { return mark; }

                @Override
                public String toString() { return id + " " + name + " " + mark; }
            }

            class Course {
                private String code;
                private Student[] students;
                private int count;

                public Course(String code, int capacity) {
                    this.code = code;
                    this.students = new Student[capacity];
                    this.count = 0;
                }

                public boolean add(Student s) {
                    if (count == students.length) {
                        return false;
                    }
                    students[count] = s;
                    count++;
                    return true;
                }

                public Student findById(int id) {
                    for (int i = 0; i < count; i++) {
                        if (students[i].getId() == id) {
                            return students[i];
                        }
                    }
                    return null;
                }

                public boolean remove(int id) {
                    for (int i = 0; i < count; i++) {
                        if (students[i].getId() == id) {
                            for (int j = i; j < count - 1; j++) {
                                students[j] = students[j + 1];
                            }
                            students[count - 1] = null;
                            count--;
                            return true;
                        }
                    }
                    return false;
                }

                public double average() {
                    if (count == 0) {
                        return 0;
                    }
                    int sum = 0;
                    for (int i = 0; i < count; i++) {
                        sum += students[i].getMark();
                    }
                    return (double) sum / count;
                }

                public void printAll() {
                    for (int i = 0; i < count; i++) {
                        System.out.println(students[i]);
                    }
                }
            }
          `, stdin: J`
            3
            4
            1001 Sara 88
            1002 Omar 75
            1003 Lina 92
            1004 Ali 60
            1002
          `, out: J`
            Course full: Ali not added
            Removed 1002
            1001 Sara 88
            1003 Lina 92
            Average: 90.0
          `, ar: "الصنف Course يحفظ المصفوفة والعدّاد ويقوم بكل العمل، و main يقرأ المدخلات ويتعامل مع true و false فقط." }
      ],
      mistakes: [
        { title: 'Looping to students.length instead of count', en: "The slots after <code>count</code> are <code>null</code>. A loop to <code>students.length</code> calls a method on <code>null</code> and crashes.", code: J`
          for (int i = 0; i < students.length; i++)   // crash on an empty slot
          for (int i = 0; i < count; i++)             // only the used slots
        `, ar: "الحلقة تمر على الخانات المستعملة فقط: حتى count." },
        { title: 'Forgetting count++ in add', en: "Without <code>count++</code>, every new student is written into the same seat and the list never grows.", code: J`
          students[count] = s;
          count++;          // do not forget this
        ` },
        { title: 'No check for a full array', en: "Adding to a full array writes to <code>students[students.length]</code>, which does not exist: <code>ArrayIndexOutOfBoundsException</code>. Check first and return false.", code: J`
          if (count == students.length) {
              return false;
          }
        ` },
        { title: 'Forgetting count-- in remove', en: "After the shift, if <code>count</code> stays the same, the last student is counted twice (or a <code>null</code> slot is used and the program crashes).", code: J`
          students[count - 1] = null;
          count--;          // one student fewer
        ` }
      ],
      remember: [
        "A <b>partially filled array</b> = an array plus a <code>count</code>: the first <code>count</code> slots are used.",
        "<code>count</code> is both the number of objects and the index of the next free slot.",
        "<code>add</code>: refuse when <code>count == array.length</code> (return false); else store at <code>count</code> and do <code>count++</code>.",
        "<code>find</code> returns the object, or <code>null</code> for &quot;not found&quot;; the caller checks for null.",
        "<code>remove</code>: shift the later objects left, clear the last used slot, <code>count--</code>.",
        "Every loop goes from 0 to <code>count - 1</code>, never to <code>length - 1</code>."
      ],
      rememberAr: "المصفوفة المملوءة جزئيًا مع عدّاد داخل صنف: الإضافة في الخانة count، والبحث يُرجع الكائن أو null، والحذف بالإزاحة إلى اليسار ثم إنقاص العدّاد، وكل الحلقات حتى count.",
      practice: [
        { t: 'mcq', q: "In a partially filled array, what does <code>count</code> tell you?",
          qAr: "ماذا يخبرنا العدّاد count؟",
          options: [
            "Only the size of the array",
            "How many objects are stored, and the index of the next free slot",
            "The index of the last slot of the array",
            "How many times add was called, even when it failed"
          ], answer: 1,
          explain: "With count objects in slots 0 to count - 1, the next free slot is exactly index <code>count</code>.",
          explainAr: "العدّاد هو عدد العناصر ورقم الخانة الفارغة التالية." },
        { t: 'output', q: "A shelf has room for 2 titles. What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Shelf s = new Shelf(2);
                  System.out.println(s.add("Java"));
                  System.out.println(s.add("Math"));
                  System.out.println(s.add("Poems"));
                  System.out.println(s.getCount());
              }
          }

          class Shelf {
              private String[] titles;
              private int count;

              public Shelf(int capacity) {
                  titles = new String[capacity];
              }

              public boolean add(String t) {
                  if (count == titles.length) {
                      return false;
                  }
                  titles[count] = t;
                  count++;
                  return true;
              }

              public int getCount() { return count; }
          }
        `, answer: J`
          true
          true
          false
          2
        `, explain: "The first two titles fit. For the third, <code>count == titles.length</code> (2 == 2), so add returns false and count stays 2.",
          explainAr: "الرف يتسع لعنوانين فقط، فالثالث مرفوض." },
        { t: 'fill', q: "Complete the <code>add</code> method of a pharmacy shelf that stores <code>Medicine</code> objects in <code>items</code>.", code: J`
          public boolean add(Medicine m) {
              if (count == ___.length) {
                  return false;
              }
              items[___] = m;
              count___;
              return true;
          }
        `, answers: ['items', 'count', '++'],
          explain: "Refuse when the array is full, store at index <code>count</code>, then <code>count++</code>." },
        { t: 'order', q: "Put the lines of <code>findById</code> in order.",
          lines: [
            "public Student findById(int id) {",
            "    for (int i = 0; i < count; i++) {",
            "        if (students[i].getId() == id) {",
            "            return students[i];",
            "        }",
            "    }",
            "    return null;",
            "}"
          ],
          explain: "Loop over the used slots; return the student as soon as the ID matches; only after the whole loop, return null." },
        { t: 'output', q: "Fahad leaves the waiting list of a clinic. What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  WaitingList w = new WaitingList(5);
                  w.add("Noura");
                  w.add("Fahad");
                  w.add("Mona");
                  w.add("Saad");
                  w.remove("Fahad");
                  w.printAll();
                  System.out.println("Waiting: " + w.getCount());
              }
          }

          class WaitingList {
              private String[] names;
              private int count;

              public WaitingList(int capacity) {
                  names = new String[capacity];
              }

              public void add(String name) {
                  if (count < names.length) {
                      names[count] = name;
                      count++;
                  }
              }

              public void remove(String name) {
                  for (int i = 0; i < count; i++) {
                      if (names[i].equals(name)) {
                          for (int j = i; j < count - 1; j++) {
                              names[j] = names[j + 1];
                          }
                          names[count - 1] = null;
                          count--;
                          return;
                      }
                  }
              }

              public void printAll() {
                  for (int i = 0; i < count; i++) {
                      System.out.println((i + 1) + ". " + names[i]);
                  }
              }

              public int getCount() { return count; }
          }
        `, answer: J`
          1. Noura
          2. Mona
          3. Saad
          Waiting: 3
        `, explain: "Fahad was in index 1. Mona and Saad each move one place to the left, so the order of the others is kept, and count becomes 3." },
        { t: 'bug', q: "The course holds 2 students in an array of 30 slots. <code>printAll()</code> prints both names and then crashes with a <code>NullPointerException</code>. Tap the line with the bug.",
          code: J`
            public void printAll() {
                for (int i = 0; i < students.length; i++) {
                    System.out.println(students[i].getName());
                }
            }
          `, bug: 2,
          fix: J`
            public void printAll() {
                for (int i = 0; i < count; i++) {
                    System.out.println(students[i].getName());
                }
            }
          `,
          hint: "How many slots are really used?",
          explain: "Only slots 0 and 1 hold students. The loop goes on to slot 2, which is <code>null</code>, and <code>getName()</code> on null crashes. Loop to <code>count</code>.",
          explainAr: "الحلقة يجب أن تتوقف عند count لا عند طول المصفوفة." },
        { t: 'bug', q: "When the course is already full, <code>add</code> crashes with an <code>ArrayIndexOutOfBoundsException</code> instead of returning false. Tap the line with the bug.",
          code: J`
            public boolean add(Student s) {
                if (count > students.length) {
                    return false;
                }
                students[count] = s;
                count++;
                return true;
            }
          `, bug: 2,
          fix: J`
            public boolean add(Student s) {
                if (count == students.length) {
                    return false;
                }
                students[count] = s;
                count++;
                return true;
            }
          `,
          hint: "What is count when every slot is used?",
          explain: "When the array is full, <code>count</code> equals <code>students.length</code>, never more. So <code>count &gt; students.length</code> is false, and the method writes to <code>students[count]</code>, one slot past the end. Use <code>==</code> (or <code>&gt;=</code>)." },
        { t: 'code', q: "Class <code>Medicine</code> is given. Write class <code>Shelf</code> with a private <code>Medicine[] items</code> and <code>int count</code>, a constructor <code>Shelf(int capacity)</code>, <code>boolean add(Medicine m)</code> (false when full) and <code>double totalValue()</code> (the sum of price × boxes of the stored medicines). In main read the capacity, then <code>n</code>, then <code>n</code> medicines (name price boxes), no prompts. For each medicine that does not fit print <code>FULL: NAME</code>. At the end print <code>Total value: X</code> with 2 decimals, using <code>System.out.printf(\"Total value: %.2f%n\", ...)</code>.",
          qAr: "اكتب{{g:|ي}} صنف الرف بمصفوفة وعدّاد، مع add و totalValue.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    // read capacity and n, add the medicines, print the total value
                }
            }

            class Medicine {
                private String name;
                private double price;
                private int boxes;

                public Medicine(String name, double price, int boxes) {
                    this.name = name;
                    this.price = price;
                    this.boxes = boxes;
                }

                public String getName() { return name; }
                public double getPrice() { return price; }
                public int getBoxes() { return boxes; }
            }

            class Shelf {
                // array, count, constructor, add, totalValue
            }
          `,
          tests: [
            { stdin: J`
              2
              3
              Paracetamol 12.5 2
              Vitamin 25.0 1
              Syrup 18.75 4
            `, expected: J`
              FULL: Syrup
              Total value: 50.00
            ` },
            { stdin: J`
              5
              2
              Bandage 3.5 10
              Cream 22.25 3
            `, expected: 'Total value: 101.75' },
            { stdin: J`
              1
              2
              Mask 1.25 8
              Gloves 9.5 2
            `, expected: J`
              FULL: Gloves
              Total value: 10.00
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int capacity = sc.nextInt();
                    Shelf shelf = new Shelf(capacity);
                    int n = sc.nextInt();
                    for (int i = 0; i < n; i++) {
                        Medicine m = new Medicine(sc.next(), sc.nextDouble(), sc.nextInt());
                        if (!shelf.add(m)) {
                            System.out.println("FULL: " + m.getName());
                        }
                    }
                    System.out.printf("Total value: %.2f%n", shelf.totalValue());
                }
            }

            class Medicine {
                private String name;
                private double price;
                private int boxes;

                public Medicine(String name, double price, int boxes) {
                    this.name = name;
                    this.price = price;
                    this.boxes = boxes;
                }

                public String getName() { return name; }
                public double getPrice() { return price; }
                public int getBoxes() { return boxes; }
            }

            class Shelf {
                private Medicine[] items;
                private int count;

                public Shelf(int capacity) {
                    items = new Medicine[capacity];
                }

                public boolean add(Medicine m) {
                    if (count == items.length) {
                        return false;
                    }
                    items[count] = m;
                    count++;
                    return true;
                }

                public double totalValue() {
                    double total = 0;
                    for (int i = 0; i < count; i++) {
                        total += items[i].getPrice() * items[i].getBoxes();
                    }
                    return total;
                }
            }
          `,
          hint: "In <code>totalValue</code> loop from 0 to <code>count - 1</code> and add <code>items[i].getPrice() * items[i].getBoxes()</code>.",
          explain: "The shelf keeps the array and the counter, refuses new medicines when full, and computes the value from the medicines it stores." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 6
    {
      title: 'Objects that talk to each other',
      titleAr: 'كائنات تتواصل فيما بينها',
      minutes: 30,
      body: [
        { type: 'h', en: 'The problem: one action touches two objects' },
        { type: 'p', en: "When Reem borrows a book from the university library, two records change: the book is now &quot;out&quot;, and Reem now has one more book. If the program changes only one record, the library is confused: the shelf says the book is out, but no member has it. In a system made of several classes, one action often needs <b>several objects to work together</b>." },
        { type: 'analogy', title: 'The librarian at the desk', en: "Reem gives her card and the book to the librarian. The librarian (1) finds Reem in the list of members, (2) finds the book, (3) checks the rules: is the book free? does Reem have fewer than 3 books? and (4) writes in <b>both</b> records. In our program, a <code>Library</code> class plays the librarian.",
          ar: "أمين المكتبة يجد العضو والكتاب، ويتحقق من القواعد، ثم يكتب في السجلين معًا." },

        { type: 'h', en: 'The classes: Member and Book' },
        { type: 'p', en: "A member knows how many books he or she has. A book knows <b>who</b> has it: it holds a reference to a Member object. That reference is <code>null</code> when the book is on the shelf." },
        { type: 'code', code: J`
          class Member {
              private int id;
              private String name;
              private int loans;

              public Member(int id, String name) {
                  this.id = id;
                  this.name = name;
              }

              public int getId() { return id; }
              public String getName() { return name; }
              public boolean canBorrow() { return loans < 3; }
              public void addLoan() { loans++; }
          }
        ` },
        { type: 'code', code: J`
          class Book {
              private String isbn;
              private String title;
              private Member borrower;     // null = on the shelf

              public Book(String isbn, String title) {
                  this.isbn = isbn;
                  this.title = title;
              }

              public String getIsbn() { return isbn; }
              public String getTitle() { return title; }
              public Member getBorrower() { return borrower; }
              public boolean isAvailable() { return borrower == null; }
              public void setBorrower(Member m) { borrower = m; }
          }
        ` },
        { type: 'lines', rows: [
          ['private Member borrower;', 'A Book holds a reference to a Member: who has it now. This is a has-a link between two <b>different</b> classes.'],
          ['public boolean isAvailable()', 'The book answers from its own field: no borrower means available.'],
          ['public void setBorrower(Member m)', 'A method that <b>takes an object of another class</b> as its parameter.'],
          ['public boolean canBorrow()', 'The member checks its own rule: at most 3 books.']
        ], ar: "الكتاب يحمل سهمًا إلى العضو الذي استعاره، و null تعني أنه على الرف." },
        { type: 'note', kind: 'tip', en: "Here <code>getBorrower()</code> returns the Member itself, with no copy. That is correct: a member is a real, shared person (aggregation, Lesson 3), not a private part of the book.",
          ar: "العضو كائن مشترك، فلا ننسخه." },
        { type: 'check', q: "In class <code>Book</code>, what does <code>borrower == null</code> mean?",
          options: ["The book is lost", "Nobody has borrowed the book", "The member has no name", "It is a compile error"], answer: 1,
          explain: "The borrower field points to the member who has the book. <code>null</code> means no member: the book is on the shelf." },

        { type: 'h', en: 'Methods that return objects: the find helpers' },
        { type: 'p', en: "The Library keeps two partially filled arrays (Lesson 5): one of books and one of members. It needs two find methods. They <b>return objects of other classes</b>: a Member or a Book, or <code>null</code> when nothing matches." },
        { type: 'code', code: J`
          private Member findMember(int id) {
              for (int i = 0; i < memberCount; i++) {
                  if (members[i].getId() == id) {
                      return members[i];
                  }
              }
              return null;
          }
        ` },
        { type: 'p', en: "<code>findBook</code> is the same, but an ISBN is a String, so it compares with <code>equals</code>, never with <code>==</code> (CS101).",
          ar: "نقارن النصوص بـ equals وليس بـ ==." },
        { type: 'code', code: J`
          if (books[i].getIsbn().equals(isbn)) {
              return books[i];
          }
        ` },
        { type: 'p', en: "The find methods are <code>private</code>: they are <b>helper methods</b> that only the Library itself uses. Main does not need them, so main cannot see them." },

        { type: 'h', en: 'lend: one method, several objects' },
        { type: 'p', en: "Now the librarian's job, as one method. It receives two simple values from main, finds the two objects, checks the rules, and updates both objects." },
        { type: 'code', code: J`
          public boolean lend(int memberId, String isbn) {
              Member m = findMember(memberId);
              Book b = findBook(isbn);
              if (m == null || b == null) {
                  return false;            // not found
              }
              if (!b.isAvailable() || !m.canBorrow()) {
                  return false;            // not allowed
              }
              b.setBorrower(m);
              m.addLoan();
              return true;
          }
        ` },
        { type: 'lines', title: 'Read lend like a programmer', rows: [
          ['Member m = findMember(memberId);', 'Ask the members list for the object with this ID (or null).'],
          ['Book b = findBook(isbn);', 'Ask the books list for the book (or null).'],
          ['if (m == null || b == null)', 'Check for null <b>before</b> calling any method on m or b.'],
          ['if (!b.isAvailable() || !m.canBorrow())', 'Ask each object about its own rule.'],
          ['b.setBorrower(m);', 'Update object 1: the book now points to the member.'],
          ['m.addLoan();', 'Update object 2: the member has one more book.'],
          ['return true;', 'Tell main that it worked.']
        ], ar: "lend تجد الكائنين، تتحقق من null ثم من القواعد، ثم تحدّث الكتاب والعضو معًا." },
        { type: 'memory', title: 'lend updates two objects',
          en: "Inside <code>lend(7, \"111\")</code>, after the two find calls. Watch both objects change.",
          frames: [
            { label: 'After <code>Member m = findMember(7);</code> and <code>Book b = findBook("111");</code>',
              vars: [{ name: 'm', type: 'Member', ref: 'M' }, { name: 'b', type: 'Book', ref: 'B' }],
              objects: [
                { id: 'M', cls: 'Member', fields: [{ name: 'id', value: '7' }, { name: 'name', value: '"Reem"' }, { name: 'loans', value: '0' }] },
                { id: 'B', cls: 'Book', fields: [{ name: 'isbn', value: '"111"' }, { name: 'title', value: '"Java Basics"' }, { name: 'borrower', value: 'null' }] }] },
            { label: 'After <code>b.setBorrower(m);</code>',
              vars: [{ name: 'm', type: 'Member', ref: 'M' }, { name: 'b', type: 'Book', ref: 'B' }],
              objects: [
                { id: 'M', cls: 'Member', fields: [{ name: 'id', value: '7' }, { name: 'name', value: '"Reem"' }, { name: 'loans', value: '0' }] },
                { id: 'B', cls: 'Book', fields: [{ name: 'isbn', value: '"111"' }, { name: 'title', value: '"Java Basics"' }, { name: 'borrower', ref: 'M' }] }] },
            { label: 'After <code>m.addLoan();</code>',
              vars: [{ name: 'm', type: 'Member', ref: 'M' }, { name: 'b', type: 'Book', ref: 'B' }],
              objects: [
                { id: 'M', cls: 'Member', fields: [{ name: 'id', value: '7' }, { name: 'name', value: '"Reem"' }, { name: 'loans', value: '1' }] },
                { id: 'B', cls: 'Book', fields: [{ name: 'isbn', value: '"111"' }, { name: 'title', value: '"Java Basics"' }, { name: 'borrower', ref: 'M' }] }] }
          ],
          ar: "بعد lend يعرف الكتاب من استعاره، وزاد عدد كتب العضو." },
        { type: 'check', q: "A programmer forgets one line, and members can borrow books forever, without limit. Which line is missing?",
          options: ["<code>b.setBorrower(m);</code>", "<code>m.addLoan();</code>", "<code>return true;</code>", "<code>Book b = findBook(isbn);</code>"], answer: 1,
          explain: "Without <code>m.addLoan()</code>, the member's loans stay 0, so <code>canBorrow()</code> is always true." },

        { type: 'h', en: 'Reporting &quot;not found&quot; and &quot;not allowed&quot;' },
        { type: 'p', en: "A method in a system should not crash when a request is wrong. It should <b>answer</b> in a way the caller understands. <code>lend</code> returns true or false, and the find methods return <code>null</code> for &quot;not found&quot;. Main reads the answer and prints a clear message." },
        { type: 'analogy', title: 'The metro gate', en: "At the metro you tap your card on the gate. If the card has no money, the gate does not explode: it shows a red light and stays closed. With money, it shows a green light and opens. <code>false</code> is the red light, <code>true</code> is the green light.",
          ar: "بوابة المترو تُظهر ضوءًا أحمر أو أخضر ولا تتعطل؛ كذلك الدالة تُرجع false أو true." },
        { type: 'table', head: ['The method answers…', 'Return type', 'The &quot;bad&quot; answer'], rows: [
          ['Did it work?', '<code>boolean</code>', '<code>false</code>'],
          ['Which object?', 'a class, e.g. <code>Book</code>', '<code>null</code>'],
          ['How many?', '<code>int</code>', '<code>0</code>'],
          ['What happened?', '<code>String</code>', 'a message such as <code>"Book is out"</code>']
        ] },
        { type: 'note', kind: 'tip', en: "In Unit 6 you will learn <b>exceptions</b>, another way to report problems. For now, boolean, null and messages are enough.",
          ar: "في الوحدة السادسة ستتعلم{{g:|ين}} الاستثناءات، وهي طريقة أخرى للإبلاغ عن المشكلات." },
        { type: 'check', q: "<code>findMember(99)</code> finds nobody. What should it return?",
          options: ["0", "null", "an empty Member", "It should crash the program"], answer: 1,
          explain: "A method that returns an object answers &quot;not found&quot; with <code>null</code>, and the caller checks for it." },

        { type: 'steps', title: 'Worked example: a day at the library desk', problem: "The library has two members (7 Reem, 8 Khalid) and three books (111 Java Basics, 222 Data Structures, 333 Networks). Read <code>n</code> requests, each a member ID and an ISBN. Print OK or refused for each request, then the state of every book.",
          steps: [
            { en: "Step 1: Member and Book, exactly as shown above." },
            { en: "Step 2: Library with two partially filled arrays and the add methods.", code: J`
              public void addBook(Book b) {
                  if (bookCount < books.length) {
                      books[bookCount] = b;
                      bookCount++;
                  }
              }
            ` },
            { en: "Step 3: The two private find helpers and <code>lend</code>." },
            { en: "Step 4: <code>printBooks</code>: for a book that is out, follow the arrow to its member to get the name.", code: J`
              if (b.isAvailable()) {
                  System.out.println(b.getTitle() + ": on shelf");
              } else {
                  System.out.println(b.getTitle() + ": out (" + b.getBorrower().getName() + ")");
              }
            ` },
            { en: "Step 5: Main fills the library, reads the requests and prints the answers.", code: J`
              if (lib.lend(id, isbn)) {
                  System.out.println("Request " + i + ": OK");
              } else {
                  System.out.println("Request " + i + ": refused");
              }
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Library lib = new Library(10, 10);
                    lib.addMember(new Member(7, "Reem"));
                    lib.addMember(new Member(8, "Khalid"));
                    lib.addBook(new Book("111", "Java Basics"));
                    lib.addBook(new Book("222", "Data Structures"));
                    lib.addBook(new Book("333", "Networks"));

                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    for (int i = 1; i <= n; i++) {
                        int id = sc.nextInt();
                        String isbn = sc.next();
                        if (lib.lend(id, isbn)) {
                            System.out.println("Request " + i + ": OK");
                        } else {
                            System.out.println("Request " + i + ": refused");
                        }
                    }
                    lib.printBooks();
                }
            }

            class Member {
                private int id;
                private String name;
                private int loans;

                public Member(int id, String name) {
                    this.id = id;
                    this.name = name;
                }

                public int getId() { return id; }
                public String getName() { return name; }
                public boolean canBorrow() { return loans < 3; }
                public void addLoan() { loans++; }
            }

            class Book {
                private String isbn;
                private String title;
                private Member borrower;

                public Book(String isbn, String title) {
                    this.isbn = isbn;
                    this.title = title;
                }

                public String getIsbn() { return isbn; }
                public String getTitle() { return title; }
                public Member getBorrower() { return borrower; }
                public boolean isAvailable() { return borrower == null; }
                public void setBorrower(Member m) { borrower = m; }
            }

            class Library {
                private Book[] books;
                private int bookCount;
                private Member[] members;
                private int memberCount;

                public Library(int maxBooks, int maxMembers) {
                    books = new Book[maxBooks];
                    members = new Member[maxMembers];
                }

                public void addBook(Book b) {
                    if (bookCount < books.length) {
                        books[bookCount] = b;
                        bookCount++;
                    }
                }

                public void addMember(Member m) {
                    if (memberCount < members.length) {
                        members[memberCount] = m;
                        memberCount++;
                    }
                }

                private Member findMember(int id) {
                    for (int i = 0; i < memberCount; i++) {
                        if (members[i].getId() == id) {
                            return members[i];
                        }
                    }
                    return null;
                }

                private Book findBook(String isbn) {
                    for (int i = 0; i < bookCount; i++) {
                        if (books[i].getIsbn().equals(isbn)) {
                            return books[i];
                        }
                    }
                    return null;
                }

                public boolean lend(int memberId, String isbn) {
                    Member m = findMember(memberId);
                    Book b = findBook(isbn);
                    if (m == null || b == null) {
                        return false;
                    }
                    if (!b.isAvailable() || !m.canBorrow()) {
                        return false;
                    }
                    b.setBorrower(m);
                    m.addLoan();
                    return true;
                }

                public void printBooks() {
                    for (int i = 0; i < bookCount; i++) {
                        Book b = books[i];
                        if (b.isAvailable()) {
                            System.out.println(b.getTitle() + ": on shelf");
                        } else {
                            System.out.println(b.getTitle() + ": out (" + b.getBorrower().getName() + ")");
                        }
                    }
                }
            }
          `, stdin: J`
            4
            7 111
            8 111
            8 222
            9 333
          `, out: J`
            Request 1: OK
            Request 2: refused
            Request 3: OK
            Request 4: refused
            Java Basics: out (Reem)
            Data Structures: out (Khalid)
            Networks: on shelf
          `, ar: "الطلب الثاني رُفض لأن الكتاب خارج، والرابع لأن العضو 9 غير موجود. main يقرأ الطلبات فقط والمكتبة تطبق القواعد." }
      ],
      mistakes: [
        { title: 'Updating only one side', en: "If <code>lend</code> sets the borrower but forgets <code>m.addLoan()</code>, the two records disagree. Every action that links two objects must update both.", code: J`
          b.setBorrower(m);
          m.addLoan();     // do not forget the second object
        `, ar: "حدّث{{g:|ي}} الكائنين معًا، لا أحدهما فقط." },
        { title: 'Using a find result without checking null', en: "<code>findMember</code> may return <code>null</code>. Calling <code>m.canBorrow()</code> before the null check crashes the program.", code: J`
          Member m = findMember(id);
          if (m == null) {
              return false;            // check first
          }
          if (!m.canBorrow()) { ... }  // then use
        ` },
        { title: 'Comparing String IDs with ==', en: "<code>==</code> asks &quot;the same object?&quot;, not &quot;the same text?&quot;. An ISBN read with Scanner is a different object from the one stored in the book, so <code>==</code> is false. Use <code>equals</code>.", code: J`
          if (books[i].getIsbn() == isbn)        // wrong
          if (books[i].getIsbn().equals(isbn))   // right
        ` },
        { title: 'Main doing the librarian\'s job', en: "If main finds the objects and changes them itself, the rules are spread everywhere and are easy to forget. Put the rules in one place: a method of <code>Library</code>.", code: J`
          // main: just ask
          if (lib.lend(7, "111")) { ... }
        ` }
      ],
      remember: [
        "One action often changes <b>several objects</b>; a method of the managing class (Library) does all of it.",
        "A field can refer to an object of another class: <code>private Member borrower;</code> (<code>null</code> = none).",
        "Methods can <b>take</b> objects (<code>setBorrower(Member m)</code>) and <b>return</b> objects (<code>findBook</code> returns a Book or null).",
        "Check <code>null</code> before you call a method on a find result.",
        "Report problems with return values: <code>false</code>, <code>null</code> or a message (exceptions come in Unit 6)."
      ],
      rememberAr: "الفعل الواحد قد يغيّر عدة كائنات، فنجمع العمل في دالة واحدة داخل الصنف المدير. الدوال تستقبل كائنات وتُرجع كائنات أو null. تحقق{{g:|ي}} من null أولًا، وأبلغ{{g:|ي}} عن المشكلات بـ false أو null أو رسالة.",
      practice: [
        { t: 'mcq', q: "Reem borrows a book. Which objects must <code>lend</code> update?",
          qAr: "أي الكائنات يجب أن تحدّثها lend؟",
          options: ["Only the Book", "Only the Member", "Both the Book and the Member", "Neither: main prints a message"], answer: 2,
          explain: "The book must know who has it, and the member must count one more book. Updating only one leaves the records in disagreement.",
          explainAr: "الكتاب والعضو كلاهما يتغير." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Member m = new Member("Reem");
                  Book b = new Book("Java Basics");
                  System.out.println(b.isAvailable());
                  b.setBorrower(m);
                  System.out.println(b.isAvailable());
                  System.out.println(b.getBorrower().getName());
              }
          }

          class Member {
              private String name;

              public Member(String name) { this.name = name; }

              public String getName() { return name; }
          }

          class Book {
              private String title;
              private Member borrower;

              public Book(String title) { this.title = title; }

              public boolean isAvailable() { return borrower == null; }
              public void setBorrower(Member m) { borrower = m; }
              public Member getBorrower() { return borrower; }
          }
        `, answer: J`
          true
          false
          Reem
        `, explain: "At first the borrower is <code>null</code>, so the book is available. After <code>setBorrower(m)</code> the book points to Reem, so it is not available, and the chained call gets her name.",
          explainAr: "بعد setBorrower صار الكتاب يشير إلى ريم." },
        { t: 'fill', q: "Complete the body of <code>lend</code>.", code: J`
          Member m = findMember(memberId);
          Book b = findBook(isbn);
          if (m == ___ || b == null) {
              return false;
          }
          b.setBorrower(___);
          m.addLoan();
          return ___;
        `, answers: ['null', 'm', 'true'],
          explain: "First check that both objects were found, then link the book to the member, count the loan, and report success." },
        { t: 'order', q: "Put the body of <code>giveBack(isbn)</code> in order. Update the <b>member first</b>, then the book.",
          lines: [
            "Book b = findBook(isbn);",
            "if (b == null || b.isAvailable()) {",
            "    return false;",
            "}",
            "Member m = b.getBorrower();",
            "m.removeLoan();",
            "b.setBorrower(null);",
            "return true;"
          ],
          explain: "Find the book and refuse if it is unknown or not lent. Read the borrower <b>before</b> clearing it, update the member, then put the book back on the shelf (borrower = null)." },
        { t: 'output', q: "A doctor has 2 free slots. What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Doctor d = new Doctor("Dr. Amal", 2);
                  Patient p1 = new Patient("Fahad");
                  Patient p2 = new Patient("Mona");
                  Patient p3 = new Patient("Saad");
                  System.out.println(d.book(p1));
                  System.out.println(d.book(p2));
                  System.out.println(d.book(p3));
                  System.out.println(p2.getDoctorName());
                  System.out.println(p3.getDoctorName());
              }
          }

          class Patient {
              private String name;
              private Doctor doctor;

              public Patient(String name) { this.name = name; }

              public void setDoctor(Doctor d) { doctor = d; }

              public String getDoctorName() {
                  if (doctor == null) {
                      return "no doctor";
                  }
                  return doctor.getName();
              }
          }

          class Doctor {
              private String name;
              private int freeSlots;

              public Doctor(String name, int freeSlots) {
                  this.name = name;
                  this.freeSlots = freeSlots;
              }

              public String getName() { return name; }

              public boolean book(Patient p) {
                  if (freeSlots == 0) {
                      return false;
                  }
                  freeSlots--;
                  p.setDoctor(this);
                  return true;
              }
          }
        `, answer: J`
          true
          true
          false
          Dr. Amal
          no doctor
        `, explain: "The first two bookings use the 2 slots, and <code>p.setDoctor(this)</code> links each patient to the doctor (<code>this</code> is the doctor running the method). The third booking is refused, so Saad's doctor stays <code>null</code>." },
        { t: 'bug', q: "<code>lend(99, \"111\")</code> should return false (there is no member 99), but it crashes with a <code>NullPointerException</code>. Tap the line with the bug.",
          code: J`
            public boolean lend(int memberId, String isbn) {
                Member m = findMember(memberId);
                Book b = findBook(isbn);
                if (!m.canBorrow() || m == null || b == null) {
                    return false;
                }
                if (!b.isAvailable()) {
                    return false;
                }
                b.setBorrower(m);
                m.addLoan();
                return true;
            }
          `, bug: 4,
          fix: J`
            public boolean lend(int memberId, String isbn) {
                Member m = findMember(memberId);
                Book b = findBook(isbn);
                if (m == null || b == null || !m.canBorrow()) {
                    return false;
                }
                if (!b.isAvailable()) {
                    return false;
                }
                b.setBorrower(m);
                m.addLoan();
                return true;
            }
          `,
          hint: "<code>||</code> checks its parts from left to right. What is checked first?",
          explain: "<code>||</code> works from left to right and stops at the first true part. Here <code>m.canBorrow()</code> runs first, while <code>m</code> is still <code>null</code>, so it crashes. Put the null checks first: <code>m == null || b == null || !m.canBorrow()</code>.",
          explainAr: "يجب التحقق من null قبل استدعاء أي دالة على m." },
        { t: 'bug', q: "The library has the book <code>\"111\"</code>, but <code>findBook(sc.next())</code> with the input 111 always returns null. Tap the line with the bug.",
          code: J`
            private Book findBook(String isbn) {
                for (int i = 0; i < bookCount; i++) {
                    if (books[i].getIsbn() == isbn) {
                        return books[i];
                    }
                }
                return null;
            }
          `, bug: 3,
          fix: J`
            private Book findBook(String isbn) {
                for (int i = 0; i < bookCount; i++) {
                    if (books[i].getIsbn().equals(isbn)) {
                        return books[i];
                    }
                }
                return null;
            }
          `,
          hint: "How do you compare two Strings in Java?",
          explain: "<code>==</code> compares references: the text read by Scanner is a different String object from the one in the book, even with the same letters. <code>equals</code> compares the letters.",
          explainAr: "النصوص تُقارن بـ equals." },
        { t: 'code', q: "Class <code>Account</code> is started for you. Add <code>boolean transferTo(Account other, double amount)</code>: if <code>amount &gt; 0</code> and <code>amount &lt;= balance</code>, take the amount from this account, give it to <code>other</code> with <code>other.deposit(amount)</code>, and return true; otherwise change nothing and return false. In main read two owners with their balances and then an amount (no prompts): <code>OWNER1 BALANCE1 OWNER2 BALANCE2 AMOUNT</code>. Transfer from the first account to the second, print <code>OK</code> or <code>REFUSED</code>, then print both accounts (toString).",
          qAr: "اكتب{{g:|ي}} دالة تحويل بين حسابين: كائن يستدعي دالة في كائن آخر.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    // read two accounts and an amount, transfer, print
                }
            }

            class Account {
                private String owner;
                private double balance;

                public Account(String owner, double balance) {
                    this.owner = owner;
                    this.balance = balance;
                }

                public void deposit(double amount) {
                    balance += amount;
                }

                // write transferTo here

                @Override
                public String toString() {
                    return owner + ": " + balance;
                }
            }
          `,
          tests: [
            { stdin: 'Ali 500 Sara 100 200', expected: J`
              OK
              Ali: 300.0
              Sara: 300.0
            ` },
            { stdin: 'Ali 50 Sara 10 80', expected: J`
              REFUSED
              Ali: 50.0
              Sara: 10.0
            ` },
            { stdin: 'Huda 75.5 Noor 0 75.5', expected: J`
              OK
              Huda: 0.0
              Noor: 75.5
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Account a = new Account(sc.next(), sc.nextDouble());
                    Account b = new Account(sc.next(), sc.nextDouble());
                    double amount = sc.nextDouble();
                    if (a.transferTo(b, amount)) {
                        System.out.println("OK");
                    } else {
                        System.out.println("REFUSED");
                    }
                    System.out.println(a);
                    System.out.println(b);
                }
            }

            class Account {
                private String owner;
                private double balance;

                public Account(String owner, double balance) {
                    this.owner = owner;
                    this.balance = balance;
                }

                public void deposit(double amount) {
                    balance += amount;
                }

                public boolean transferTo(Account other, double amount) {
                    if (amount <= 0 || amount > balance) {
                        return false;
                    }
                    balance -= amount;
                    other.deposit(amount);
                    return true;
                }

                @Override
                public String toString() {
                    return owner + ": " + balance;
                }
            }
          `,
          hint: "First refuse with <code>if (amount &lt;= 0 || amount &gt; balance) return false;</code>. Then <code>balance -= amount; other.deposit(amount); return true;</code>",
          explain: "One method updates two objects: this account loses the amount and the other account gains it. The boolean tells main whether it happened." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 7
    {
      title: 'From a story to a design',
      titleAr: 'من القصة إلى التصميم',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why design before you code?' },
        { type: 'p', en: "Until now the classes were given to you. In a real project you get a <b>story</b> from a client: a clinic, a café, a sports club. Before you write any code, you decide which classes you need and what each class does. Ten minutes of design can save hours of changing code later." },
        { type: 'analogy', title: "The architect's plan", en: "Nobody builds a house by putting bricks together and hoping for the best. The architect first draws the rooms and doors on paper. Moving a wall on paper costs nothing; moving a real wall is expensive. A class design is your plan on paper.",
          ar: "المهندس يرسم المخطط قبل البناء؛ تحريك جدار على الورق أسهل بكثير من تحريكه في الواقع." },
        { type: 'p', en: "In this lesson you follow four steps: find the classes, give each job to the right class, draw a UML diagram, and turn the diagram into a code skeleton." },

        { type: 'h', en: 'Step 1: nouns become classes, verbs become methods' },
        { type: 'p', en: "Read the story slowly and mark two kinds of words. <b>Nouns</b> are names of things or people (clinic, doctor, patient). <b>Verbs</b> are actions (book, cancel, print). An important noun with its own data becomes a <b>class</b>. A small noun that is only one value becomes a <b>field</b>. A verb becomes a <b>method</b>." },
        { type: 'analogy', title: 'The detective with two pens', en: "A detective reads a report with two coloured pens: blue for the people and things, red for what they did. At the end, the blue words are the characters of the story, and the red words are their actions. Do the same with a program story.",
          ar: "المحقق يضع خطًا أزرق تحت الأسماء وخطًا أحمر تحت الأفعال." },
        { type: 'p', en: "Here is a story from a small clinic:" },
        { type: 'p', en: "<i>&quot;A small <b>clinic</b> has <b>doctors</b> and <b>patients</b>. Each doctor has a <b>name</b> and a <b>specialty</b>. Each patient has a <b>file number</b> and a <b>name</b>. A patient <u>books</u> an <b>appointment</b> with a doctor on a <b>date</b>. The clinic can <u>cancel</u> an appointment and <u>print</u> the appointments of a doctor.&quot;</i>",
          ar: "الأسماء بالخط العريض، والأفعال تحتها خط." },
        { type: 'table', head: ['Noun', 'Class or field?', 'Why'], rows: [
          ['clinic', 'class <code>Clinic</code>', 'It keeps all doctors, patients and appointments.'],
          ['doctor', 'class <code>Doctor</code>', 'It has its own data: name and specialty.'],
          ['patient', 'class <code>Patient</code>', 'It has its own data: file number and name.'],
          ['appointment', 'class <code>Appointment</code>', 'It joins a patient, a doctor and a date.'],
          ['date', 'class <code>Date</code>', 'Three numbers that belong together (Lesson 1).'],
          ['name, specialty, file number', 'fields', 'Each one is a single value.']
        ] },
        { type: 'table', head: ['Verb', 'Method', 'In which class?'], rows: [
          ['books', '<code>book(fileNo, doctorName, date)</code>', '<code>Clinic</code>: it can find the patient and the doctor'],
          ['cancel', '<code>cancel(fileNo, date)</code>', '<code>Clinic</code>: it keeps the appointments'],
          ['print the appointments of a doctor', '<code>printFor(doctorName)</code>', '<code>Clinic</code>']
        ] },
        { type: 'check', q: "In the story &quot;Each patient has a phone number&quot;, what should <i>phone number</i> become?",
          options: ["A class PhoneNumber", "A field of Patient", "A method", "Nothing"], answer: 1,
          explain: "It is one simple value that belongs to a patient, so it is a field: <code>private String phone;</code>" },

        { type: 'h', en: 'Step 2: who is responsible?' },
        { type: 'p', en: "Every job needs an owner. A good rule: <b>the class that has the data does the work</b>. The course has the marks, so the course computes the average, not main and not the student. The order has the lines, so the order computes the total. This keeps each class small and clear." },
        { type: 'table', head: ['Job', 'Responsible class', 'Why'], rows: [
          ['Is this book available?', '<code>Book</code>', 'It has the borrower field.'],
          ['Average mark of a course', '<code>Course</code>', 'It has the array of students.'],
          ['Total of a café order', '<code>Order</code>', 'It has the order lines.'],
          ['Price of one order line', '<code>OrderLine</code>', 'It has the item and the quantity.'],
          ['Print a date as 15/3/2026', '<code>Date</code>', 'It has the day, month and year.']
        ] },
        { type: 'p', en: "Compare two ways to get the average mark of a course. In the first, main digs into the course and does the course's job. In the second, the course does its own job." },
        { type: 'code', code: J`
          // Not good: main does the job of the course
          int sum = 0;
          for (int i = 0; i < c.getCount(); i++) {
              sum += c.getStudent(i).getMark();
          }
          double avg1 = (double) sum / c.getCount();

          // Good: the course has the data, so it does the work
          double avg2 = c.average();
        ` },
        { type: 'lines', rows: [
          ['c.getStudent(i).getMark()', 'Main must know how the course stores its students. If the course changes, main breaks.'],
          ['c.average()', 'One call. The loop lives inside Course, next to the data it uses (Lesson 5).']
        ] },
        { type: 'p', en: "If you notice that one class does everything while the others only hold data, the design is not balanced. Move each job to the class that has the data.",
          ar: "القاعدة: الصنف الذي يملك البيانات هو الذي يقوم بالعمل عليها." },
        { type: 'check', q: "Who should compute the total price of a café order?",
          options: ["main", "the class Order", "the class MenuItem", "Scanner"], answer: 1,
          explain: "The order has all its lines, so it is the class that can add them up." },

        { type: 'h', en: 'Step 3: draw the UML class diagram' },
        { type: 'p', en: "In Unit 2 you drew one class as a box. Now you draw several boxes and <b>lines</b> between them. A line is an <b>association</b>: a connection that says &quot;objects of these two classes know each other&quot;. The numbers at the ends of a line are <b>multiplicities</b>: how many objects take part." },
        { type: 'code', code: J`
          +-----------+ 1      0..* +-------------+ 0..*      1 +-----------+
          |  Patient  |-------------| Appointment |-------------|  Doctor   |
          +-----------+             +-------------+             +-----------+
        ` },
        { type: 'p', en: "Read each line in <b>both</b> directions. The number next to a class says how many of <i>that</i> class: &quot;one patient has <b>0..*</b> appointments&quot;, and &quot;each appointment belongs to exactly <b>1</b> patient&quot;. On the right: &quot;one doctor has 0..* appointments&quot;, and &quot;each appointment has exactly 1 doctor&quot;.",
          ar: "الرقم بجانب الصنف يخبر كم كائنًا منه يشارك في العلاقة." },
        { type: 'table', head: ['Written', 'Meaning', 'Example'], rows: [
          ['<code>1</code>', 'exactly one', 'An appointment has exactly 1 doctor.'],
          ['<code>0..1</code>', 'zero or one', 'A book has 0..1 borrower (null when on the shelf).'],
          ['<code>0..*</code>', 'zero or more (any number)', 'A doctor has 0..* appointments.'],
          ['<code>1..*</code>', 'one or more', 'An order has 1..* order lines.'],
          ['<code>0..5</code>', 'a range', 'A student takes 0..5 courses.']
        ] },
        { type: 'p', en: "For a has-a link, UML adds a diamond on the side of the <b>whole</b>. A filled diamond ◆ means composition (owned part), an empty diamond ◇ means aggregation (shared or used part), as in Lesson 3." },
        { type: 'code', code: J`
          +-------+                 +--------+
          |  Car  |◆--------------1 | Engine |     Car owns its Engine (composition)
          +-------+                 +--------+

          +-------+                 +--------+
          | Team  |◇-----------0..* | Player |     Team uses its Players (aggregation)
          +-------+                 +--------+
        ` },
        { type: 'note', kind: 'exam', en: "The diamond is always on the side of the whole (the owner): <code>Car ◆—— Engine</code>, never on the part. Filled ◆ = composition, empty ◇ = aggregation.",
          ar: "المعيّن يوضع دائمًا عند الكل: الممتلئ تركيب، والفارغ تجميع." },
        { type: 'check', q: "The diagram shows <code>Doctor 1 ——— 0..* Appointment</code>. How many appointments can one doctor have?",
          options: ["Exactly one", "Zero or one", "Any number, also zero", "At least one"], answer: 2,
          explain: "<code>0..*</code> next to Appointment means zero or more appointments for one doctor." },

        { type: 'h', en: 'Step 4: from the diagram to a code skeleton' },
        { type: 'p', en: "A <b>code skeleton</b> is the classes with their fields and empty methods: the bones of the program, with no meat yet. Every association becomes a field. The multiplicity at the <b>far end</b> tells you which kind of field:" },
        { type: 'table', head: ['Multiplicity at the far end', 'Field in Java'], rows: [
          ['<code>1</code>', 'one reference: <code>private Doctor doctor;</code> (never null)'],
          ['<code>0..1</code>', 'one reference that may be null: <code>private Member borrower;</code>'],
          ['<code>0..*</code> or <code>1..*</code>', 'an array plus a counter: <code>private Appointment[] list;</code> and <code>private int count;</code>']
        ], ar: "إذا كان العدد واحدًا فهو حقل واحد، وإذا كان «صفرًا أو أكثر» فهو مصفوفة مع عدّاد." },
        { type: 'code', code: J`
          class Appointment {
              private Patient patient;    // 1
              private Doctor doctor;      // 1
              private Date date;          // 1 (owned)
          }

          class Clinic {
              private Doctor[] doctors;             // 0..*
              private int doctorCount;
              private Appointment[] appointments;   // 0..*
              private int appointmentCount;

              public boolean book(int fileNo, String doctorName, Date date) {
                  return false;   // to do
              }

              public void printFor(String doctorName) {
                  // to do
              }
          }
        ` },
        { type: 'lines', rows: [
          ['private Doctor doctor;      // 1', 'Exactly one doctor: one reference field.'],
          ['private Appointment[] appointments;', 'Many appointments: a partially filled array (Lesson 5).'],
          ['return false;   // to do', 'An empty method that still compiles. You fill it in later, one method at a time.']
        ] },
        { type: 'p', en: "Multiplicities are about objects in memory. In the picture below, two appointments share one doctor: that is the &quot;one doctor, 0..* appointments&quot; of the diagram." },
        { type: 'memory', title: 'One doctor, many appointments',
          code: J`
            Doctor d = new Doctor("Dr. Amal", "Dental");
            Patient p1 = new Patient(501, "Fahad");
            Appointment a1 = new Appointment(p1, d);
            Appointment a2 = new Appointment(new Patient(502, "Mona"), d);
          `,
          frames: [
            { label: 'After <code>Doctor d = new Doctor("Dr. Amal", "Dental");</code>',
              vars: [{ name: 'd', type: 'Doctor', ref: 'D' }],
              objects: [{ id: 'D', cls: 'Doctor', fields: [{ name: 'name', value: '"Dr. Amal"' }, { name: 'specialty', value: '"Dental"' }] }] },
            { label: 'After <code>Patient p1 = new Patient(501, "Fahad");</code>',
              vars: [{ name: 'd', type: 'Doctor', ref: 'D' }, { name: 'p1', type: 'Patient', ref: 'P' }],
              objects: [
                { id: 'D', cls: 'Doctor', fields: [{ name: 'name', value: '"Dr. Amal"' }, { name: 'specialty', value: '"Dental"' }] },
                { id: 'P', cls: 'Patient', fields: [{ name: 'fileNo', value: '501' }, { name: 'name', value: '"Fahad"' }] }] },
            { label: 'After <code>Appointment a1 = new Appointment(p1, d);</code>',
              vars: [{ name: 'd', type: 'Doctor', ref: 'D' }, { name: 'p1', type: 'Patient', ref: 'P' }, { name: 'a1', type: 'Appointment', ref: 'A' }],
              objects: [
                { id: 'D', cls: 'Doctor', fields: [{ name: 'name', value: '"Dr. Amal"' }, { name: 'specialty', value: '"Dental"' }] },
                { id: 'P', cls: 'Patient', fields: [{ name: 'fileNo', value: '501' }, { name: 'name', value: '"Fahad"' }] },
                { id: 'A', cls: 'Appointment', fields: [{ name: 'patient', ref: 'P' }, { name: 'doctor', ref: 'D' }] }] },
            { label: 'After <code>Appointment a2 = new Appointment(new Patient(502, "Mona"), d);</code>',
              vars: [{ name: 'd', type: 'Doctor', ref: 'D' }, { name: 'p1', type: 'Patient', ref: 'P' }, { name: 'a1', type: 'Appointment', ref: 'A' }, { name: 'a2', type: 'Appointment', ref: 'B' }],
              objects: [
                { id: 'D', cls: 'Doctor', fields: [{ name: 'name', value: '"Dr. Amal"' }, { name: 'specialty', value: '"Dental"' }] },
                { id: 'P', cls: 'Patient', fields: [{ name: 'fileNo', value: '501' }, { name: 'name', value: '"Fahad"' }] },
                { id: 'A', cls: 'Appointment', fields: [{ name: 'patient', ref: 'P' }, { name: 'doctor', ref: 'D' }] },
                { id: 'Q', cls: 'Patient', fields: [{ name: 'fileNo', value: '502' }, { name: 'name', value: '"Mona"' }] },
                { id: 'B', cls: 'Appointment', fields: [{ name: 'patient', ref: 'Q' }, { name: 'doctor', ref: 'D' }] }] }
          ],
          ar: "موعدان يشيران إلى الطبيب نفسه: طبيب واحد له مواعيد كثيرة، ولكل موعد طبيب واحد." },

        { type: 'steps', title: 'Worked example: from a pharmacy story to a program', problem: "Story: &quot;A <b>pharmacy</b> keeps <b>medicines</b>. Each medicine has a <b>name</b>, a <b>price</b> and a number of <b>boxes in stock</b>. A customer asks to <u>buy</u> some boxes of a medicine by its name. If the pharmacy has the medicine and enough boxes, it <u>reduces the stock</u> and prints the cost; otherwise it refuses. At the end of the day the pharmacy <u>prints its stock</u>.&quot; Design it, then build it.",
          steps: [
            { en: "Step 1: Nouns and verbs. <b>Classes:</b> Pharmacy, Medicine. <b>Fields of Medicine:</b> name, price, stock. <b>No class</b> for the customer: we keep no data about customers. <b>Verbs:</b> buy → <code>Pharmacy.sell(name, boxes)</code>; reduce the stock → <code>Medicine.take(boxes)</code> (the medicine has the stock); print stock → <code>Pharmacy.printStock()</code>." },
            { en: "Step 2: The UML diagram. One pharmacy keeps 0..* medicines.", code: J`
              +----------------------------------+
              |             Pharmacy             |
              +----------------------------------+
              | - items: Medicine[]              |
              | - count: int                     |
              +----------------------------------+
              | + add(m: Medicine): boolean      |
              | + sell(name: String,             |
              |        boxes: int): double       |
              | + printStock(): void             |
              +----------------------------------+
                         ◇ 1
                         |
                         | 0..*
              +----------------------------------+
              |             Medicine             |
              +----------------------------------+
              | - name: String                   |
              | - price: double                  |
              | - stock: int                     |
              +----------------------------------+
              | + take(boxes: int): boolean      |
              +----------------------------------+
            ` },
            { en: "Step 3: The skeleton becomes real code. Medicine checks its own stock in <code>take</code>.", code: J`
              public boolean take(int boxes) {
                  if (boxes <= 0 || boxes > stock) {
                      return false;
                  }
                  stock -= boxes;
                  return true;
              }
            ` },
            { en: "Step 4: Pharmacy finds the medicine and lets it do its own part. It returns the cost, or -1 when the sale is refused.", code: J`
              public double sell(String name, int boxes) {
                  Medicine m = find(name);
                  if (m == null) {
                      return -1;
                  }
                  if (!m.take(boxes)) {
                      return -1;
                  }
                  return m.getPrice() * boxes;
              }
            ` },
            { en: "Step 5: Main fills the pharmacy, reads the requests, and prints with printf (2 decimals)." }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Pharmacy ph = new Pharmacy(10);
                    ph.add(new Medicine("Paracetamol", 12.5, 10));
                    ph.add(new Medicine("VitaminC", 25.0, 3));
                    ph.add(new Medicine("CoughSyrup", 18.75, 6));

                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    for (int i = 0; i < n; i++) {
                        String name = sc.next();
                        int boxes = sc.nextInt();
                        double cost = ph.sell(name, boxes);
                        if (cost < 0) {
                            System.out.println("Refused: " + name + " x" + boxes);
                        } else {
                            System.out.printf("%s x%d: %.2f SAR%n", name, boxes, cost);
                        }
                    }
                    ph.printStock();
                }
            }

            class Medicine {
                private String name;
                private double price;
                private int stock;

                public Medicine(String name, double price, int stock) {
                    this.name = name;
                    this.price = price;
                    this.stock = stock;
                }

                public String getName() { return name; }
                public double getPrice() { return price; }
                public int getStock() { return stock; }

                public boolean take(int boxes) {
                    if (boxes <= 0 || boxes > stock) {
                        return false;
                    }
                    stock -= boxes;
                    return true;
                }
            }

            class Pharmacy {
                private Medicine[] items;
                private int count;

                public Pharmacy(int capacity) {
                    items = new Medicine[capacity];
                }

                public boolean add(Medicine m) {
                    if (count == items.length) {
                        return false;
                    }
                    items[count] = m;
                    count++;
                    return true;
                }

                private Medicine find(String name) {
                    for (int i = 0; i < count; i++) {
                        if (items[i].getName().equals(name)) {
                            return items[i];
                        }
                    }
                    return null;
                }

                public double sell(String name, int boxes) {
                    Medicine m = find(name);
                    if (m == null) {
                        return -1;
                    }
                    if (!m.take(boxes)) {
                        return -1;
                    }
                    return m.getPrice() * boxes;
                }

                public void printStock() {
                    for (int i = 0; i < count; i++) {
                        System.out.println(items[i].getName() + ": " + items[i].getStock() + " boxes");
                    }
                }
            }
          `, stdin: J`
            4
            Paracetamol 2
            VitaminC 5
            Insulin 1
            CoughSyrup 2
          `, out: J`
            Paracetamol x2: 25.00 SAR
            Refused: VitaminC x5
            Refused: Insulin x1
            CoughSyrup x2: 37.50 SAR
            Paracetamol: 8 boxes
            VitaminC: 3 boxes
            CoughSyrup: 4 boxes
          `, ar: "من القصة استخرجنا صنفين، ووزعنا المهام: الدواء يتحقق من مخزونه، والصيدلية تبحث وتحسب السعر." }
      ],
      mistakes: [
        { title: 'Making every noun a class', en: "A name or a price is one value, so it is a field. A class needs its own data and jobs. Too many tiny classes make the design hard to read.", code: J`
          class Price { double value; }   // too small to be a class
          private double price;           // a field is enough
        `, ar: "ليس كل اسم صنفًا؛ القيمة المفردة حقل." },
        { title: 'One class that does everything', en: "Putting every rule in main (or in one giant Manager class) while the other classes only hold data makes the program hard to change. Give each job to the class that has the data.", code: J`
          // main computing the average from the course's array: avoid
          double avg = c.average();   // the Course does its own job
        ` },
        { title: 'The wrong field for the multiplicity', en: "<code>0..*</code> means many objects, so one reference field is not enough: use an array and a counter.", code: J`
          private Player player;      // only one player: wrong for 0..*
          private Player[] players;   // many players
          private int count;
        ` },
        { title: 'The diamond on the wrong side', en: "The diamond marks the whole (the owner), not the part. Car has the diamond in <code>Car ◆—— Engine</code>.", code: J`
          Car ◆------ Engine     // correct
          Car ------◆ Engine     // wrong: it says the engine owns the car
        ` }
      ],
      remember: [
        "Read the story: important <b>nouns</b> → classes, single values → fields, <b>verbs</b> → methods.",
        "<b>Responsibility</b>: the class that has the data does the work.",
        "A UML <b>association</b> is a line between classes; <b>multiplicities</b> (1, 0..1, 0..*, 1..*) say how many objects take part.",
        "Diamonds sit on the side of the whole: ◆ composition, ◇ aggregation.",
        "Skeleton: multiplicity 1 or 0..1 → one reference field; 0..* → array plus counter."
      ],
      rememberAr: "الأسماء المهمة تصبح أصنافًا والقيم المفردة حقولًا والأفعال دوالًا. الصنف الذي يملك البيانات يقوم بالعمل. الخط في UML ارتباط، والتعددية تحدد عدد الكائنات، وتتحول إلى حقل واحد أو مصفوفة مع عدّاد.",
      practice: [
        { t: 'mcq', q: "Story: &quot;A student borrows a book from the library. Each book has a title and an ISBN.&quot; Which words are most likely <b>classes</b>?",
          qAr: "أي الكلمات أصناف على الأرجح؟",
          options: ["Student, Book, Library", "title, ISBN", "borrows, has", "Library only"], answer: 0,
          explain: "Student, Book and Library are important nouns with their own data. Title and ISBN are single values (fields), and borrows is a verb (a method).",
          explainAr: "الأسماء المهمة أصناف، والقيم المفردة حقول، والفعل دالة." },
        { t: 'mcq', q: "The diagram shows <code>Order 1 ——— 1..* OrderLine</code>. What does it mean?",
          options: [
            "An order has exactly one order line",
            "An order has at least one order line, and each line belongs to exactly one order",
            "An order may have no lines",
            "An order line has many orders"
          ], answer: 1,
          explain: "<code>1..*</code> next to OrderLine means one or more lines per order; <code>1</code> next to Order means each line belongs to one order." },
        { t: 'fill', q: "Turn the diagram into fields. UML: <code>Team ◇——— 0..* Player</code> and <code>Appointment ——— 1 Doctor</code>.", code: J`
          class Team {
              private String name;
              private ___[] players;
              private int ___;
          }

          class Appointment {
              private ___ doctor;
          }
        `, answers: ['Player', 'count', 'Doctor'],
          explain: "<code>0..*</code> becomes an array of Player plus a counter. <code>1</code> becomes one reference field of type Doctor." },
        { t: 'order', q: "Put the steps of designing a small system in the right order.",
          lines: [
            "Read the story and mark the nouns and the verbs",
            "Decide which nouns are classes and which are fields",
            "Give each verb (job) to the class that has the data",
            "Draw the UML diagram with associations and multiplicities",
            "Write the code skeleton: fields and empty methods",
            "Fill in the methods one by one and test them"
          ],
          explain: "First understand the story, then choose classes and jobs, draw the plan, and only then write code: skeleton first, details later." },
        { t: 'output', q: "UML: <code>Car ——— 0..1 Driver</code>. A car may have no driver. What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Car c1 = new Car("ABC 123");
                  Car c2 = new Car("XYZ 789");
                  Driver d = new Driver("Salem");
                  c1.setDriver(d);
                  System.out.println(c1.describe());
                  System.out.println(c2.describe());
              }
          }

          class Driver {
              private String name;

              public Driver(String name) { this.name = name; }

              public String getName() { return name; }
          }

          class Car {
              private String plate;
              private Driver driver;   // 0..1

              public Car(String plate) { this.plate = plate; }

              public void setDriver(Driver d) { driver = d; }

              public String describe() {
                  if (driver == null) {
                      return plate + ": no driver";
                  }
                  return plate + ": driven by " + driver.getName();
              }
          }
        `, answer: J`
          ABC 123: driven by Salem
          XYZ 789: no driver
        `, explain: "Multiplicity <code>0..1</code> becomes one reference field that may stay <code>null</code>. Car c2 never got a driver, so <code>describe()</code> takes the null branch.",
          explainAr: "«صفر أو واحد» يعني حقلًا واحدًا قد يبقى null." },
        { t: 'bug', q: "The diagram says <code>Team ◇——— 0..* Player</code>. One line of the code does not match the diagram. Tap it.",
          code: J`
            // UML:  Team ◇----- 0..* Player
            //       Team has a name; Player has a name
            class Team {
                private String name;
                private Player player;
                private int count;
            }

            class Player {
                private String name;
            }
          `, bug: 5,
          fix: J`
            // UML:  Team ◇----- 0..* Player
            //       Team has a name; Player has a name
            class Team {
                private String name;
                private Player[] players;
                private int count;
            }

            class Player {
                private String name;
            }
          `,
          hint: "How many players can one team have?",
          explain: "<code>0..*</code> means a team can have many players, but one <code>Player</code> field can hold only one. Use an array: <code>private Player[] players;</code> together with the counter.",
          explainAr: "«صفر أو أكثر» يحتاج مصفوفة لا حقلًا واحدًا." },
        { t: 'bug', q: "UML: <code>Appointment ——— 1 Patient</code> and <code>Appointment ——— 1 Doctor</code>. This class does not compile. Tap the line with the bug.",
          code: J`
            class Appointment {
                private Patient patient;
                private Doctor doctor;

                public Appointment(Patient patient, Doctor doctor) {
                    this.patient = patient;
                    this.doctor = patient;
                }
            }
          `, bug: 7,
          fix: J`
            class Appointment {
                private Patient patient;
                private Doctor doctor;

                public Appointment(Patient patient, Doctor doctor) {
                    this.patient = patient;
                    this.doctor = doctor;
                }
            }
          `,
          hint: "Compare the type of the field with the type of the value on the right.",
          explain: "A copy-and-paste slip: the field <code>doctor</code> is of type Doctor, but it receives <code>patient</code>, a Patient. The compiler says <i>incompatible types: Patient cannot be converted to Doctor</i>. Each field gets its own parameter." },
        { t: 'code', q: "Turn this diagram into code. <code>OnlineCourse ◆——— 0..* Video</code>. <b>Video</b>: <code>- title: String</code>, <code>- minutes: int</code>, a constructor and getters. <b>OnlineCourse</b>: <code>- name: String</code>, <code>- videos: Video[]</code>, <code>- count: int</code>; <code>+ OnlineCourse(name: String, capacity: int)</code>, <code>+ add(v: Video): boolean</code> (false when full), <code>+ totalMinutes(): int</code>, <code>+ printAll(): void</code>. In main read the course name, the capacity, <code>n</code>, then <code>n</code> videos (title minutes), no prompts. For each video that does not fit print <code>No room: TITLE</code>. Then call <code>printAll()</code>, which prints <code>Course NAME</code>, then one line per video <code>TITLE (MINUTES min)</code>, then <code>Total: X min</code>.",
          qAr: "حوّل{{g:|ي}} المخطط إلى كود: دورة تملك مقاطع فيديو في مصفوفة مع عدّاد.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    // read name, capacity, n and the videos; then printAll
                }
            }

            class Video {
                // fields, constructor, getters
            }

            class OnlineCourse {
                // fields, constructor, add, totalMinutes, printAll
            }
          `,
          tests: [
            { stdin: J`
              Java 3 2
              Intro 12
              Loops 25
            `, expected: J`
              Course Java
              Intro (12 min)
              Loops (25 min)
              Total: 37 min
            ` },
            { stdin: J`
              SQL 1 2
              Tables 18
              Joins 22
            `, expected: J`
              No room: Joins
              Course SQL
              Tables (18 min)
              Total: 18 min
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String name = sc.next();
                    int capacity = sc.nextInt();
                    OnlineCourse course = new OnlineCourse(name, capacity);
                    int n = sc.nextInt();
                    for (int i = 0; i < n; i++) {
                        Video v = new Video(sc.next(), sc.nextInt());
                        if (!course.add(v)) {
                            System.out.println("No room: " + v.getTitle());
                        }
                    }
                    course.printAll();
                }
            }

            class Video {
                private String title;
                private int minutes;

                public Video(String title, int minutes) {
                    this.title = title;
                    this.minutes = minutes;
                }

                public String getTitle() { return title; }
                public int getMinutes() { return minutes; }
            }

            class OnlineCourse {
                private String name;
                private Video[] videos;
                private int count;

                public OnlineCourse(String name, int capacity) {
                    this.name = name;
                    this.videos = new Video[capacity];
                }

                public boolean add(Video v) {
                    if (count == videos.length) {
                        return false;
                    }
                    videos[count] = v;
                    count++;
                    return true;
                }

                public int totalMinutes() {
                    int total = 0;
                    for (int i = 0; i < count; i++) {
                        total += videos[i].getMinutes();
                    }
                    return total;
                }

                public void printAll() {
                    System.out.println("Course " + name);
                    for (int i = 0; i < count; i++) {
                        System.out.println(videos[i].getTitle() + " (" + videos[i].getMinutes() + " min)");
                    }
                    System.out.println("Total: " + totalMinutes() + " min");
                }
            }
          `,
          hint: "<code>0..*</code> becomes <code>private Video[] videos;</code> plus <code>private int count;</code>. Build the array in the constructor with the capacity.",
          explain: "Each box of the diagram became a class, each attribute a field, and the 0..* association an array with a counter. The course does the jobs on its own data." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 8
    {
      title: 'Case study 1: designing and building a registration system',
      titleAr: 'دراسة حالة ١: تصميم نظام تسجيل وبناؤه',
      minutes: 30,
      body: [
        { type: 'h', en: 'The story' },
        { type: 'p', en: "Now you use everything from this unit in one small system. The registrar's office of the university asks for a program. Here is their story:" },
        { type: 'p', en: "<i>&quot;The <b>registrar</b> keeps <b>students</b> and <b>courses</b>. Each student has an <b>ID number</b> and a <b>name</b>. Each course has a <b>code</b> (such as CS102) and a <b>capacity</b>: the most students it can take. A student can <u>enroll</u> in a course if both exist, the course is not full, the student is not already in it, and the student has fewer than 5 courses. The office wants to <u>list the students of a course</u> and <u>the courses of a student</u>.&quot;</i>",
          ar: "قصة نظام التسجيل: طلاب ومقررات، والتسجيل له شروط، ونريد عرض طلاب المقرر ومقررات الطالب." },
        { type: 'analogy', title: 'The registration counter', en: "At the registration counter, the clerk checks your student card, then the course list. If everything is fine, the clerk writes your name on the course's class list <b>and</b> writes the course on your timetable. Two papers change, and both must agree. Our <code>Registrar</code> class is the clerk.",
          ar: "الموظف يكتب اسمك في قائمة المقرر، ويكتب المقرر في جدولك؛ ورقتان يجب أن تتفقا." },

        { type: 'h', en: 'Design: classes, data and jobs' },
        { type: 'p', en: "Step 1 of Lesson 7: the nouns <i>registrar</i>, <i>student</i> and <i>course</i> have their own data, so they become classes. ID, name, code and capacity are single values: fields. Step 2: give each job to the class that has the data." },
        { type: 'table', head: ['Class', 'Fields (data)', 'Methods (jobs)'], rows: [
          ['<code>Student</code>', 'id, name, courses (array of up to 5), courseCount', '<code>canTakeMore()</code>, <code>addCourse(c)</code>, <code>printCourses()</code>'],
          ['<code>Course</code>', 'code, students (array of size capacity), count', '<code>isFull()</code>, <code>hasStudent(s)</code>, <code>addStudent(s)</code>, <code>printStudents()</code>'],
          ['<code>Registrar</code>', 'students array + count, courses array + count', '<code>addStudent</code>, <code>addCourse</code>, <code>findStudent</code>, <code>findCourse</code>, <code>enroll</code>, <code>printCourse</code>, <code>printStudent</code>']
        ] },
        { type: 'check', q: "Which class should own the method <code>isFull()</code>?",
          options: ["Student", "Course", "Registrar", "Main"], answer: 1,
          explain: "Only the course knows its capacity and its count, so the course answers whether it is full." },
        { type: 'p', en: "Step 3: the UML diagram. The registrar keeps many students and many courses. A student takes 0..5 courses, and a course has 0..* students. Students are shared by several courses, so the diamonds are empty (aggregation)." },
        { type: 'code', code: J`
          +-------------------------------------------+
          |                 Registrar                 |
          +-------------------------------------------+
                ◇ 1                           1 ◇
                |                               |
           0..* |                               | 0..*
          +-----------+                   +-----------+
          |  Student  | 0..*         0..5 |  Course   |
          |           |-------------------|           |
          +-----------+                   +-----------+
        ` },
        { type: 'lines', title: 'Read the diagram', rows: [
          ['Registrar ◇ 1 —— 0..* Student', 'One registrar keeps any number of students: an array plus a counter in Registrar.'],
          ['Student 0..* —— 0..5 Course', 'One student takes 0 to 5 courses (number near Course). One course has any number of students (number near Student).'],
          ['the line has no arrow', 'The link goes both ways: a course knows its students, and a student knows its courses.']
        ], ar: "الطالب يأخذ من 0 إلى 5 مقررات، والمقرر فيه أي عدد من الطلاب، والعلاقة في الاتجاهين." },
        { type: 'analogy', title: "Saving each other's numbers", en: "When you save a friend's phone number and he saves yours, both phones know each other: you can call him and he can call you. If only one of you saves the number, the link works in one direction only. A <b>two-way association</b> is like both of you saving the number: the course stores the student, and the student stores the course.",
          ar: "العلاقة الثنائية مثل أن يحفظ كل منكما رقم الآخر." },

        { type: 'h', en: 'Build: Student and Course' },
        { type: 'p', en: "Step 4: the skeleton becomes code, one class at a time. A student has an array of at most 5 courses. The number 5 is a constant (Unit 2): <code>static final</code>, written in capital letters." },
        { type: 'code', code: J`
          class Student {
              public static final int MAX_COURSES = 5;

              private int id;
              private String name;
              private Course[] courses;
              private int courseCount;

              public Student(int id, String name) {
                  this.id = id;
                  this.name = name;
                  this.courses = new Course[MAX_COURSES];
              }

              public boolean canTakeMore() {
                  return courseCount < MAX_COURSES;
              }
          }
        ` },
        { type: 'lines', rows: [
          ['private Course[] courses;', 'The student side of the two-way link: the courses this student takes.'],
          ['this.courses = new Course[MAX_COURSES];', 'Five empty slots for courses.'],
          ['return courseCount < MAX_COURSES;', 'The student checks its own rule: fewer than 5 courses.']
        ] },
        { type: 'p', en: "A course must answer &quot;is this student already in me?&quot;. Compare the <b>IDs</b>: an ID is what makes a student unique." },
        { type: 'code', code: J`
          public boolean hasStudent(Student s) {
              for (int i = 0; i < count; i++) {
                  if (students[i].getId() == s.getId()) {
                      return true;
                  }
              }
              return false;
          }
        ` },
        { type: 'lines', rows: [
          ['students[i].getId() == s.getId()', 'Two ints, so <code>==</code> is right here. Equal IDs = the same student.'],
          ['return true;', 'Found: stop at once.'],
          ['return false;', 'Only after checking <b>every</b> student can we say no.']
        ], ar: "نقارن بالرقم الجامعي لأنه يميّز الطالب، ولا نقول «غير موجود» إلا بعد فحص الجميع." },

        { type: 'h', en: 'Build: Registrar and enroll' },
        { type: 'p', en: "The registrar has two partially filled arrays and two find methods, exactly like the Library in Lesson 6. The heart of the system is <code>enroll</code>. It checks the rules <b>in a clear order</b> and returns a message for each case. Returning a String lets main print exactly what happened." },
        { type: 'table', head: ['Order', 'Check', 'Message'], rows: [
          ['1', 'the student exists', '<code>No such student</code>'],
          ['2', 'the course exists', '<code>No such course</code>'],
          ['3', 'the student is not already in the course', '<code>Already enrolled</code>'],
          ['4', 'the student has fewer than 5 courses', '<code>Too many courses</code>'],
          ['5', 'the course is not full', '<code>Course full</code>'],
          ['6', 'all fine: update <b>both</b> sides', '<code>OK</code>']
        ] },
        { type: 'p', en: "Why this order? Existence first, because you cannot ask a <code>null</code> object anything. &quot;Already enrolled&quot; before &quot;Course full&quot;, because for a student who is already in a full course, &quot;Already enrolled&quot; is the true and helpful answer.",
          ar: "نتحقق من الوجود أولًا لأن null لا يُسأل، ثم من التكرار قبل الامتلاء لأنه الجواب الأصدق." },
        { type: 'code', code: J`
          if (!c.addStudent(s)) {
              return "Course full";
          }
          s.addCourse(c);
          return "OK";
        ` },
        { type: 'lines', rows: [
          ['if (!c.addStudent(s))', 'Update side 1: the course adds the student. If it refuses (full), stop with a message.'],
          ['s.addCourse(c);', 'Update side 2: the student adds the course. Now both sides agree.'],
          ['return "OK";', 'Report success to main.']
        ] },
        { type: 'memory', title: 'The two-way link after enrolling',
          en: "A student and a course before and after <code>enroll</code>. Each side keeps an array, and the arrays point to each other's objects.",
          frames: [
            { label: 'After <code>Student s = new Student(1001, "Sara");</code>',
              vars: [{ name: 's', type: 'Student', ref: 'S' }],
              objects: [
                { id: 'S', cls: 'Student', fields: [{ name: 'id', value: '1001' }, { name: 'name', value: '"Sara"' }, { name: 'courses', ref: 'SA' }, { name: 'courseCount', value: '0' }] },
                { id: 'SA', cls: 'Course[]', fields: [{ name: '[0]', value: 'null' }, { name: '[1]', value: 'null' }, { name: '[2]', value: 'null' }, { name: '[3]', value: 'null' }, { name: '[4]', value: 'null' }] }] },
            { label: 'After <code>Course c = new Course("CS102", 2);</code>',
              vars: [{ name: 's', type: 'Student', ref: 'S' }, { name: 'c', type: 'Course', ref: 'C' }],
              objects: [
                { id: 'S', cls: 'Student', fields: [{ name: 'id', value: '1001' }, { name: 'name', value: '"Sara"' }, { name: 'courses', ref: 'SA' }, { name: 'courseCount', value: '0' }] },
                { id: 'SA', cls: 'Course[]', fields: [{ name: '[0]', value: 'null' }, { name: '[1]', value: 'null' }, { name: '[2]', value: 'null' }, { name: '[3]', value: 'null' }, { name: '[4]', value: 'null' }] },
                { id: 'C', cls: 'Course', fields: [{ name: 'code', value: '"CS102"' }, { name: 'students', ref: 'CA' }, { name: 'count', value: '0' }] },
                { id: 'CA', cls: 'Student[]', fields: [{ name: '[0]', value: 'null' }, { name: '[1]', value: 'null' }] }] },
            { label: 'After <code>c.addStudent(s);</code> (side 1)',
              vars: [{ name: 's', type: 'Student', ref: 'S' }, { name: 'c', type: 'Course', ref: 'C' }],
              objects: [
                { id: 'S', cls: 'Student', fields: [{ name: 'id', value: '1001' }, { name: 'name', value: '"Sara"' }, { name: 'courses', ref: 'SA' }, { name: 'courseCount', value: '0' }] },
                { id: 'SA', cls: 'Course[]', fields: [{ name: '[0]', value: 'null' }, { name: '[1]', value: 'null' }, { name: '[2]', value: 'null' }, { name: '[3]', value: 'null' }, { name: '[4]', value: 'null' }] },
                { id: 'C', cls: 'Course', fields: [{ name: 'code', value: '"CS102"' }, { name: 'students', ref: 'CA' }, { name: 'count', value: '1' }] },
                { id: 'CA', cls: 'Student[]', fields: [{ name: '[0]', ref: 'S' }, { name: '[1]', value: 'null' }] }] },
            { label: 'After <code>s.addCourse(c);</code> (side 2: now both sides agree)',
              vars: [{ name: 's', type: 'Student', ref: 'S' }, { name: 'c', type: 'Course', ref: 'C' }],
              objects: [
                { id: 'S', cls: 'Student', fields: [{ name: 'id', value: '1001' }, { name: 'name', value: '"Sara"' }, { name: 'courses', ref: 'SA' }, { name: 'courseCount', value: '1' }] },
                { id: 'SA', cls: 'Course[]', fields: [{ name: '[0]', ref: 'C' }, { name: '[1]', value: 'null' }, { name: '[2]', value: 'null' }, { name: '[3]', value: 'null' }, { name: '[4]', value: 'null' }] },
                { id: 'C', cls: 'Course', fields: [{ name: 'code', value: '"CS102"' }, { name: 'students', ref: 'CA' }, { name: 'count', value: '1' }] },
                { id: 'CA', cls: 'Student[]', fields: [{ name: '[0]', ref: 'S' }, { name: '[1]', value: 'null' }] }] }
          ],
          ar: "بعد التسجيل: مصفوفة المقرر تشير إلى الطالب، ومصفوفة الطالب تشير إلى المقرر." },
        { type: 'check', q: "Sara is already in CS102, and CS102 is now full. What does <code>enroll(Sara's ID, \"CS102\")</code> return with our order of checks?",
          options: ["OK", "Course full", "Already enrolled", "Too many courses"], answer: 2,
          explain: "Check 3 (already enrolled) comes before check 5 (course full), so the answer is <code>Already enrolled</code>." },

        { type: 'steps', title: 'Worked example: the whole registration system', problem: "Build Student, Course and Registrar as designed. In main, add two students and two courses (CS102 with capacity 2, MATH101 with capacity 1), try several enrollments, and print one course list and one student timetable.",
          steps: [
            { en: "Step 1: Student: data plus its own small jobs (<code>canTakeMore</code>, <code>addCourse</code>, <code>printCourses</code>)." },
            { en: "Step 2: Course: the student list with <code>isFull</code>, <code>hasStudent</code>, <code>addStudent</code> (false when full) and <code>printStudents</code>.", code: J`
              public boolean addStudent(Student s) {
                  if (isFull()) {
                      return false;
                  }
                  students[count] = s;
                  count++;
                  return true;
              }
            ` },
            { en: "Step 3: Registrar: two partially filled arrays, add methods that build the objects, and two find methods (as in Lesson 6)." },
            { en: "Step 4: <code>enroll</code>: the checks in the agreed order, then both updates.", code: J`
              public String enroll(int id, String code) {
                  Student s = findStudent(id);
                  if (s == null) {
                      return "No such student";
                  }
                  Course c = findCourse(code);
                  if (c == null) {
                      return "No such course";
                  }
                  if (c.hasStudent(s)) {
                      return "Already enrolled";
                  }
                  if (!s.canTakeMore()) {
                      return "Too many courses";
                  }
                  if (!c.addStudent(s)) {
                      return "Course full";
                  }
                  s.addCourse(c);
                  return "OK";
              }
            ` },
            { en: "Step 5: Main builds some data and prints every answer. It never touches the arrays: it only talks to the registrar." }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Registrar r = new Registrar(10, 10);
                    r.addStudent(1001, "Sara");
                    r.addStudent(1002, "Omar");
                    r.addCourse("CS102", 2);
                    r.addCourse("MATH101", 1);

                    System.out.println(r.enroll(1001, "CS102"));
                    System.out.println(r.enroll(1002, "CS102"));
                    System.out.println(r.enroll(1001, "CS102"));
                    System.out.println(r.enroll(1002, "MATH101"));
                    System.out.println(r.enroll(1001, "MATH101"));
                    System.out.println(r.enroll(1003, "CS102"));
                    System.out.println(r.enroll(1001, "PHYS101"));

                    r.printCourse("CS102");
                    r.printStudent(1002);
                }
            }

            class Student {
                public static final int MAX_COURSES = 5;

                private int id;
                private String name;
                private Course[] courses;
                private int courseCount;

                public Student(int id, String name) {
                    this.id = id;
                    this.name = name;
                    this.courses = new Course[MAX_COURSES];
                }

                public int getId() { return id; }
                public String getName() { return name; }

                public boolean canTakeMore() {
                    return courseCount < MAX_COURSES;
                }

                public void addCourse(Course c) {
                    courses[courseCount] = c;
                    courseCount++;
                }

                public void printCourses() {
                    System.out.print(name + ":");
                    for (int i = 0; i < courseCount; i++) {
                        System.out.print(" " + courses[i].getCode());
                    }
                    System.out.println();
                }
            }

            class Course {
                private String code;
                private Student[] students;
                private int count;

                public Course(String code, int capacity) {
                    this.code = code;
                    this.students = new Student[capacity];
                }

                public String getCode() { return code; }
                public int getCount() { return count; }

                public boolean isFull() {
                    return count == students.length;
                }

                public boolean hasStudent(Student s) {
                    for (int i = 0; i < count; i++) {
                        if (students[i].getId() == s.getId()) {
                            return true;
                        }
                    }
                    return false;
                }

                public boolean addStudent(Student s) {
                    if (isFull()) {
                        return false;
                    }
                    students[count] = s;
                    count++;
                    return true;
                }

                public void printStudents() {
                    System.out.print(code + ":");
                    for (int i = 0; i < count; i++) {
                        System.out.print(" " + students[i].getName());
                    }
                    System.out.println();
                }
            }

            class Registrar {
                private Student[] students;
                private int studentCount;
                private Course[] courses;
                private int courseCount;

                public Registrar(int maxStudents, int maxCourses) {
                    students = new Student[maxStudents];
                    courses = new Course[maxCourses];
                }

                public boolean addStudent(int id, String name) {
                    if (studentCount == students.length || findStudent(id) != null) {
                        return false;
                    }
                    students[studentCount] = new Student(id, name);
                    studentCount++;
                    return true;
                }

                public boolean addCourse(String code, int capacity) {
                    if (courseCount == courses.length || findCourse(code) != null) {
                        return false;
                    }
                    courses[courseCount] = new Course(code, capacity);
                    courseCount++;
                    return true;
                }

                public Student findStudent(int id) {
                    for (int i = 0; i < studentCount; i++) {
                        if (students[i].getId() == id) {
                            return students[i];
                        }
                    }
                    return null;
                }

                public Course findCourse(String code) {
                    for (int i = 0; i < courseCount; i++) {
                        if (courses[i].getCode().equals(code)) {
                            return courses[i];
                        }
                    }
                    return null;
                }

                public String enroll(int id, String code) {
                    Student s = findStudent(id);
                    if (s == null) {
                        return "No such student";
                    }
                    Course c = findCourse(code);
                    if (c == null) {
                        return "No such course";
                    }
                    if (c.hasStudent(s)) {
                        return "Already enrolled";
                    }
                    if (!s.canTakeMore()) {
                        return "Too many courses";
                    }
                    if (!c.addStudent(s)) {
                        return "Course full";
                    }
                    s.addCourse(c);
                    return "OK";
                }

                public void printCourse(String code) {
                    Course c = findCourse(code);
                    if (c == null) {
                        System.out.println("No such course");
                    } else {
                        c.printStudents();
                    }
                }

                public void printStudent(int id) {
                    Student s = findStudent(id);
                    if (s == null) {
                        System.out.println("No such student");
                    } else {
                        s.printCourses();
                    }
                }
            }
          `, out: J`
            OK
            OK
            Already enrolled
            OK
            Course full
            No such student
            No such course
            CS102: Sara Omar
            Omar: CS102 MATH101
          `, ar: "النظام يعمل: كل صنف يقوم بعمله، والمسجّل ينسّق بينها، و main يطلب فقط ويطبع الجواب." }
      ],
      mistakes: [
        { title: 'Checking the rules in a careless order', en: "If you ask <code>c.hasStudent(s)</code> before checking that <code>s</code> exists, a missing student crashes the program. And checking &quot;full&quot; before &quot;already enrolled&quot; gives a misleading message.", code: J`
          Student s = findStudent(id);
          if (s == null) {               // existence first
              return "No such student";
          }
        `, ar: "رتّب{{g:|ي}} الشروط: الوجود أولًا ثم بقية القواعد." },
        { title: 'Updating only one side of the link', en: "If enroll calls <code>c.addStudent(s)</code> but forgets <code>s.addCourse(c)</code>, the course list shows the student but the student's timetable is empty.", code: J`
          c.addStudent(s);
          s.addCourse(c);     // both sides
        ` },
        { title: 'Ignoring a returned boolean', en: "<code>addStudent</code> returns false when the course is full. If you ignore it, the program says OK and adds the course to the student anyway.", code: J`
          c.addStudent(s);              // result ignored: wrong
          if (!c.addStudent(s)) {       // result used: right
              return "Course full";
          }
        ` },
        { title: 'Putting the rules in main', en: "If main checks capacity and duplicates itself, the rules are copied wherever enrolling happens. Keep every rule inside the classes; main only calls <code>enroll</code> and prints the answer.", code: J`
          System.out.println(r.enroll(1001, "CS102"));   // main just asks
        ` }
      ],
      remember: [
        "Design first: classes from the nouns, jobs to the class that has the data, a UML diagram, then a skeleton.",
        "A <b>two-way association</b> stores the link on both sides: the course has its students, the student has its courses.",
        "One action that links two objects must update <b>both</b> sides.",
        "Check rules in a clear order: existence first, then duplicates, limits and capacity.",
        "Use returned values (boolean, String messages); never ignore them.",
        "Build and check one class at a time; main only talks to the Registrar."
      ],
      rememberAr: "صمّم{{g:|ي}} أولًا ثم ابن{{g:|ي}} صنفًا صنفًا. العلاقة الثنائية تُحفظ في الطرفين، والتسجيل يحدّث الطرفين معًا. رتّب{{g:|ي}} الشروط: الوجود أولًا، واستعمل{{g:|ي}} القيم المُرجعة ولا تتجاهلها.",
      practice: [
        { t: 'mcq', q: "In the registration system, which class should own the method <code>canTakeMore()</code> (fewer than 5 courses)?",
          qAr: "أي صنف يملك الدالة canTakeMore؟",
          options: ["Course", "Student", "Registrar", "Main"], answer: 1,
          explain: "The student keeps its own course count, so the student checks its own limit.",
          explainAr: "الطالب يعرف عدد مقرراته، فهو المسؤول." },
        { t: 'output', q: "A course with capacity 1. What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Course c = new Course("IS201", 1);
                  Student a = new Student(1001, "Sara");
                  Student b = new Student(1002, "Omar");
                  System.out.println(c.addStudent(a));
                  System.out.println(c.isFull());
                  System.out.println(c.addStudent(b));
                  System.out.println(c.hasStudent(b));
              }
          }

          class Student {
              private int id;
              private String name;

              public Student(int id, String name) {
                  this.id = id;
                  this.name = name;
              }

              public int getId() { return id; }
          }

          class Course {
              private String code;
              private Student[] students;
              private int count;

              public Course(String code, int capacity) {
                  this.code = code;
                  this.students = new Student[capacity];
              }

              public boolean isFull() {
                  return count == students.length;
              }

              public boolean hasStudent(Student s) {
                  for (int i = 0; i < count; i++) {
                      if (students[i].getId() == s.getId()) {
                          return true;
                      }
                  }
                  return false;
              }

              public boolean addStudent(Student s) {
                  if (isFull()) {
                      return false;
                  }
                  students[count] = s;
                  count++;
                  return true;
              }
          }
        `, answer: J`
          true
          true
          false
          false
        `, explain: "Sara fills the only seat, so the course is full. Omar is refused (false), so he is not in the course (false).",
          explainAr: "المقعد الوحيد أخذته سارة، فرُفض عمر." },
        { t: 'fill', q: "Complete the two rule methods: <code>isFull()</code> in Course and <code>canTakeMore()</code> in Student.", code: J`
          public boolean isFull() {
              return count == students.___;
          }

          public boolean canTakeMore() {
              return courseCount ___ MAX_COURSES;
          }
        `, answers: ['length', '<'],
          explain: "The course is full when the counter equals the array length. The student can take more while the count is less than 5." },
        { t: 'order', q: "Put the last part of <code>enroll</code> in order. Update the <b>course side first</b>, then the student side.",
          lines: [
            "Course c = findCourse(code);",
            "if (c == null) {",
            "    return \"No such course\";",
            "}",
            "if (!c.addStudent(s)) {",
            "    return \"Course full\";",
            "}",
            "s.addCourse(c);",
            "return \"OK\";"
          ],
          explain: "Find the course and stop if it is missing. Then try the course side; only if it worked, update the student side and report OK." },
        { t: 'mcq', q: "Omar has 5 courses already, and CS102 is full. He is not in CS102. With the order of checks of this lesson, what does <code>enroll</code> return?",
          options: ["Course full", "Too many courses", "Already enrolled", "OK"], answer: 1,
          explain: "The checks run in order: student exists, course exists, not already enrolled, then <b>fewer than 5 courses</b> fails first, so the answer is <code>Too many courses</code>." },
        { t: 'bug', q: "When CS102 is full, this <code>enroll</code> still returns OK, and CS102 appears in the student's timetable although the student is not in the course list. Tap the line with the bug.",
          code: J`
            public String enroll(int id, String code) {
                Student s = findStudent(id);
                Course c = findCourse(code);
                if (s == null || c == null) {
                    return "Not found";
                }
                if (c.hasStudent(s)) {
                    return "Already enrolled";
                }
                c.addStudent(s);
                s.addCourse(c);
                return "OK";
            }
          `, bug: 10,
          fix: J`
            public String enroll(int id, String code) {
                Student s = findStudent(id);
                Course c = findCourse(code);
                if (s == null || c == null) {
                    return "Not found";
                }
                if (c.hasStudent(s)) {
                    return "Already enrolled";
                }
                if (!c.addStudent(s)) {
                    return "Course full";
                }
                s.addCourse(c);
                return "OK";
            }
          `,
          hint: "<code>addStudent</code> returns a boolean. Who looks at it?",
          explain: "<code>addStudent</code> returns false when the course is full, but this code ignores the answer and goes on to update the student and say OK. Use the result: <code>if (!c.addStudent(s)) return \"Course full\";</code>",
          explainAr: "تجاهل القيمة المُرجعة من addStudent جعل النظام يقول OK رغم الرفض." },
        { t: 'bug', q: "<code>hasStudent</code> finds the first student of the course, but says false for every other student who is really there. Tap the line with the bug.",
          code: J`
            public boolean hasStudent(Student s) {
                for (int i = 0; i < count; i++) {
                    if (students[i].getId() == s.getId()) {
                        return true;
                    } else {
                        return false;
                    }
                }
                return false;
            }
          `, bug: [5, 6],
          fix: J`
            public boolean hasStudent(Student s) {
                for (int i = 0; i < count; i++) {
                    if (students[i].getId() == s.getId()) {
                        return true;
                    }
                }
                return false;
            }
          `,
          hint: "How many students does the loop really check before it returns?",
          explain: "The <code>else return false;</code> ends the method after looking at the first student only. You may say &quot;not found&quot; only <b>after</b> the loop has checked everyone, so remove the else part.",
          explainAr: "لا نُرجع false إلا بعد انتهاء الحلقة وفحص جميع الطلاب." },
        { t: 'code', q: "Class <code>Student</code> is given. Complete class <code>Course</code>: write <code>String addStudent(Student s)</code> that returns <code>\"ALREADY\"</code> if a student with the same ID is in the course, otherwise <code>\"FULL\"</code> if the course is full, otherwise adds the student and returns <code>\"OK\"</code>. In main read the capacity, then <code>n</code>, then <code>n</code> lines <code>ID NAME</code> (no prompts). For each line build a Student, try to add it, and print <code>ID: RESULT</code>. At the end print <code>Count: X</code>.",
          qAr: "أكمل{{g:|ي}} صنف المقرر بدالة إضافة تُرجع رسالة، مع فحص التكرار قبل الامتلاء.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    // read capacity and n; for each line build a Student, add, print
                }
            }

            class Student {
                private int id;
                private String name;

                public Student(int id, String name) {
                    this.id = id;
                    this.name = name;
                }

                public int getId() { return id; }
                public String getName() { return name; }
            }

            class Course {
                private Student[] students;
                private int count;

                public Course(int capacity) {
                    students = new Student[capacity];
                }

                public int getCount() { return count; }

                // write addStudent here (you may add helper methods)
            }
          `,
          tests: [
            { stdin: J`
              2
              4
              1001 Sara
              1002 Omar
              1001 Sara
              1003 Lina
            `, expected: J`
              1001: OK
              1002: OK
              1001: ALREADY
              1003: FULL
              Count: 2
            ` },
            { stdin: J`
              3
              3
              2001 Noura
              2002 Fahad
              2001 Noura
            `, expected: J`
              2001: OK
              2002: OK
              2001: ALREADY
              Count: 2
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Course c = new Course(sc.nextInt());
                    int n = sc.nextInt();
                    for (int i = 0; i < n; i++) {
                        Student s = new Student(sc.nextInt(), sc.next());
                        System.out.println(s.getId() + ": " + c.addStudent(s));
                    }
                    System.out.println("Count: " + c.getCount());
                }
            }

            class Student {
                private int id;
                private String name;

                public Student(int id, String name) {
                    this.id = id;
                    this.name = name;
                }

                public int getId() { return id; }
                public String getName() { return name; }
            }

            class Course {
                private Student[] students;
                private int count;

                public Course(int capacity) {
                    students = new Student[capacity];
                }

                public int getCount() { return count; }

                private boolean hasStudent(Student s) {
                    for (int i = 0; i < count; i++) {
                        if (students[i].getId() == s.getId()) {
                            return true;
                        }
                    }
                    return false;
                }

                public String addStudent(Student s) {
                    if (hasStudent(s)) {
                        return "ALREADY";
                    }
                    if (count == students.length) {
                        return "FULL";
                    }
                    students[count] = s;
                    count++;
                    return "OK";
                }
            }
          `,
          hint: "Write a helper <code>hasStudent</code> that compares IDs. In addStudent check ALREADY first, then FULL.",
          explain: "Each input line builds a <b>new</b> Student object, so <code>==</code> on the objects would never find the duplicate. Comparing IDs does. The order of checks decides the message for a student who is already in a full course." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 9
    {
      title: 'Case study 2: testing the system',
      titleAr: 'دراسة حالة ٢: اختبار النظام',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why test each part alone first?' },
        { type: 'p', en: "Your registration system has three classes. If you run everything at once and one answer is wrong, where is the bug? In Student? In Course? In Registrar? It is hard to say. So programmers test in two stages: first each class <b>alone</b>, then all classes <b>together</b>." },
        { type: 'analogy', title: 'Testing a car', en: "A car factory does not build the whole car and then hope it drives. It tests the engine alone on a test bench, the brakes alone, the lights alone. Only then does it put the car together and drive it on a test track. If the finished car has a problem, they already know that each part works by itself.",
          ar: "المصنع يختبر المحرك وحده والفرامل وحدها، ثم يجمع السيارة ويجربها على الطريق." },
        { type: 'p', en: "Testing one class alone is called <b>unit testing</b> (here &quot;unit&quot; means one small piece of the program). Testing the classes together is called <b>system testing</b>.",
          ar: "اختبار الوحدة يفحص صنفًا واحدًا، واختبار النظام يفحص الأصناف معًا." },

        { type: 'h', en: 'A test driver: a small main that checks one class' },
        { type: 'p', en: "A <b>test driver</b> is a small <code>main</code> that builds objects of one class, calls its methods, and compares what happened with what <b>should</b> happen (the <b>expected</b> result). To make the comparison easy to read, we write a tiny helper method:" },
        { type: 'code', code: J`
          static void check(String what, boolean ok) {
              if (ok) {
                  System.out.println("PASS: " + what);
              } else {
                  System.out.println("FAIL: " + what);
              }
          }
        ` },
        { type: 'lines', rows: [
          ['static void check(String what, boolean ok)', 'A static helper in Main (CS101 methods). <code>what</code> describes the test; <code>ok</code> is the condition that should be true.'],
          ['System.out.println("PASS: " + what);', 'The condition is true: the class behaved as expected.'],
          ['System.out.println("FAIL: " + what);', 'Something is wrong: the name of the test tells you where to look.']
        ], ar: "الدالة check تطبع PASS إذا تحقق الشرط و FAIL إذا لم يتحقق." },
        { type: 'p', en: "Now we test the <code>Course</code> class from Lesson 8 alone. Each line asks one small question with a known answer." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Course c = new Course("CS102", 2);
                  Student a = new Student(1001, "Sara");
                  Student b = new Student(1002, "Omar");
                  Student x = new Student(1003, "Lina");

                  check("new course is empty", c.getCount() == 0);
                  check("add Sara works", c.addStudent(a));
                  check("Sara is in the course", c.hasStudent(a));
                  check("Omar is not in yet", !c.hasStudent(b));
                  check("add Omar works", c.addStudent(b));
                  check("Omar is in the course", c.hasStudent(b));
                  check("course is full now", c.isFull());
                  check("add Lina is refused", !c.addStudent(x));
                  check("count is still 2", c.getCount() == 2);
              }

              static void check(String what, boolean ok) {
                  if (ok) {
                      System.out.println("PASS: " + what);
                  } else {
                      System.out.println("FAIL: " + what);
                  }
              }
          }

          class Student {
              private int id;
              private String name;

              public Student(int id, String name) {
                  this.id = id;
                  this.name = name;
              }

              public int getId() { return id; }
              public String getName() { return name; }
          }

          class Course {
              private String code;
              private Student[] students;
              private int count;

              public Course(String code, int capacity) {
                  this.code = code;
                  this.students = new Student[capacity];
              }

              public int getCount() { return count; }

              public boolean isFull() {
                  return count == students.length;
              }

              public boolean hasStudent(Student s) {
                  for (int i = 0; i < count; i++) {
                      if (students[i].getId() == s.getId()) {
                          return true;
                      }
                  }
                  return false;
              }

              public boolean addStudent(Student s) {
                  if (isFull()) {
                      return false;
                  }
                  students[count] = s;
                  count++;
                  return true;
              }
          }
        `, out: J`
          PASS: new course is empty
          PASS: add Sara works
          PASS: Sara is in the course
          PASS: Omar is not in yet
          PASS: add Omar works
          PASS: Omar is in the course
          PASS: course is full now
          PASS: add Lina is refused
          PASS: count is still 2
        ` },
        { type: 'lines', title: 'Read some tests', rows: [
          ['check("add Sara works", c.addStudent(a));', 'addStudent returns a boolean, so the call itself is the condition. Expected: true.'],
          ['check("Omar is not in yet", !c.hasStudent(b));', 'We expect <b>false</b> from hasStudent, so we test the opposite with <code>!</code>.'],
          ['check("count is still 2", c.getCount() == 2);', 'After a refused add, nothing may change.']
        ] },
        { type: 'p', en: "What does a FAIL look like? Imagine <code>hasStudent</code> still had the bug from Lesson 8 (<code>else return false;</code> inside the loop). The driver would print:" },
        { type: 'code', code: J`
          PASS: Sara is in the course
          PASS: Omar is not in yet
          PASS: add Omar works
          FAIL: Omar is in the course
        ` },
        { type: 'p', en: "The FAIL line points straight at <code>hasStudent</code> with a second student. Finding that bug in the whole system would take much longer.",
          ar: "سطر FAIL يدلك مباشرة على الدالة التي فيها الخطأ." },
        { type: 'check', q: "In a test driver, which line checks that a full course <b>refuses</b> a new student?",
          options: ["<code>check(\"refused\", c.addStudent(x));</code>", "<code>check(\"refused\", !c.addStudent(x));</code>", "<code>check(\"refused\", c.isFull() == false);</code>", "<code>c.addStudent(x);</code>"], answer: 1,
          explain: "A refused add returns false. The test expects false, so it checks <code>!c.addStudent(x)</code>, which is true when the course refuses." },

        { type: 'h', en: 'Choose good test cases' },
        { type: 'p', en: "Do not test only the normal case (the &quot;happy path&quot;). Bugs like to hide at the <b>edges</b>: an empty list, exactly one object, a full list, a value that is not there, the same request twice. A test for such a situation is called an <b>edge case</b>." },
        { type: 'analogy', title: 'A good exam paper', en: "A good exam does not ask only the easy questions. A careful teacher adds one tricky question at each corner of the topic. Your tests should do the same for your classes: one test for every corner where a mistake could hide.",
          ar: "الامتحان الجيد يسأل عن الزوايا الصعبة، وكذلك الاختبار الجيد يفحص الحالات الحدّية." },
        { type: 'table', head: ['Case', 'Example test', 'Expected'], rows: [
          ['Empty', '<code>average()</code> of a course with no students', '0.0, and no crash'],
          ['One', 'add one student, then find him', 'found'],
          ['Full', 'add to a full course', 'refused (false or &quot;Course full&quot;)'],
          ['Not found', '<code>findStudent(9999)</code>', '<code>null</code>'],
          ['Twice', 'enroll the same student twice', '&quot;Already enrolled&quot;'],
          ['Remove', 'remove the first, a middle and the last student', 'order kept, count smaller']
        ] },
        { type: 'p', en: "A good test also checks that a refused action <b>changed nothing</b>. The memory picture shows the full-course test from the driver above.",
          ar: "الاختبار الجيد يتأكد أن العملية المرفوضة لم تغيّر شيئًا." },
        { type: 'memory', title: 'Testing a full course',
          frames: [
            { label: 'After <code>c.addStudent(a);</code> and <code>c.addStudent(b);</code>',
              vars: [{ name: 'c', type: 'Course', ref: 'C' }, { name: 'a', type: 'Student', ref: 'S' }, { name: 'b', type: 'Student', ref: 'T' }, { name: 'x', type: 'Student', ref: 'X' }],
              objects: [
                { id: 'C', cls: 'Course', fields: [{ name: 'code', value: '"CS102"' }, { name: 'students', ref: 'A' }, { name: 'count', value: '2' }] },
                { id: 'A', cls: 'Student[]', fields: [{ name: '[0]', ref: 'S' }, { name: '[1]', ref: 'T' }] },
                { id: 'S', cls: 'Student', fields: [{ name: 'id', value: '1001' }, { name: 'name', value: '"Sara"' }] },
                { id: 'T', cls: 'Student', fields: [{ name: 'id', value: '1002' }, { name: 'name', value: '"Omar"' }] },
                { id: 'X', cls: 'Student', fields: [{ name: 'id', value: '1003' }, { name: 'name', value: '"Lina"' }] }] },
            { label: 'After <code>boolean ok = c.addStudent(x);</code> (refused: only <code>ok</code> is new)',
              vars: [{ name: 'c', type: 'Course', ref: 'C' }, { name: 'a', type: 'Student', ref: 'S' }, { name: 'b', type: 'Student', ref: 'T' }, { name: 'x', type: 'Student', ref: 'X' }, { name: 'ok', type: 'boolean', value: 'false' }],
              objects: [
                { id: 'C', cls: 'Course', fields: [{ name: 'code', value: '"CS102"' }, { name: 'students', ref: 'A' }, { name: 'count', value: '2' }] },
                { id: 'A', cls: 'Student[]', fields: [{ name: '[0]', ref: 'S' }, { name: '[1]', ref: 'T' }] },
                { id: 'S', cls: 'Student', fields: [{ name: 'id', value: '1001' }, { name: 'name', value: '"Sara"' }] },
                { id: 'T', cls: 'Student', fields: [{ name: 'id', value: '1002' }, { name: 'name', value: '"Omar"' }] },
                { id: 'X', cls: 'Student', fields: [{ name: 'id', value: '1003' }, { name: 'name', value: '"Lina"' }] }] }
          ],
          ar: "بعد الرفض بقي العدّاد 2 والمصفوفة كما هي؛ فقط المتغير ok يساوي false." },
        { type: 'check', q: "Which test is an <b>edge case</b> for <code>remove</code>?",
          options: ["Remove a student from the middle of a list of five", "Remove the last student of the list", "Print the list", "Add one student"], answer: 1,
          explain: "Removing the <b>last</b> student is an edge: the shift loop does not run at all, and only the clearing and <code>count--</code> must work. (Removing the first one is another edge.)" },

        { type: 'h', en: 'Testing the whole system with commands' },
        { type: 'p', en: "When each class passes its tests, test them <b>together</b>, the way a user would. The program reads <b>commands</b> from the input, one per line, does what each command says, and stops when it reads <code>END</code>. A loop that does this is called a <b>command loop</b>." },
        { type: 'table', head: ['Command', 'Meaning', 'Example'], rows: [
          ['<code>ADD id name</code>', 'add a student', '<code>ADD 1001 Sara</code>'],
          ['<code>COURSE code capacity</code>', 'add a course', '<code>COURSE CS102 2</code>'],
          ['<code>ENROLL id code</code>', 'enroll a student in a course', '<code>ENROLL 1001 CS102</code>'],
          ['<code>LIST code</code>', 'print the students of a course', '<code>LIST CS102</code>'],
          ['<code>END</code>', 'stop the program', '<code>END</code>']
        ] },
        { type: 'code', code: J`
          String cmd = sc.next();
          while (!cmd.equals("END")) {
              if (cmd.equals("ADD")) {
                  int id = sc.nextInt();
                  String name = sc.next();
                  // ... ask the registrar, print the answer
              } else if (cmd.equals("LIST")) {
                  reg.printCourse(sc.next());
              }
              cmd = sc.next();
          }
        ` },
        { type: 'lines', title: 'Read the command loop', rows: [
          ['String cmd = sc.next();', 'Read the first word of the first line: the command.'],
          ['while (!cmd.equals("END"))', 'Repeat until the command is END. Strings are compared with <code>equals</code>.'],
          ['int id = sc.nextInt(); String name = sc.next();', 'Each command reads its own extra values from the same line.'],
          ['cmd = sc.next();', 'At the end of each round, read the next command. Without this line the loop never ends.']
        ], ar: "حلقة الأوامر تقرأ الأمر، تنفذه، ثم تقرأ الأمر التالي حتى END." },
        { type: 'p', en: "Before you run it, write a <b>test plan</b>: the input lines and the output you expect for each one. Then run the program and compare line by line. Every line that matches is a passed test." },
        { type: 'table', head: ['Input line', 'Expected output', 'What it tests'], rows: [
          ['<code>ADD 1001 Huda</code> (1001 exists)', '<code>Cannot add student 1001</code>', 'no two students with one ID'],
          ['<code>ENROLL 1003 CS102</code> (CS102 has 2 of 2)', '<code>ENROLL 1003 CS102: Course full</code>', 'capacity'],
          ['<code>ENROLL 1001 CS102</code> (again)', '<code>ENROLL 1001 CS102: Already enrolled</code>', 'duplicates'],
          ['<code>ENROLL 1004 MATH101</code>', '<code>ENROLL 1004 MATH101: No such student</code>', 'not found'],
          ['<code>LIST CS102</code>', '<code>CS102: Sara Omar</code>', 'the list and its order']
        ] },

        { type: 'steps', title: 'Worked example: a system test driven by commands', problem: "Use Student, Course and Registrar from Lesson 8 without changes. Write a main that reads commands until END, sends each one to the registrar, and prints the answer. Then run the test plan as input.",
          steps: [
            { en: "Step 1: Keep the three classes exactly as they were tested. A system test should not change them." },
            { en: "Step 2: Read the first command, and loop until END.", code: J`
              String cmd = sc.next();
              while (!cmd.equals("END")) {
                  // one branch per command
                  cmd = sc.next();
              }
              System.out.println("Bye");
            ` },
            { en: "Step 3: Each branch reads its values and asks the registrar. The registrar returns booleans and messages; main only prints.", code: J`
              } else if (cmd.equals("ENROLL")) {
                  int id = sc.nextInt();
                  String code = sc.next();
                  System.out.println("ENROLL " + id + " " + code + ": " + reg.enroll(id, code));
              }
            ` },
            { en: "Step 4: An unknown command should not stop the test: print a message and skip the rest of its line with <code>nextLine()</code>.", code: J`
              } else {
                  System.out.println("Unknown command: " + cmd);
                  sc.nextLine();
              }
            ` },
            { en: "Step 5: Run it with the test plan as input and compare every line with the plan." }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Registrar reg = new Registrar(100, 20);
                    String cmd = sc.next();
                    while (!cmd.equals("END")) {
                        if (cmd.equals("ADD")) {
                            int id = sc.nextInt();
                            String name = sc.next();
                            if (reg.addStudent(id, name)) {
                                System.out.println("Added student " + id);
                            } else {
                                System.out.println("Cannot add student " + id);
                            }
                        } else if (cmd.equals("COURSE")) {
                            String code = sc.next();
                            int capacity = sc.nextInt();
                            if (reg.addCourse(code, capacity)) {
                                System.out.println("Added course " + code);
                            } else {
                                System.out.println("Cannot add course " + code);
                            }
                        } else if (cmd.equals("ENROLL")) {
                            int id = sc.nextInt();
                            String code = sc.next();
                            System.out.println("ENROLL " + id + " " + code + ": " + reg.enroll(id, code));
                        } else if (cmd.equals("LIST")) {
                            reg.printCourse(sc.next());
                        } else {
                            System.out.println("Unknown command: " + cmd);
                            sc.nextLine();
                        }
                        cmd = sc.next();
                    }
                    System.out.println("Bye");
                }
            }

            class Student {
                public static final int MAX_COURSES = 5;

                private int id;
                private String name;
                private Course[] courses;
                private int courseCount;

                public Student(int id, String name) {
                    this.id = id;
                    this.name = name;
                    this.courses = new Course[MAX_COURSES];
                }

                public int getId() { return id; }
                public String getName() { return name; }

                public boolean canTakeMore() {
                    return courseCount < MAX_COURSES;
                }

                public void addCourse(Course c) {
                    courses[courseCount] = c;
                    courseCount++;
                }
            }

            class Course {
                private String code;
                private Student[] students;
                private int count;

                public Course(String code, int capacity) {
                    this.code = code;
                    this.students = new Student[capacity];
                }

                public String getCode() { return code; }

                public boolean isFull() {
                    return count == students.length;
                }

                public boolean hasStudent(Student s) {
                    for (int i = 0; i < count; i++) {
                        if (students[i].getId() == s.getId()) {
                            return true;
                        }
                    }
                    return false;
                }

                public boolean addStudent(Student s) {
                    if (isFull()) {
                        return false;
                    }
                    students[count] = s;
                    count++;
                    return true;
                }

                public void printStudents() {
                    System.out.print(code + ":");
                    for (int i = 0; i < count; i++) {
                        System.out.print(" " + students[i].getName());
                    }
                    System.out.println();
                }
            }

            class Registrar {
                private Student[] students;
                private int studentCount;
                private Course[] courses;
                private int courseCount;

                public Registrar(int maxStudents, int maxCourses) {
                    students = new Student[maxStudents];
                    courses = new Course[maxCourses];
                }

                public boolean addStudent(int id, String name) {
                    if (studentCount == students.length || findStudent(id) != null) {
                        return false;
                    }
                    students[studentCount] = new Student(id, name);
                    studentCount++;
                    return true;
                }

                public boolean addCourse(String code, int capacity) {
                    if (courseCount == courses.length || findCourse(code) != null) {
                        return false;
                    }
                    courses[courseCount] = new Course(code, capacity);
                    courseCount++;
                    return true;
                }

                public Student findStudent(int id) {
                    for (int i = 0; i < studentCount; i++) {
                        if (students[i].getId() == id) {
                            return students[i];
                        }
                    }
                    return null;
                }

                public Course findCourse(String code) {
                    for (int i = 0; i < courseCount; i++) {
                        if (courses[i].getCode().equals(code)) {
                            return courses[i];
                        }
                    }
                    return null;
                }

                public String enroll(int id, String code) {
                    Student s = findStudent(id);
                    if (s == null) {
                        return "No such student";
                    }
                    Course c = findCourse(code);
                    if (c == null) {
                        return "No such course";
                    }
                    if (c.hasStudent(s)) {
                        return "Already enrolled";
                    }
                    if (!s.canTakeMore()) {
                        return "Too many courses";
                    }
                    if (!c.addStudent(s)) {
                        return "Course full";
                    }
                    s.addCourse(c);
                    return "OK";
                }

                public void printCourse(String code) {
                    Course c = findCourse(code);
                    if (c == null) {
                        System.out.println("No such course");
                    } else {
                        c.printStudents();
                    }
                }
            }
          `, stdin: J`
            ADD 1001 Sara
            ADD 1002 Omar
            ADD 1003 Lina
            ADD 1001 Huda
            COURSE CS102 2
            COURSE MATH101 30
            ENROLL 1001 CS102
            ENROLL 1002 CS102
            ENROLL 1003 CS102
            ENROLL 1001 CS102
            ENROLL 1003 MATH101
            ENROLL 1004 MATH101
            LIST CS102
            LIST MATH101
            END
          `, out: J`
            Added student 1001
            Added student 1002
            Added student 1003
            Cannot add student 1001
            Added course CS102
            Added course MATH101
            ENROLL 1001 CS102: OK
            ENROLL 1002 CS102: OK
            ENROLL 1003 CS102: Course full
            ENROLL 1001 CS102: Already enrolled
            ENROLL 1003 MATH101: OK
            ENROLL 1004 MATH101: No such student
            CS102: Sara Omar
            MATH101: Lina
            Bye
          `, ar: "كل سطر في المخرجات يطابق خطة الاختبار، فالنظام اجتاز اختبار النظام." },

        { type: 'h', en: 'From this page to NetBeans' },
        { type: 'p', en: "On this site, the whole program is <b>one file</b>: <code>public class Main</code> first, and the helper classes below it without <code>public</code>. In NetBeans (and in most real projects) each public class lives in its <b>own file</b>, and the file name must be the class name." },
        { type: 'table', head: ['Here (one file)', 'In NetBeans (one project, one package)'], rows: [
          ['<code>public class Main</code> with main', '<code>Main.java</code> with <code>public class Main</code>'],
          ['<code>class Student</code> (no public), below Main', '<code>Student.java</code> with <code>public class Student</code>'],
          ['<code>class Course</code>', '<code>Course.java</code> with <code>public class Course</code>'],
          ['<code>class Registrar</code>', '<code>Registrar.java</code> with <code>public class Registrar</code>'],
          ['a test driver with <code>check(...)</code>', 'for example <code>CourseTest.java</code> with its own main, run with <b>Run File</b> (Shift+F6)']
        ] },
        { type: 'list', items: [
          "To add a class: right-click the package → <b>New</b> → <b>Java Class</b>, and type the class name.",
          "Classes in the same package see each other: no import is needed.",
          "Each class with a <code>main</code> can be run alone with <b>Run File</b>. This is handy for test drivers: one test file per class.",
          "Input for Scanner is typed in the <b>Output</b> window at the bottom. You can paste a whole test plan there at once."
        ], ar: "في NetBeans كل صنف عام في ملف باسمه، والأصناف في الحزمة نفسها يرى بعضها بعضًا." },
        { type: 'note', kind: 'warn', en: "In NetBeans, two public classes in one file is a compile error: <code>class Student is public, should be declared in a file named Student.java</code>. The Run button on this site quietly removes an extra <code>public</code> for you, but in NetBeans you must use one file per public class.",
          ar: "صنفان عامّان في ملف واحد خطأ ترجمة في NetBeans." },
        { type: 'check', q: "In NetBeans, where does <code>public class Course</code> go?",
          options: ["Below Main in Main.java", "In its own file named Course.java", "In any file with any name", "Inside the main method"], answer: 1,
          explain: "A public class must be in a file with exactly the same name: Course.java." }
      ],
      mistakes: [
        { title: 'Testing only the happy path', en: "If every test uses normal data, the bugs at the edges stay hidden: empty lists, full lists, missing IDs, duplicates. Add one test for each edge.", code: J`
          check("add to a full course is refused", !full.addStudent(x));
          check("unknown ID gives null", reg.findStudent(9999) == null);
        `, ar: "اختبر{{g:|ي}} الحالات الحدّية لا الحالة العادية فقط." },
        { title: 'Testing everything at once', en: "Running the whole system first makes a wrong answer hard to explain. Test each class alone with a small driver, then the system.", code: J`
          // 1. CourseTest: tests Course alone
          // 2. then the command-driven system test
        ` },
        { title: 'Comparing commands with ==', en: "A command read by Scanner is a new String object, so <code>cmd == \"END\"</code> is false even when the user types END. The loop never stops and the program crashes at the end of the input. Use <code>equals</code>.", code: J`
          while (cmd != "END")          // wrong
          while (!cmd.equals("END"))    // right
        ` },
        { title: 'Forgetting to read the next command', en: "Without <code>cmd = sc.next();</code> at the end of the loop body, <code>cmd</code> never changes and the loop repeats the same command forever.", code: J`
          while (!cmd.equals("END")) {
              // ... handle cmd
              cmd = sc.next();          // do not forget this
          }
        ` }
      ],
      remember: [
        "Test in two stages: each class <b>alone</b> (unit testing), then all classes <b>together</b> (system testing).",
        "A <b>test driver</b> is a small main that compares actual results with expected results: <code>check(\"name\", condition)</code>.",
        "Test the <b>edge cases</b>: empty, one, full, not found, twice; and check that a refused action changed nothing.",
        "A <b>command loop</b> reads a command, handles it, and reads the next one until END; compare commands with <code>equals</code>.",
        "Write a test plan (input → expected output) before you run the system test.",
        "NetBeans: one public class per file (<code>Student.java</code>); here: one file, helper classes below Main without public."
      ],
      rememberAr: "اختبر{{g:|ي}} كل صنف وحده ثم النظام كاملًا. برنامج الاختبار يقارن الناتج بالمتوقع، والحالات الحدّية أهم الاختبارات. حلقة الأوامر تقرأ حتى END وتقارن بـ equals. في NetBeans كل صنف عام في ملف باسمه.",
      practice: [
        { t: 'mcq', q: "What is a <b>test driver</b>?",
          qAr: "ما برنامج الاختبار؟",
          options: [
            "A small main that calls the methods of one class and compares the results with the expected results",
            "The part of NetBeans that compiles the code",
            "A class that holds many objects",
            "A method that returns null"
          ], answer: 0,
          explain: "A test driver builds objects, calls methods, and prints PASS or FAIL by comparing actual and expected results.",
          explainAr: "برنامج صغير يستدعي دوال الصنف ويقارن النتائج بالمتوقع." },
        { t: 'output', q: "This test driver tests a <code>Basket</code> class that has a bug. What does it print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Basket b = new Basket(2);
                  check("empty at start", b.getCount() == 0);
                  b.add("Tea");
                  b.add("Cake");
                  check("count is 2", b.getCount() == 2);
                  check("full", b.isFull());
              }

              static void check(String what, boolean ok) {
                  if (ok) {
                      System.out.println("PASS: " + what);
                  } else {
                      System.out.println("FAIL: " + what);
                  }
              }
          }

          class Basket {
              private String[] items;
              private int count;

              public Basket(int capacity) {
                  items = new String[capacity];
              }

              public void add(String item) {
                  if (count < items.length) {
                      items[count] = item;
                      count++;
                  }
              }

              public int getCount() { return count; }

              public boolean isFull() {
                  return count > items.length;
              }
          }
        `, answer: J`
          PASS: empty at start
          PASS: count is 2
          FAIL: full
        `, explain: "After two adds, count is 2 and the array length is 2. <code>isFull()</code> asks 2 &gt; 2, which is false, so the test prints FAIL and points at the bug in isFull (it should use <code>==</code>).",
          explainAr: "الاختبار كشف الخطأ في isFull مباشرة." },
        { t: 'fill', q: "Complete the command loop.", code: J`
          String cmd = sc.next();
          while (!cmd.___("END")) {
              if (cmd.equals("ADD")) {
                  int id = sc.___();
                  String name = sc.next();
                  System.out.println(reg.addStudent(id, name));
              }
              cmd = sc.___();
          }
        `, answers: ['equals', 'nextInt', 'next'],
          explain: "Compare Strings with <code>equals</code>, read the ID with <code>nextInt()</code>, and read the next command with <code>next()</code> at the end of every round." },
        { t: 'order', q: "Put the lines of a command loop that handles <code>LIST code</code> until <code>END</code> in order.",
          lines: [
            "String cmd = sc.next();",
            "while (!cmd.equals(\"END\")) {",
            "    if (cmd.equals(\"LIST\")) {",
            "        reg.printCourse(sc.next());",
            "    }",
            "    cmd = sc.next();",
            "}"
          ],
          explain: "Read the first command before the loop, handle it inside, and read the next command as the last line of the loop body." },
        { t: 'mcq', q: "<code>hasStudent</code> may have the bug <code>else return false;</code> inside its loop (it looks only at the first student). Which test finds this bug?",
          options: [
            "Add one student, then check hasStudent for that student",
            "Add two students, then check hasStudent for the <b>second</b> one",
            "Check that a new course is empty",
            "Check isFull on an empty course"
          ], answer: 1,
          explain: "With the bug, the method returns after the first student. Only a test that asks about a later student sees the wrong answer." },
        { t: 'bug', q: "The input ends with the line END, but this loop does not stop there: the program crashes with a <code>NoSuchElementException</code>. Tap the line with the bug.",
          code: J`
            Scanner sc = new Scanner(System.in);
            String cmd = sc.next();
            while (cmd != "END") {
                if (cmd.equals("ADD")) {
                    System.out.println("Added " + sc.next());
                }
                cmd = sc.next();
            }
            System.out.println("Bye");
          `, bug: 3,
          fix: J`
            Scanner sc = new Scanner(System.in);
            String cmd = sc.next();
            while (!cmd.equals("END")) {
                if (cmd.equals("ADD")) {
                    System.out.println("Added " + sc.next());
                }
                cmd = sc.next();
            }
            System.out.println("Bye");
          `,
          hint: "How should two Strings be compared?",
          explain: "<code>!=</code> compares references. The END read by Scanner is a different String object from the literal \"END\", so the condition stays true. The loop calls <code>sc.next()</code> again after the last word and crashes. Use <code>!cmd.equals(\"END\")</code>.",
          explainAr: "المقارنة بـ != تقارن المراجع؛ استعمل{{g:|ي}} equals." },
        { t: 'bug', q: "Class <code>Course</code> is correct, but this test driver prints <code>FAIL: Lina is not in the course</code>. The bug is in the test itself. Tap the line.",
          code: J`
            Course c = new Course("CS102", 2);
            Student a = new Student(1001, "Sara");
            Student x = new Student(1003, "Lina");
            c.addStudent(a);
            check("Sara is in the course", c.hasStudent(a));
            check("Lina is not in the course", c.hasStudent(x));
            check("count is 1", c.getCount() == 1);
          `, bug: 6,
          fix: J`
            Course c = new Course("CS102", 2);
            Student a = new Student(1001, "Sara");
            Student x = new Student(1003, "Lina");
            c.addStudent(a);
            check("Sara is in the course", c.hasStudent(a));
            check("Lina is not in the course", !c.hasStudent(x));
            check("count is 1", c.getCount() == 1);
          `,
          hint: "What should hasStudent(x) return, and what does check expect?",
          explain: "Lina was never added, so <code>hasStudent(x)</code> correctly returns false. The test expects &quot;not in&quot;, so its condition must be <code>!c.hasStudent(x)</code>. Tests can have bugs too: when a test fails, check the test as well as the class.",
          explainAr: "الخطأ في الاختبار نفسه: نسي علامة النفي !." },
        { t: 'code', q: "Class <code>Shelf</code> is given. Write <code>main</code>: read the capacity, build a Shelf, then read commands until <code>END</code> (no prompts):<br><code>ADD title</code> → print <code>Added TITLE</code>, or <code>Full: TITLE</code> if add returns false;<br><code>COUNT</code> → print <code>Count: X</code>;<br><code>LIST</code> → call <code>printAll()</code>;<br><code>END</code> → print <code>Bye</code> and stop. Titles are one word.",
          qAr: "اكتب{{g:|ي}} حلقة أوامر تقرأ حتى END وتستعمل صنف الرف.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    // read capacity, build the shelf, then the command loop
                }
            }

            class Shelf {
                private String[] titles;
                private int count;

                public Shelf(int capacity) {
                    titles = new String[capacity];
                }

                public boolean add(String t) {
                    if (count == titles.length) {
                        return false;
                    }
                    titles[count] = t;
                    count++;
                    return true;
                }

                public int getCount() { return count; }

                public void printAll() {
                    for (int i = 0; i < count; i++) {
                        System.out.println(titles[i]);
                    }
                }
            }
          `,
          tests: [
            { stdin: J`
              2
              ADD Java
              ADD Math
              ADD Poems
              COUNT
              LIST
              END
            `, expected: J`
              Added Java
              Added Math
              Full: Poems
              Count: 2
              Java
              Math
              Bye
            ` },
            { stdin: J`
              5
              COUNT
              ADD Networks
              LIST
              END
            `, expected: J`
              Count: 0
              Added Networks
              Networks
              Bye
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Shelf shelf = new Shelf(sc.nextInt());
                    String cmd = sc.next();
                    while (!cmd.equals("END")) {
                        if (cmd.equals("ADD")) {
                            String title = sc.next();
                            if (shelf.add(title)) {
                                System.out.println("Added " + title);
                            } else {
                                System.out.println("Full: " + title);
                            }
                        } else if (cmd.equals("COUNT")) {
                            System.out.println("Count: " + shelf.getCount());
                        } else if (cmd.equals("LIST")) {
                            shelf.printAll();
                        }
                        cmd = sc.next();
                    }
                    System.out.println("Bye");
                }
            }

            class Shelf {
                private String[] titles;
                private int count;

                public Shelf(int capacity) {
                    titles = new String[capacity];
                }

                public boolean add(String t) {
                    if (count == titles.length) {
                        return false;
                    }
                    titles[count] = t;
                    count++;
                    return true;
                }

                public int getCount() { return count; }

                public void printAll() {
                    for (int i = 0; i < count; i++) {
                        System.out.println(titles[i]);
                    }
                }
            }
          `,
          hint: "Read the first command before the loop: <code>String cmd = sc.next();</code>. Use <code>equals</code> for every comparison, and read the next command at the end of the loop.",
          explain: "The command loop only reads input and prints; the Shelf does the real work and reports with a boolean. This is the same pattern as the registration system test." }
      ]
    }

  ],

  quiz: [
    { t: 'mcq', q: "Class <code>Car</code> has the field <code>private Engine engine;</code>. What is the relationship between Car and Engine?",
      options: ["Composition (has-a)", "Inheritance (is-a)", "A static member", "An array of objects"], answer: 0,
      explain: "A car <b>has an</b> engine: a field whose type is another class is composition (a has-a relationship)." },
    { t: 'output', q: "What does this program print?", code: J`
      public class Main {
          public static void main(String[] args) {
              Student s = new Student("Huda", new Address("Abha", "King Rd"));
              System.out.println(s);
              System.out.println(s.getAddress().getCity().length());
          }
      }

      class Address {
          private String city;
          private String street;

          public Address(String city, String street) {
              this.city = city;
              this.street = street;
          }

          public String getCity() { return city; }

          @Override
          public String toString() { return street + ", " + city; }
      }

      class Student {
          private String name;
          private Address home;

          public Student(String name, Address home) {
              this.name = name;
              this.home = home;
          }

          public Address getAddress() { return home; }

          @Override
          public String toString() { return name + " - " + home; }
      }
    `, answer: J`
      Huda - King Rd, Abha
      4
    `, explain: "Student's toString uses Address's toString. The chain runs left to right: getAddress() gives the Address, getCity() gives \"Abha\", and length() gives 4." },
    { t: 'mcq', q: "How many objects are created by <code>Student[] list = new Student[4];</code>?",
      options: ["0", "1 (the array only)", "4", "5"], answer: 1,
      explain: "Only the array object is built. Its 4 slots are <code>null</code>; no Student exists until you use <code>new Student(...)</code>." },
    { t: 'output', q: "Two courses share one teacher. What does this program print?", code: J`
      public class Main {
          public static void main(String[] args) {
              Teacher t = new Teacher("Dr. Sami", "B-12");
              Course c1 = new Course("CS101", t);
              Course c2 = new Course("CS102", t);
              c1.getTeacher().setOffice("F-03");
              System.out.println(c2.getTeacher().getOffice());
              System.out.println(c1.getTeacher() == c2.getTeacher());
          }
      }

      class Teacher {
          private String name;
          private String office;

          public Teacher(String name, String office) {
              this.name = name;
              this.office = office;
          }

          public String getOffice() { return office; }
          public void setOffice(String office) { this.office = office; }
      }

      class Course {
          private String code;
          private Teacher teacher;

          public Course(String code, Teacher teacher) {
              this.code = code;
              this.teacher = teacher;
          }

          public Teacher getTeacher() { return teacher; }
      }
    `, answer: J`
      F-03
      true
    `, explain: "Both courses point to the same Teacher object (aggregation, aliasing). The change made through c1 is seen through c2, and <code>==</code> is true because it is one object." },
    { t: 'bug', q: "When the ID is not in the course (and the course is not full), <code>findById</code> crashes with a <code>NullPointerException</code> instead of returning null. Tap the line with the bug.",
      code: J`
        public Student findById(int id) {
            for (int i = 0; i <= count; i++) {
                if (students[i].getId() == id) {
                    return students[i];
                }
            }
            return null;
        }
      `, bug: 2,
      fix: J`
        public Student findById(int id) {
            for (int i = 0; i < count; i++) {
                if (students[i].getId() == id) {
                    return students[i];
                }
            }
            return null;
        }
      `,
      hint: "Which slots are used in a partially filled array?",
      explain: "The used slots are 0 to count - 1. With <code>&lt;=</code> the loop also visits slot <code>count</code>, which is <code>null</code>, and <code>getId()</code> on null crashes. Use <code>i &lt; count</code>." },
    { t: 'output', q: "What does this program print?", code: J`
      public class Main {
          public static void main(String[] args) {
              Team t = new Team(2);
              System.out.println(t.add(new Player("Salem")));
              System.out.println(t.add(new Player("Yousef")));
              System.out.println(t.add(new Player("Turki")));
              t.printAll();
          }
      }

      class Player {
          private String name;

          public Player(String name) { this.name = name; }

          public String getName() { return name; }
      }

      class Team {
          private Player[] players;
          private int count;

          public Team(int capacity) {
              players = new Player[capacity];
          }

          public boolean add(Player p) {
              if (count == players.length) {
                  return false;
              }
              players[count] = p;
              count++;
              return true;
          }

          public void printAll() {
              for (int i = 0; i < count; i++) {
                  System.out.println(players[i].getName());
              }
          }
      }
    `, answer: J`
      true
      true
      false
      Salem
      Yousef
    `, explain: "The team has 2 places. The third add returns false and changes nothing, so printAll shows only the first two players." },
    { t: 'mcq', q: "A UML diagram shows <code>Book ——— 0..1 Member</code> (the borrower). How is this written in Java?",
      options: [
        "<code>private Member[] borrowers;</code> with a counter",
        "<code>private Member borrower;</code> which may be <code>null</code>",
        "<code>private int borrower;</code>",
        "No field is needed"
      ], answer: 1,
      explain: "<code>0..1</code> means zero or one object: one reference field, which is <code>null</code> when there is no borrower." },
    { t: 'output', q: "<code>Exam</code> uses defensive copies. What does this program print?", code: J`
      public class Main {
          public static void main(String[] args) {
              Date d = new Date(1, 9);
              Exam e = new Exam(d);
              d.setDay(5);
              e.getDate().setDay(7);
              System.out.println(e.getDate() + " " + d);
          }
      }

      class Date {
          private int day, month;

          public Date(int day, int month) {
              this.day = day;
              this.month = month;
          }

          public Date(Date other) {
              this.day = other.day;
              this.month = other.month;
          }

          public void setDay(int day) { this.day = day; }

          @Override
          public String toString() { return day + "/" + month; }
      }

      class Exam {
          private Date date;

          public Exam(Date date) {
              this.date = new Date(date);
          }

          public Date getDate() {
              return new Date(date);
          }
      }
    `, answer: '1/9 5/9',
      explain: "The exam keeps its own copy (1/9). Changing <code>d</code> changes only d (5/9), and changing the returned copy (7/9) does not touch the exam." },
    { t: 'mcq', q: "<code>Student</code> has a private Address field. Following this unit, which line is the best design for main to get a student's city?",
      options: [
        "<code>s.home.city</code>",
        "<code>s.getAddress().getCity()</code>",
        "<code>s.getCity()</code>, where getCity() delegates to the address",
        "<code>new Address().getCity()</code>"
      ], answer: 2,
      explain: "The first line does not compile (private fields). The chained call works but makes main depend on Address. A short delegating method is easier to read and safer to change." },
    { t: 'bug', q: "The first call of <code>add</code> crashes with a <code>NullPointerException</code>. Tap the line with the bug.",
      code: J`
        class Course {
            private Student[] students;
            private int count;

            public Course(int capacity) {
                Student[] students = new Student[capacity];
            }

            public void add(Student s) {
                students[count] = s;
                count++;
            }
        }
      `, bug: 6,
      fix: J`
        class Course {
            private Student[] students;
            private int count;

            public Course(int capacity) {
                students = new Student[capacity];
            }

            public void add(Student s) {
                students[count] = s;
                count++;
            }
        }
      `,
      hint: "Is the array stored in the field?",
      explain: "Writing the type <code>Student[]</code> again declares a new local variable. The array is built, then thrown away when the constructor ends, and the field <code>students</code> stays <code>null</code>. Write <code>students = new Student[capacity];</code> (or <code>this.students = ...</code>)." },
    { t: 'mcq', q: "In NetBeans you write <code>public class Main</code> and <code>public class Student</code> in the same file <code>Main.java</code>. What happens?",
      options: [
        "It runs normally",
        "Compile error: class Student is public, should be declared in a file named Student.java",
        "Only Student runs",
        "A NullPointerException"
      ], answer: 1,
      explain: "Each public class must be in its own file with the same name. Put Student in Student.java (or remove <code>public</code> from it)." },
    { t: 'output', q: "A clinic queue removes the patient at index 0. What does this program print?", code: J`
      public class Main {
          public static void main(String[] args) {
              Clinic c = new Clinic(4);
              c.add("Noura");
              c.add("Fahad");
              c.add("Mona");
              c.remove(0);
              c.add("Saad");
              c.printAll();
          }
      }

      class Clinic {
          private String[] queue;
          private int count;

          public Clinic(int capacity) {
              queue = new String[capacity];
          }

          public void add(String name) {
              if (count < queue.length) {
                  queue[count] = name;
                  count++;
              }
          }

          public void remove(int index) {
              for (int j = index; j < count - 1; j++) {
                  queue[j] = queue[j + 1];
              }
              queue[count - 1] = null;
              count--;
          }

          public void printAll() {
              for (int i = 0; i < count; i++) {
                  System.out.println((i + 1) + ". " + queue[i]);
              }
          }
      }
    `, answer: J`
      1. Fahad
      2. Mona
      3. Saad
    `, explain: "Removing index 0 shifts Fahad and Mona one place to the left and makes count 2. Saad is then added at index 2, the next free slot." }
  ],

  lab: {
    t: 'code',
    q: "<b>Mini project: a restaurant bill.</b> Write three classes.<br>" +
       "• <code>MenuItem</code>: private <code>name</code> (String) and <code>price</code> (double), a constructor and getters.<br>" +
       "• <code>OrderLine</code>: private <code>item</code> (MenuItem) and <code>quantity</code> (int), a constructor, <code>double lineTotal()</code> (price × quantity, asking the item for its price) and <code>toString()</code> that returns <code>NAME xQUANTITY = LINETOTAL</code> with 2 decimals (use <code>String.format(\"%s x%d = %.2f\", ...)</code>).<br>" +
       "• <code>Order</code>: private <code>OrderLine[] lines</code> and <code>int count</code>, a constructor <code>Order(int capacity)</code>, <code>boolean addLine(OrderLine line)</code> (false when full), <code>double total()</code> (the sum of all line totals) and <code>toString()</code> that returns all its lines, one per line.<br>" +
       "<b>Input</b> (no prompts): an integer <code>M</code>, then <code>M</code> menu lines <code>NAME PRICE</code>; then an integer <code>K</code> (at most 10), then <code>K</code> order lines <code>NAME QUANTITY</code>. Names are one word. At least one ordered name is on the menu.<br>" +
       "<b>Processing:</b> build an <code>Order</code> with capacity 10. For each order line, find the menu item by its exact name. If the name is not on the menu, print <code>Not on menu: NAME</code> at once and skip it; otherwise add a new OrderLine to the order.<br>" +
       "<b>Output</b> after all the input: the order (one line per item, from its toString), then <code>Subtotal: S</code>, <code>VAT 15%: V</code> with V = S × 0.15, and <code>Total: T</code> with T = S + V. Print every money value with exactly 2 decimals (<code>%.2f</code>).",
    qAr: "مشروع مصغر: فاتورة مطعم من ثلاثة أصناف: صنف الطبق، وسطر الطلب الذي يملك طبقًا، والطلب الذي يحفظ الأسطر في مصفوفة مع عدّاد. اطبع{{g:|ي}} الفاتورة مع ضريبة القيمة المضافة 15%.",
    starter: J`
      import java.util.*;

      public class Main {
          public static void main(String[] args) {
              Scanner sc = new Scanner(System.in);
              // 1. read the menu into a MenuItem[] array
              // 2. read the order lines: find each item by name;
              //    add an OrderLine, or print "Not on menu: NAME"
              // 3. print the order, then Subtotal, VAT 15% and Total with %.2f
          }
      }

      class MenuItem {
          // name, price, constructor, getters
      }

      class OrderLine {
          // item (MenuItem), quantity, constructor, lineTotal(), toString()
      }

      class Order {
          // OrderLine[] lines, int count, constructor, addLine, total, toString
      }
    `,
    tests: [
      { stdin: J`
        3
        Shawarma 12.50
        Juice 7.00
        Fries 6.25
        3
        Shawarma 2
        Fries 1
        Juice 3
      `, expected: J`
        Shawarma x2 = 25.00
        Fries x1 = 6.25
        Juice x3 = 21.00
        Subtotal: 52.25
        VAT 15%: 7.84
        Total: 60.09
      ` },
      { stdin: J`
        4
        Coffee 9.00
        Tea 4.50
        Cake 15.75
        Water 1.50
        5
        Tea 2
        Pizza 1
        Cake 1
        Water 6
        Burger 2
      `, expected: J`
        Not on menu: Pizza
        Not on menu: Burger
        Tea x2 = 9.00
        Cake x1 = 15.75
        Water x6 = 9.00
        Subtotal: 33.75
        VAT 15%: 5.06
        Total: 38.81
      ` },
      { stdin: J`
        1
        Kabsa 35.00
        1
        Kabsa 4
      `, expected: J`
        Kabsa x4 = 140.00
        Subtotal: 140.00
        VAT 15%: 21.00
        Total: 161.00
      ` }
    ],
    solution: J`
      import java.util.*;

      public class Main {
          public static void main(String[] args) {
              Scanner sc = new Scanner(System.in);
              int m = sc.nextInt();
              MenuItem[] menu = new MenuItem[m];
              for (int i = 0; i < m; i++) {
                  menu[i] = new MenuItem(sc.next(), sc.nextDouble());
              }

              Order order = new Order(10);
              int k = sc.nextInt();
              for (int i = 0; i < k; i++) {
                  String name = sc.next();
                  int quantity = sc.nextInt();
                  MenuItem item = findItem(menu, name);
                  if (item == null) {
                      System.out.println("Not on menu: " + name);
                  } else {
                      order.addLine(new OrderLine(item, quantity));
                  }
              }

              double subtotal = order.total();
              double vat = subtotal * 0.15;
              System.out.println(order);
              System.out.printf("Subtotal: %.2f%n", subtotal);
              System.out.printf("VAT 15%%: %.2f%n", vat);
              System.out.printf("Total: %.2f%n", subtotal + vat);
          }

          static MenuItem findItem(MenuItem[] menu, String name) {
              for (int i = 0; i < menu.length; i++) {
                  if (menu[i].getName().equals(name)) {
                      return menu[i];
                  }
              }
              return null;
          }
      }

      class MenuItem {
          private String name;
          private double price;

          public MenuItem(String name, double price) {
              this.name = name;
              this.price = price;
          }

          public String getName() { return name; }
          public double getPrice() { return price; }
      }

      class OrderLine {
          private MenuItem item;
          private int quantity;

          public OrderLine(MenuItem item, int quantity) {
              this.item = item;
              this.quantity = quantity;
          }

          public double lineTotal() {
              return item.getPrice() * quantity;
          }

          @Override
          public String toString() {
              return String.format("%s x%d = %.2f", item.getName(), quantity, lineTotal());
          }
      }

      class Order {
          private OrderLine[] lines;
          private int count;

          public Order(int capacity) {
              lines = new OrderLine[capacity];
          }

          public boolean addLine(OrderLine line) {
              if (count == lines.length) {
                  return false;
              }
              lines[count] = line;
              count++;
              return true;
          }

          public double total() {
              double sum = 0;
              for (int i = 0; i < count; i++) {
                  sum += lines[i].lineTotal();
              }
              return sum;
          }

          @Override
          public String toString() {
              String result = "";
              for (int i = 0; i < count; i++) {
                  if (i > 0) {
                      result += "\n";
                  }
                  result += lines[i];
              }
              return result;
          }
      }
    `,
    hint: "Write a static helper <code>findItem(MenuItem[] menu, String name)</code> in Main that returns the item or <code>null</code>. In printf, write <code>%%</code> to print a percent sign: <code>printf(\"VAT 15%%: %.2f%n\", vat)</code>.",
    explain: "Each class does its own job: the menu item knows its price, the order line computes its own total by asking its item (delegation), and the order keeps a partially filled array and adds up its lines. Main only reads input, looks up names (null = not on the menu) and prints the bill."
  },

  cheats: [
    { code: J`
      class Car {
          private Engine engine;   // has-a
      }
    `, note: 'Composition: a field whose type is another class' },
    { code: J`this.home = new Address(city, street);`, note: 'A constructor that builds its own part' },
    { code: J`public String getCity() { return home.getCity(); }`, note: 'Delegation: pass the question to the part' },
    { code: J`return name + " (" + home + ")";`, note: "toString uses the part's toString automatically" },
    { code: J`s.getAddress().getCity()`, note: 'Chained call: runs left to right' },
    { code: J`
      this.date = new Date(date);   // in the constructor
      return new Date(date);        // in the getter
    `, note: 'Defensive copies: no privacy leak for mutable parts' },
    { code: J`Student[] list = new Student[3];`, note: 'Array of 3 null slots: no Student objects yet' },
    { code: J`
      if (list[i] != null) {
          System.out.println(list[i].getName());
      }
    `, note: 'Check a slot before calling a method (avoid NullPointerException)' },
    { code: J`
      public boolean add(Student s) {
          if (count == students.length) return false;
          students[count] = s;
          count++;
          return true;
      }
    `, note: 'Partially filled array: add at index count' },
    { code: J`
      for (int i = 0; i < count; i++) {
          if (students[i].getId() == id) return students[i];
      }
      return null;
    `, note: 'Find: return the object, or null for not found' },
    { code: J`
      for (int j = i; j < count - 1; j++) {
          students[j] = students[j + 1];
      }
      students[count - 1] = null;
      count--;
    `, note: 'Remove: shift left, clear the last slot, count--' },
    { code: J`
      private Player[] players;   // UML: 0..*
      private int count;
      private Doctor doctor;      // UML: 1
    `, note: 'Multiplicity in code: 0..* → array + counter; 1 or 0..1 → one field' },
    { code: J`
      String cmd = sc.next();
      while (!cmd.equals("END")) {
          // handle cmd
          cmd = sc.next();
      }
    `, note: 'Command loop for a system test' },
    { code: J`
      static void check(String what, boolean ok) {
          System.out.println((ok ? "PASS: " : "FAIL: ") + what);
      }
    `, note: 'A tiny test helper for a test driver' }
  ],

  glossary: [
    { term: 'Composition', ar: 'التركيب', def: 'A has-a relationship in which the whole owns its part; the part belongs to one whole only (House and Room).' },
    { term: 'Aggregation', ar: 'التجميع', def: 'A has-a relationship in which the whole uses a part that has its own life and may be shared (Course and Student).' },
    { term: 'Has-a relationship', ar: 'علاقة «يملك»', def: 'One class has a field whose type is another class: a Car has an Engine.' },
    { term: 'Delegation', ar: 'التفويض', def: 'A method that passes the job to a part and returns its answer, e.g. return home.getCity();' },
    { term: 'Chained call', ar: 'استدعاء متسلسل', def: 'Several method calls in one expression, run left to right: s.getAddress().getCity().' },
    { term: 'Aliasing', ar: 'تعدد المراجع لكائن واحد', def: 'Two or more references to the same object; a change made through one is seen through all of them.' },
    { term: 'Privacy leak', ar: 'تسرّب الخصوصية', def: 'A method that gives outside code a reference to a mutable private object, so it can be changed without the class knowing.' },
    { term: 'Defensive copy', ar: 'نسخة دفاعية', def: 'A copy made when an object receives or returns a mutable part, so outside code cannot change the original.' },
    { term: 'Mutable / immutable', ar: 'قابل للتغيير / غير قابل للتغيير', def: 'A mutable object can change after it is built (a Date with setDay); an immutable one cannot (a String).' },
    { term: 'Array of objects', ar: 'مصفوفة كائنات', def: 'An array whose slots hold references to objects; every slot starts as null.' },
    { term: 'NullPointerException', ar: 'استثناء المرجع الفارغ', def: 'The run-time error when a method is called or a field is used on a null reference.' },
    { term: 'Partially filled array', ar: 'مصفوفة مملوءة جزئيًا', def: 'An array together with a count; only the first count slots are used.' },
    { term: 'Association', ar: 'ارتباط', def: 'A line in a UML class diagram showing that objects of two classes are connected.' },
    { term: 'Multiplicity', ar: 'التعددية', def: 'Numbers at the ends of an association (1, 0..1, 0..*, 1..*) that say how many objects take part.' },
    { term: 'Two-way association', ar: 'ارتباط ثنائي الاتجاه', def: 'A link stored on both sides: a course keeps its students and each student keeps its courses.' },
    { term: 'Responsibility', ar: 'المسؤولية', def: 'The job a class owns; a good rule is that the class that has the data does the work.' },
    { term: 'Code skeleton', ar: 'هيكل الكود', def: 'Classes with their fields and empty methods, written from a design before the real code.' },
    { term: 'Test driver', ar: 'برنامج اختبار', def: 'A small main that calls the methods of a class and compares the actual results with the expected results.' },
    { term: 'Unit testing / system testing', ar: 'اختبار الوحدة / اختبار النظام', def: 'Testing one class alone, and then testing all classes working together the way a user would.' },
    { term: 'Edge case', ar: 'حالة حدّية', def: 'A test at the limits: empty, one object, full, not found, the same request twice.' },
    { term: 'Command loop', ar: 'حلقة الأوامر', def: 'A loop that reads a command, handles it, and reads the next one until a stop word such as END.' }
  ]
});
