JP.unit({
  course: 'cs102',
  n: 6,
  title: 'Generics',
  titleAr: 'الأنواع العامة (Generics)',
  intro: "Generics let you write a class, interface or method once and use it safely with many types: an ArrayList of String, a Box of Integer, a Pair of String and Double. The compiler checks the types for you, so mistakes are caught before the program runs and you no longer need casts. In this unit you will use generic types, write your own generic methods and classes, restrict them with bounds, and implement generic interfaces such as Comparable.",
  introAr: "تسمح الأنواع العامة بكتابة صنف أو دالة مرة واحدة واستخدامها بأمان مع أنواع مختلفة؛ يكتشف المترجم الأخطاء مبكراً ولا نحتاج إلى التحويل (cast).",
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      title: 'Why generics? Generic types and generic methods',
      titleAr: 'لماذا الأنواع العامة؟ الأنواع والدوال العامة',
      minutes: 45,
      body: [
        { type: 'h', en: 'Life before generics: raw types' },
        { type: 'p', en: "Before Java 5, an <code>ArrayList</code> simply held <code>Object</code>s. Using a collection without a type argument is still allowed and is called a <b>raw type</b>. The compiler cannot check what you put in, so you must cast when you take things out, and a wrong cast fails only at runtime with <code>ClassCastException</code>.", ar: "النوع الخام (raw type) لا يتحقق من الأنواع؛ تحتاج إلى cast وقد يفشل البرنامج وقت التشغيل." },
        { type: 'code', code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList raw = new ArrayList();      // raw type: compiler warning
                  raw.add("Riyadh");
                  raw.add(42);                          // nothing stops this
                  String city = (String) raw.get(0);    // cast required
                  System.out.println(city);
                  // String bad = (String) raw.get(1);  // ClassCastException at runtime!

                  ArrayList<String> safe = new ArrayList<>();
                  safe.add("Jeddah");
                  // safe.add(42);                      // compile error: caught early
                  String c2 = safe.get(0);              // no cast needed
                  System.out.println(c2);
              }
          }
        `, out: J`
          Riyadh
          Jeddah
        ` },
        { type: 'note', kind: 'warn', en: "Compiling code with raw types produces a warning such as <i>uses unchecked or unsafe operations</i>. Treat it as a bug report: add the missing type argument, e.g. <code>ArrayList&lt;String&gt;</code>.", ar: "تحذير unchecked يعني أنك تستخدم نوعاً خاماً؛ أضف معامل النوع." },
        { type: 'h', en: 'Benefits of generics' },
        { type: 'list', items: [
          "<b>Type safety:</b> errors are reported at compile time instead of crashing at runtime.",
          "<b>No casts:</b> <code>get</code> already returns the right type.",
          "<b>Reuse:</b> one class or method works for many types."
        ], ar: "الفوائد: أمان الأنواع، عدم الحاجة إلى cast، وإعادة الاستخدام." },
        { type: 'p', en: "In <code>ArrayList&lt;E&gt;</code>, <code>E</code> is a <b>type parameter</b> (a placeholder). When you write <code>ArrayList&lt;String&gt;</code>, <code>String</code> is the <b>type argument</b> that replaces E. By convention type parameters are single capital letters: <code>T</code> (type), <code>E</code> (element), <code>K</code> (key), <code>V</code> (value)." },
        { type: 'h', en: 'Generic methods' },
        { type: 'p', en: "A method can declare its own type parameter. The declaration <code>&lt;T&gt;</code> goes <b>after the modifiers and before the return type</b>: <code>public static &lt;T&gt; void printAll(T[] items)</code>. Java infers T from the arguments at each call.", ar: "في الدالة العامة يوضع ‎&lt;T&gt;‎ قبل نوع الإرجاع مباشرة." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static <T> void printAll(T[] items) {
                  for (int i = 0; i < items.length; i++) {
                      if (i > 0) {
                          System.out.print(", ");
                      }
                      System.out.print(items[i]);
                  }
                  System.out.println();
              }

              public static <T> T lastOf(T[] items) {
                  return items[items.length - 1];
              }

              public static void main(String[] args) {
                  Integer[] marks = {90, 75, 60};
                  String[] names = {"Dana", "Yousef"};
                  printAll(marks);                          // T = Integer
                  printAll(names);                          // T = String
                  System.out.println(lastOf(names).length()); // String method, no cast
                  System.out.println(lastOf(marks) + 1);      // Integer unboxed
              }
          }
        `, out: J`
          90, 75, 60
          Dana, Yousef
          6
          61
        ` },
        { type: 'note', kind: 'exam', en: "Type arguments must be reference types. <code>printAll(new int[]{1, 2})</code> does <b>not</b> compile, because <code>int[]</code> is not a <code>T[]</code>. Use <code>Integer[]</code> instead.", ar: "لا يمكن استخدام الأنواع الأولية مثل int مع T؛ استخدم Integer." },
        { type: 'p', en: "A generic method can also take collections. The following method counts how many elements equal a target, for any element type, using <code>equals</code>." },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static <T> int countMatches(ArrayList<T> list, T target) {
                  int count = 0;
                  for (T item : list) {
                      if (item.equals(target)) {
                          count++;
                      }
                  }
                  return count;
              }

              public static void main(String[] args) {
                  ArrayList<String> votes = new ArrayList<>(Arrays.asList("yes", "no", "yes", "yes"));
                  ArrayList<Character> grades = new ArrayList<>(Arrays.asList('A', 'B', 'A'));
                  System.out.println(countMatches(votes, "yes"));
                  System.out.println(countMatches(grades, 'A'));
              }
          }
        `, out: J`
          3
          2
        ` }
      ],
      practice: [
        { t: 'mcq', q: 'Where is the type parameter declared in a generic method?', options: ['After the method name: <code>static void show&lt;T&gt;(T x)</code>', 'Before the return type: <code>static &lt;T&gt; void show(T x)</code>', 'Only in the parameter list: <code>static void show(&lt;T&gt; x)</code>', 'At the end: <code>static void show(T x) &lt;T&gt;</code>'], answer: 1, explain: "For generic methods, <code>&lt;T&gt;</code> is written after the modifiers and immediately before the return type.", explainAr: "يوضع ‎&lt;T&gt;‎ قبل نوع الإرجاع." },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.Arrays;

          public class Main {
              public static <T> void swap(T[] a, int i, int j) {
                  T tmp = a[i];
                  a[i] = a[j];
                  a[j] = tmp;
              }

              public static void main(String[] args) {
                  String[] s = {"x", "y", "z"};
                  Integer[] n = {1, 2, 3};
                  swap(s, 0, 2);
                  swap(n, 0, 1);
                  System.out.println(Arrays.toString(s));
                  System.out.println(Arrays.toString(n));
              }
          }
        `, answer: J`
          [z, y, x]
          [2, 1, 3]
        `, explain: "The same generic method swaps elements in a String array (indexes 0 and 2) and in an Integer array (indexes 0 and 1)." },
        { t: 'fill', q: 'Complete the header of a generic method that returns the first element of any array.', code: J`
          public static ___ T firstOf(T[] arr) {
              return arr[0];
          }
        `, answers: ['<T>'], explain: "The type parameter list <code>&lt;T&gt;</code> must appear before the return type <code>T</code>." },
        { t: 'mcq', q: 'What is the main danger of using a raw <code>ArrayList</code> (no type argument)?', options: ['It cannot grow', 'It only stores primitives', 'Wrong types are accepted and fail later with ClassCastException', 'It is slower to print'], answer: 2, explain: "A raw list accepts any Object, so a mistake (e.g. adding an Integer to a list of names) is only discovered when a cast fails at runtime." },
        { t: 'mcq', q: "Given <code>public static &lt;T&gt; void printAll(T[] items)</code>, which call does <b>not</b> compile?", options: ['printAll(new String[]{"a", "b"})', 'printAll(new Integer[]{1, 2})', 'printAll(new int[]{1, 2})', 'printAll(new Double[]{1.5})'], answer: 2, explain: "T can only be a reference type, and <code>int[]</code> is not an array of objects. Autoboxing does not convert a whole <code>int[]</code> into <code>Integer[]</code>." }
      ]
    },
    // ---------------------------------------------------------------- L2
    {
      title: 'Writing generic classes',
      titleAr: 'كتابة أصناف عامة',
      minutes: 45,
      body: [
        { type: 'h', en: 'A generic Box&lt;T&gt;' },
        { type: 'p', en: "A <b>generic class</b> declares type parameters after its name: <code>class Box&lt;T&gt;</code>. Inside the class, T is used like any type for fields, parameters and return values. Each time you create an object you choose what T is.", ar: "الصنف العام يعلن معامل النوع بعد اسمه، ويُحدَّد النوع الفعلي عند إنشاء الكائن." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Box<String> b1 = new Box<>("Laptop");
                  Box<Integer> b2 = new Box<>(250);
                  System.out.println(b1.get().toUpperCase());
                  System.out.println(b2.get() * 2);
                  b2.set(300);
                  System.out.println(b2);
                  // b2.set("three hundred");   // compile error: Box<Integer>
              }
          }

          class Box<T> {
              private T content;

              public Box(T content) {
                  this.content = content;
              }

              public T get() {
                  return content;
              }

              public void set(T content) {
                  this.content = content;
              }

              @Override
              public String toString() {
                  return "Box[" + content + "]";
              }
          }
        `, out: J`
          LAPTOP
          500
          Box[300]
        ` },
        { type: 'note', kind: 'tip', en: "The constructor is written <code>public Box(T content)</code>, <b>without</b> <code>&lt;T&gt;</code> after the name. The type parameter belongs to the class header only." },
        { type: 'h', en: 'More than one type parameter: Pair&lt;K, V&gt;' },
        { type: 'p', en: "Separate several type parameters with commas. A <code>Pair&lt;K, V&gt;</code> stores two values that may have different types, such as a room name and its capacity." },
        { type: 'code', run: true, code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  Pair<String, Integer> room = new Pair<>("Room", 204);
                  Pair<String, Double> price = new Pair<>("Coffee", 12.5);
                  System.out.println(room);
                  System.out.println(price.getKey() + " costs " + price.getValue());

                  ArrayList<Pair<String, Integer>> labs = new ArrayList<>();
                  labs.add(new Pair<>("Lab A", 30));
                  labs.add(new Pair<>("Lab B", 25));
                  int seats = 0;
                  for (Pair<String, Integer> p : labs) {
                      seats += p.getValue();
                  }
                  System.out.println("Total seats: " + seats);
              }
          }

          class Pair<K, V> {
              private K key;
              private V value;

              public Pair(K key, V value) {
                  this.key = key;
                  this.value = value;
              }

              public K getKey() {
                  return key;
              }

              public V getValue() {
                  return value;
              }

              @Override
              public String toString() {
                  return "(" + key + ", " + value + ")";
              }
          }
        `, out: J`
          (Room, 204)
          Coffee costs 12.5
          Total seats: 55
        ` },
        { type: 'h', en: 'A generic data structure: GenericStack&lt;E&gt;' },
        { type: 'p', en: "Generic classes shine when building data structures. This stack stores its elements in an <code>ArrayList&lt;E&gt;</code>, so it works for browser history (String), undo steps, or numbers without changing a line.", ar: "يمكن بناء هياكل بيانات عامة مثل المكدس تعمل مع أي نوع." },
        { type: 'code', run: true, code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  GenericStack<String> history = new GenericStack<>();
                  history.push("home");
                  history.push("courses");
                  history.push("cs102");
                  System.out.println(history.pop());
                  System.out.println(history.peek());
                  System.out.println(history.size());
              }
          }

          class GenericStack<E> {
              private ArrayList<E> list = new ArrayList<>();

              public void push(E item) {
                  list.add(item);
              }

              public E pop() {
                  return list.remove(list.size() - 1);
              }

              public E peek() {
                  return list.get(list.size() - 1);
              }

              public boolean isEmpty() {
                  return list.isEmpty();
              }

              public int size() {
                  return list.size();
              }
          }
        `, out: J`
          cs102
          courses
          2
        ` },
        { type: 'note', kind: 'exam', en: "Restrictions to remember: you cannot write <code>new T()</code> or <code>new T[10]</code>; you cannot use a primitive as a type argument (<code>Box&lt;int&gt;</code>); and a <code>static</code> field or method cannot use the class's type parameter T.", ar: "لا يمكن كتابة new T()‎ ولا استخدام int كمعامل نوع، ولا استخدام T في عضو static." }
      ],
      practice: [
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static void main(String[] args) {
                  Box<Integer> a = new Box<>(7);
                  Box<String> b = new Box<>("7");
                  System.out.println(a.get() + a.get());
                  System.out.println(b.get() + b.get());
                  a.set(a.get() * 3);
                  System.out.println(a.get());
              }
          }

          class Box<T> {
              private T content;
              public Box(T content) { this.content = content; }
              public T get() { return content; }
              public void set(T content) { this.content = content; }
          }
        `, answer: J`
          14
          77
          21
        `, explain: "For Box&lt;Integer&gt;, <code>get()</code> returns Integer values, so + adds: 14. For Box&lt;String&gt;, + concatenates: \"77\". Then 7 * 3 = 21 is stored.", explainAr: "مع Integer تكون + جمعاً، ومع String تكون + دمجاً للنصوص." },
        { t: 'mcq', q: 'Which line does <b>not</b> compile?', options: ['Box&lt;Double&gt; d = new Box&lt;&gt;(2.5);', 'Box&lt;int&gt; n = new Box&lt;&gt;(5);', 'Box&lt;Character&gt; c = new Box&lt;&gt;(\'x\');', 'Box&lt;Box&lt;String&gt;&gt; bb = new Box&lt;&gt;(new Box&lt;&gt;("hi"));'], answer: 1, explain: "Type arguments must be classes; <code>int</code> is primitive. Use <code>Box&lt;Integer&gt;</code>. Nesting generic types (a box of boxes) is perfectly legal." },
        { t: 'fill', q: 'Complete the generic class header and the object creation.', code: J`
          class Holder___ {
              private T item;
              public Holder(T item) { this.item = item; }
              public T getItem() { return item; }
          }

          Holder<String> h = new Holder___("pen");
        `, answers: ['<T>', '<>'], explain: "The class declares its type parameter with <code>&lt;T&gt;</code>; when creating the object the diamond <code>&lt;&gt;</code> lets Java infer String." },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  GenericStack<Integer> s = new GenericStack<>();
                  for (int i = 1; i <= 4; i++) {
                      s.push(i * 10);
                  }
                  int a = s.pop();
                  int b = s.pop();
                  System.out.println(a + " " + b);
                  System.out.println(s.peek() + " " + s.size());
              }
          }

          class GenericStack<E> {
              private ArrayList<E> list = new ArrayList<>();
              public void push(E item) { list.add(item); }
              public E pop() { return list.remove(list.size() - 1); }
              public E peek() { return list.get(list.size() - 1); }
              public int size() { return list.size(); }
          }
        `, answer: J`
          40 30
          20 2
        `, explain: "The stack holds 10, 20, 30, 40 (40 on top). Two pops return 40 then 30. The top is now 20 and two elements remain." },
        { t: 'code', q: "Complete the generic class <code>Pair&lt;K, V&gt;</code>: add a constructor, <code>toString()</code> returning <code>(key, value)</code>, and a method <code>swap()</code> that returns a new <code>Pair&lt;V, K&gt;</code> with the two parts exchanged. The program reads a name and an integer and prints the pair and its swapped version. Do not print prompts.", qAr: "أكمل الصنف العام Pair وأضف الدالة swap التي تُرجع زوجاً جديداً بعد تبديل الطرفين.", starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  String name = in.next();
                  int age = in.nextInt();
                  Pair<String, Integer> p = new Pair<>(name, age);
                  System.out.println(p);
                  System.out.println(p.swap());
              }
          }

          class Pair<K, V> {
              private K key;
              private V value;

              // constructor

              // swap(): returns Pair<V, K>

              // toString(): "(" + key + ", " + value + ")"
          }
        `, tests: [
          { stdin: 'Mona 21', expected: J`
            (Mona, 21)
            (21, Mona)
          ` },
          { stdin: 'Ali 5', expected: J`
            (Ali, 5)
            (5, Ali)
          ` }
        ], solution: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  String name = in.next();
                  int age = in.nextInt();
                  Pair<String, Integer> p = new Pair<>(name, age);
                  System.out.println(p);
                  System.out.println(p.swap());
              }
          }

          class Pair<K, V> {
              private K key;
              private V value;

              public Pair(K key, V value) {
                  this.key = key;
                  this.value = value;
              }

              public Pair<V, K> swap() {
                  return new Pair<>(value, key);
              }

              @Override
              public String toString() {
                  return "(" + key + ", " + value + ")";
              }
          }
        `, hint: "The return type of swap is <code>Pair&lt;V, K&gt;</code>; create it with <code>new Pair&lt;&gt;(value, key)</code>.", explain: "Inside the class K and V are ordinary types, so a method can build and return a Pair whose type arguments are in the opposite order." }
      ]
    },
    // ---------------------------------------------------------------- L3
    {
      title: 'Bounded types, generic interfaces and wildcards',
      titleAr: 'الأنواع المقيَّدة والواجهات العامة وأحرف البدل',
      minutes: 50,
      body: [
        { type: 'h', en: 'Bounded type parameters' },
        { type: 'p', en: "Sometimes a generic method needs to <b>compare</b> its arguments. A plain <code>T</code> could be anything, so the compiler will not let you call <code>compareTo</code> on it. A <b>bound</b> restricts T: <code>&lt;T extends Comparable&lt;T&gt;&gt;</code> means \"any type T that can be compared with another T\". Integer, Double, String and Character all qualify.", ar: "القيد extends يحدّ الأنواع المقبولة لـ T، فنستطيع استدعاء compareTo." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static <T extends Comparable<T>> T maxOf(T a, T b, T c) {
                  T best = a;
                  if (b.compareTo(best) > 0) {
                      best = b;
                  }
                  if (c.compareTo(best) > 0) {
                      best = c;
                  }
                  return best;
              }

              public static void main(String[] args) {
                  System.out.println(maxOf(4, 19, 7));
                  System.out.println(maxOf("pear", "apple", "mango"));
                  System.out.println(maxOf(2.5, 1.5, 2.25));
              }
          }
        `, out: J`
          19
          pear
          2.5
        ` },
        { type: 'note', kind: 'exam', en: "In a bound, the keyword is always <code>extends</code>, even when the bound is an interface such as Comparable. Writing <code>&lt;T implements Comparable&lt;T&gt;&gt;</code> is a syntax error.", ar: "في القيود نستخدم extends دائماً حتى مع الواجهات." },
        { type: 'h', en: 'Implementing the generic interface Comparable&lt;T&gt;' },
        { type: 'p', en: "<code>Comparable&lt;T&gt;</code> is a generic interface with one method, <code>int compareTo(T other)</code>: return a negative number if this object comes first, zero if equal, positive if it comes after. When your class implements <code>Comparable&lt;Student&gt;</code>, the parameter is already a <code>Student</code> (no cast), and tools like <code>Collections.sort</code>, <code>Collections.max</code> and your own <code>maxOf</code> accept your objects.", ar: "عند تنفيذ ‎Comparable&lt;Student&gt;‎ يصبح معامل compareTo من نوع Student مباشرة." },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Student> list = new ArrayList<>();
                  list.add(new Student("Reem", 3.6));
                  list.add(new Student("Majed", 2.9));
                  list.add(new Student("Tala", 3.9));
                  Collections.sort(list);                       // uses compareTo
                  System.out.println(list);
                  System.out.println(Collections.max(list).getName());
              }
          }

          class Student implements Comparable<Student> {
              private String name;
              private double gpa;

              public Student(String name, double gpa) {
                  this.name = name;
                  this.gpa = gpa;
              }

              public String getName() {
                  return name;
              }

              @Override
              public int compareTo(Student other) {   // parameter is Student, not Object
                  return Double.compare(this.gpa, other.gpa);
              }

              @Override
              public String toString() {
                  return name + "(" + gpa + ")";
              }
          }
        `, out: J`
          [Majed(2.9), Reem(3.6), Tala(3.9)]
          Tala
        ` },
        { type: 'h', en: 'Your own generic interface' },
        { type: 'p', en: "You can declare generic interfaces too. <code>Converter&lt;A, B&gt;</code> describes anything that turns an A into a B; each implementing class picks concrete types." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Converter<Double, Double> temp = new CelsiusToFahrenheit();
                  Converter<String, Integer> len = new WordLength();
                  System.out.println(temp.convert(25.0));
                  System.out.println(temp.convert(100.0));
                  System.out.println(len.convert("Generics"));
              }
          }

          interface Converter<A, B> {
              B convert(A input);
          }

          class CelsiusToFahrenheit implements Converter<Double, Double> {
              @Override
              public Double convert(Double c) {
                  return c * 9 / 5 + 32;
              }
          }

          class WordLength implements Converter<String, Integer> {
              @Override
              public Integer convert(String s) {
                  return s.length();
              }
          }
        `, out: J`
          77.0
          212.0
          8
        ` },
        { type: 'h', en: 'Wildcards (brief)' },
        { type: 'p', en: "Surprise: <code>ArrayList&lt;Integer&gt;</code> is <b>not</b> a subtype of <code>ArrayList&lt;Number&gt;</code>, even though Integer is a Number. To write a method that accepts a list of <i>any</i> kind of number, use the wildcard <code>?</code> with a bound.", ar: "‎ArrayList&lt;Integer&gt;‎ ليست نوعاً فرعياً من ‎ArrayList&lt;Number&gt;‎؛ نستخدم حرف البدل ? لقبول الاثنين." },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static double sumAll(ArrayList<? extends Number> list) {
                  double s = 0;
                  for (Number n : list) {
                      s += n.doubleValue();
                  }
                  return s;
              }

              public static void main(String[] args) {
                  ArrayList<Integer> ints = new ArrayList<>(Arrays.asList(1, 2, 3));
                  ArrayList<Double> prices = new ArrayList<>(Arrays.asList(1.5, 2.5));
                  System.out.println(sumAll(ints));
                  System.out.println(sumAll(prices));
              }
          }
        `, out: J`
          6.0
          4.0
        ` },
        { type: 'table', head: ['Wildcard', 'Meaning', 'Example accepts'], rows: [
          ['<code>&lt;?&gt;</code>', 'Any type (unbounded)', 'ArrayList&lt;String&gt;, ArrayList&lt;Student&gt;…'],
          ['<code>&lt;? extends Number&gt;</code>', 'Number or any subclass (upper bound)', 'ArrayList&lt;Integer&gt;, ArrayList&lt;Double&gt;'],
          ['<code>&lt;? super Integer&gt;</code>', 'Integer or any superclass (lower bound)', 'ArrayList&lt;Integer&gt;, ArrayList&lt;Number&gt;, ArrayList&lt;Object&gt;']
        ] },
        { type: 'note', kind: 'tip', en: "Rule of thumb: use <code>? extends T</code> when you only <b>read</b> elements from the collection, and <code>? super T</code> when you <b>add</b> elements to it." }
      ],
      practice: [
        { t: 'mcq', q: 'Why does <code>maxOf</code> declare <code>&lt;T extends Comparable&lt;T&gt;&gt;</code> instead of just <code>&lt;T&gt;</code>?', options: ['To make the method faster', 'So that the compiler allows calling compareTo on values of type T', 'So that primitives like int can be used', 'Because static methods require bounds'], answer: 1, explain: "With a plain T the compiler only knows the methods of Object. The bound guarantees every T has <code>compareTo</code>.", explainAr: "القيد يضمن وجود compareTo لكل نوع T." },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static <T extends Comparable<T>> T smaller(T a, T b) {
                  if (a.compareTo(b) <= 0) {
                      return a;
                  }
                  return b;
              }

              public static void main(String[] args) {
                  System.out.println(smaller(42, 17));
                  System.out.println(smaller("Zain", "Adel"));
                  System.out.println(smaller('q', 'k'));
                  System.out.println(smaller("Java", "java"));
              }
          }
        `, answer: J`
          17
          Adel
          k
          Java
        `, explain: "Numbers compare by value, strings and characters by Unicode order. Uppercase letters come before lowercase ones, so \"Java\" is smaller than \"java\"." },
        { t: 'fill', q: 'Complete the class so that products can be sorted by price.', code: J`
          class Product implements ___<Product> {
              private String name;
              private int price;
              public Product(String name, int price) { this.name = name; this.price = price; }

              @Override
              public int ___(Product other) {
                  return this.price - other.price;
              }
          }
        `, answers: ['Comparable', 'compareTo'], explain: "Implementing <code>Comparable&lt;Product&gt;</code> requires the method <code>public int compareTo(Product other)</code>." },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Item> cart = new ArrayList<>();
                  cart.add(new Item("Pen", 5));
                  cart.add(new Item("Bag", 40));
                  cart.add(new Item("Ruler", 3));
                  Collections.sort(cart);
                  for (Item it : cart) {
                      System.out.println(it.getName());
                  }
                  System.out.println(Collections.max(cart).getName());
              }
          }

          class Item implements Comparable<Item> {
              private String name;
              private int price;

              public Item(String name, int price) {
                  this.name = name;
                  this.price = price;
              }

              public String getName() {
                  return name;
              }

              @Override
              public int compareTo(Item other) {
                  return this.price - other.price;
              }
          }
        `, answer: J`
          Ruler
          Pen
          Bag
          Bag
        `, explain: "compareTo orders items by price ascending: Ruler (3), Pen (5), Bag (40). The maximum is the most expensive item, Bag." },
        { t: 'mcq', q: 'Which parameter type accepts both <code>ArrayList&lt;Integer&gt;</code> and <code>ArrayList&lt;Double&gt;</code>?', options: ['ArrayList&lt;Number&gt;', 'ArrayList&lt;Object&gt;', 'ArrayList&lt;? extends Number&gt;', 'ArrayList&lt;Integer&gt;'], answer: 2, explain: "Generic types are not covariant: an ArrayList&lt;Integer&gt; is not an ArrayList&lt;Number&gt; or ArrayList&lt;Object&gt;. The upper-bounded wildcard accepts a list of any Number subtype." }
      ]
    }
  ],
  quiz: [
    { t: 'mcq', q: 'Which is the main advantage of generics?', options: ['Programs use less memory', 'Type errors are detected at compile time and casts are not needed', 'Primitive types can be stored in collections directly', 'Methods run faster'], answer: 1, explain: "Generics move type checking to the compiler and remove explicit casts. They do not allow primitives as type arguments." },
    { t: 'mcq', q: 'Which method header is a correct generic method?', options: ['public static void &lt;T&gt; show(T x)', 'public static &lt;T&gt; void show(T x)', 'public &lt;T&gt; static void show(T x)', 'public static void show&lt;T&gt;(T x)'], answer: 1, explain: "The type parameter list comes after all modifiers (public static) and immediately before the return type (void)." },
    { t: 'output', q: 'What does this program print?', code: J`
      public class Main {
          public static <T> T middle(T[] a) {
              return a[a.length / 2];
          }

          public static void main(String[] args) {
              String[] cities = {"Abha", "Hail", "Tabuk", "Najran"};
              Integer[] years = {2019, 2021, 2023};
              System.out.println(middle(cities));
              System.out.println(middle(years) + 1);
          }
      }
    `, answer: J`
      Tabuk
      2022
    `, explain: "For 4 cities, 4 / 2 = 2 gives \"Tabuk\". For 3 years, 3 / 2 = 1 gives 2021, and 2021 + 1 = 2022 because the Integer is unboxed." },
    { t: 'mcq', q: "Inside <code>class Box&lt;T&gt;</code>, which statement is <b>illegal</b>?", options: ['private T value;', 'public T get() { return value; }', 'T copy = new T();', 'public void set(T v) { value = v; }'], answer: 2, explain: "The actual type of T is unknown at runtime (type erasure), so <code>new T()</code> is not allowed." },
    { t: 'output', q: 'What does this program print?', code: J`
      public class Main {
          public static void main(String[] args) {
              Pair<String, Integer> p = new Pair<>("Exam", 90);
              Pair<Integer, String> q = new Pair<>(p.getSecond(), p.getFirst());
              System.out.println(q.getFirst() + 10);
              System.out.println(q.getSecond().length());
          }
      }

      class Pair<A, B> {
          private A first;
          private B second;
          public Pair(A first, B second) { this.first = first; this.second = second; }
          public A getFirst() { return first; }
          public B getSecond() { return second; }
      }
    `, answer: J`
      100
      4
    `, explain: "q is (90, \"Exam\"). <code>q.getFirst()</code> is an Integer, so 90 + 10 = 100; <code>q.getSecond()</code> is the String \"Exam\" with length 4." },
    { t: 'mcq', q: 'Which declaration correctly restricts T to types that can be compared with each other?', options: ['&lt;T implements Comparable&lt;T&gt;&gt;', '&lt;T extends Comparable&lt;T&gt;&gt;', '&lt;T super Comparable&gt;', '&lt;Comparable T&gt;'], answer: 1, explain: "Bounds always use <code>extends</code>, for classes and interfaces alike." },
    { t: 'output', q: 'What does this program print?', code: J`
      import java.util.*;

      public class Main {
          public static void main(String[] args) {
              ArrayList<Runner> race = new ArrayList<>();
              race.add(new Runner("Hind", 58));
              race.add(new Runner("Saad", 51));
              race.add(new Runner("Ola", 55));
              Collections.sort(race);
              System.out.println(race.get(0).name + " " + race.get(2).name);
          }
      }

      class Runner implements Comparable<Runner> {
          String name;
          int seconds;
          Runner(String name, int seconds) { this.name = name; this.seconds = seconds; }
          public int compareTo(Runner o) { return this.seconds - o.seconds; }
      }
    `, answer: 'Saad Hind', explain: "Sorted by time ascending: Saad (51), Ola (55), Hind (58). Index 0 is Saad and index 2 is Hind." },
    { t: 'mcq', q: 'A method has the parameter <code>ArrayList&lt;Number&gt; list</code>. What happens if you pass an <code>ArrayList&lt;Integer&gt;</code>?', options: ['It works because Integer extends Number', 'Compilation error', 'ClassCastException at runtime', 'The Integers are converted to Doubles'], answer: 1, explain: "ArrayList&lt;Integer&gt; is not a subtype of ArrayList&lt;Number&gt;. Use <code>ArrayList&lt;? extends Number&gt;</code> to accept it." },
    { t: 'mcq', q: "What does the compiler say about <code>ArrayList list = new ArrayList();</code>?", options: ['Nothing; it is the recommended style', 'It is a syntax error', 'It compiles but uses a raw type and gives an unchecked warning when used', 'It creates a list of int'], answer: 2, explain: "Raw types are still legal for backward compatibility, but the compiler warns because it cannot check element types." }
  ],
  lab: {
    t: 'code',
    q: "<b>Generic toolkit.</b> Write two generic static methods:<br>• <code>&lt;T extends Comparable&lt;T&gt;&gt; T findMax(ArrayList&lt;T&gt; list)</code> — returns the largest element;<br>• <code>&lt;T&gt; int countOf(ArrayList&lt;T&gt; list, T target)</code> — counts elements equal to target (use <code>equals</code>).<br>Input: an integer <code>w</code> followed by <code>w</code> words, then an integer <code>m</code> followed by <code>m</code> integers. Print <code>Max word: </code> + the largest word, <code>Max number: </code> + the largest number, and <code>Count: </code> + how many times that largest number appears. Use the <b>same</b> methods for words and numbers. Do not print prompts.",
    qAr: "اكتب دالتين عامتين findMax و countOf واستخدمهما مع الكلمات والأعداد.",
    starter: J`
      import java.util.*;

      public class Main {
          // TODO: public static <T extends Comparable<T>> T findMax(ArrayList<T> list)

          // TODO: public static <T> int countOf(ArrayList<T> list, T target)

          public static void main(String[] args) {
              Scanner in = new Scanner(System.in);
              ArrayList<String> words = new ArrayList<>();
              ArrayList<Integer> nums = new ArrayList<>();
              int w = in.nextInt();
              for (int i = 0; i < w; i++) {
                  words.add(in.next());
              }
              int m = in.nextInt();
              for (int i = 0; i < m; i++) {
                  nums.add(in.nextInt());
              }
              // print the three lines
          }
      }
    `,
    tests: [
      { stdin: '3\nbanana apple cherry\n4\n12 45 7 45', expected: J`
        Max word: cherry
        Max number: 45
        Count: 2
      ` },
      { stdin: '1\nzebra\n3\n-5 -2 -9', expected: J`
        Max word: zebra
        Max number: -2
        Count: 1
      ` },
      { stdin: '4\nJava java JAVA jaVa\n2\n0 0', expected: J`
        Max word: java
        Max number: 0
        Count: 2
      ` }
    ],
    solution: J`
      import java.util.*;

      public class Main {
          public static <T extends Comparable<T>> T findMax(ArrayList<T> list) {
              T best = list.get(0);
              for (T item : list) {
                  if (item.compareTo(best) > 0) {
                      best = item;
                  }
              }
              return best;
          }

          public static <T> int countOf(ArrayList<T> list, T target) {
              int count = 0;
              for (T item : list) {
                  if (item.equals(target)) {
                      count++;
                  }
              }
              return count;
          }

          public static void main(String[] args) {
              Scanner in = new Scanner(System.in);
              ArrayList<String> words = new ArrayList<>();
              ArrayList<Integer> nums = new ArrayList<>();
              int w = in.nextInt();
              for (int i = 0; i < w; i++) {
                  words.add(in.next());
              }
              int m = in.nextInt();
              for (int i = 0; i < m; i++) {
                  nums.add(in.nextInt());
              }
              Integer maxNum = findMax(nums);
              System.out.println("Max word: " + findMax(words));
              System.out.println("Max number: " + maxNum);
              System.out.println("Count: " + countOf(nums, maxNum));
          }
      }
    `,
    hint: "Start <code>best</code> at <code>list.get(0)</code> and replace it whenever <code>item.compareTo(best) &gt; 0</code>. Compare objects with <code>equals</code>, not <code>==</code>.",
    explain: "Because String and Integer both implement Comparable, one bounded generic method finds the maximum of either list; countOf needs no bound since equals exists on every object."
  },
  cheats: [
    { code: J`ArrayList<String> names = new ArrayList<>();`, note: 'Type argument + diamond: compiler checks every add and get' },
    { code: J`public static <T> void printAll(T[] items) { ... }`, note: 'Generic method: &lt;T&gt; goes before the return type' },
    { code: J`class Box<T> { private T value; public T get() { return value; } }`, note: 'Generic class with one type parameter' },
    { code: J`class Pair<K, V> { ... }   new Pair<>("Room", 204)`, note: 'Several type parameters, separated by commas' },
    { code: J`public static <T extends Comparable<T>> T max(T a, T b)`, note: 'Bounded type: T must have compareTo (always "extends")' },
    { code: J`class Student implements Comparable<Student> { public int compareTo(Student o) { ... } }`, note: 'Implementing a generic interface: no casts in compareTo' },
    { code: J`interface Converter<A, B> { B convert(A input); }`, note: 'Your own generic interface' },
    { code: J`double sum(ArrayList<? extends Number> list)`, note: 'Wildcard: accepts lists of Integer, Double, ...' },
    { code: J`ArrayList raw = new ArrayList();`, note: 'Raw type: legal but unsafe, gives unchecked warning' }
  ],
  glossary: [
    { term: 'Generics', ar: 'الأنواع العامة', def: 'A Java feature that lets classes, interfaces and methods be parameterized by types.' },
    { term: 'Type parameter', ar: 'معامل النوع', def: 'A placeholder such as T or E declared in a generic class or method.' },
    { term: 'Type argument', ar: 'وسيط النوع', def: 'The actual type, such as String, that replaces a type parameter when the generic is used.' },
    { term: 'Generic method', ar: 'دالة عامة', def: 'A method that declares its own type parameters before its return type.' },
    { term: 'Generic class', ar: 'صنف عام', def: 'A class declared with type parameters, for example Box&lt;T&gt;.' },
    { term: 'Bounded type', ar: 'نوع مقيَّد', def: 'A type parameter restricted with extends, e.g. &lt;T extends Comparable&lt;T&gt;&gt;.' },
    { term: 'Raw type', ar: 'نوع خام', def: 'A generic class used without type arguments, e.g. ArrayList; unsafe and produces warnings.' },
    { term: 'Wildcard', ar: 'حرف البدل', def: 'The ? symbol in a type argument meaning an unknown type, optionally bounded with extends or super.' },
    { term: 'Diamond operator', ar: 'عامل الماسة', def: 'The empty &lt;&gt; that lets the compiler infer type arguments in a constructor call.' },
    { term: 'Type erasure', ar: 'محو الأنواع', def: 'The compiler removes generic type information after checking it, which is why new T() is not allowed.' }
  ]
});
