## 问题记录
 1. string 转数组？
    str.toCharArray

# 学习记录

## 基础

## 集合

1. 对象容器

2. Collection 体系集合

​ Iterator 迭代器

1.  List 有序，有下标,元素可以重复

    1. ArrayList

       ArrayList 是集合的一种实现，实现了接口 List，List 接口继承了 Collection 接口。

       默认容量：10（集合里有元素），扩充倍数 1.5

       特点：查询快，增删慢

    2. LinkList

       特点：增删快，查询慢

    3. Vector

       特点：线程安全，查询快，增删慢，运行效率慢

2.  set

    无序、无下标，不可重复

    1. HashSet

       //重复依据 equals,hashcode

    2. TreeSet

       //CompareTo 方法确定是否为重复元素

3.  Map

    存储任意键值对，key 无序，无下标，不重复；val 可以重复

    1. HashMap

       线程不安全，允许 null 键 null 值

       //重复依据 equals,hashcode

    2. TreeMap

       //CompareTo 方法确定是否为重复元素

## IO

1. 什么是流? 内存和存储设备之间得传输通道。

   输入流：存储设备 => 内存

   输出流： 内存 => 存储设备

   字节流：

   字符流：

   节点流：

   过滤流：

2. File 类

   文件和目录：创建，删除，目录遍历

3. 文件字节流

   FileInputstream

   FileOutputstream

​ 范例：1.简单文件复制

​

```java
@Test
void ioTest() throws IOException {
    InputStream in = new FileInputStream("D:\\chromeDownLoad\\author-img.png");
    OutputStream out = new FileOutputStream("D:\\chromeDownLoad\\img.png");
    byte[] arr = new byte[1024];
    int count =0;
    while ((count=in.read(arr))!=-1){
        out.write(arr,0,count);
    }
    in.close();
    out.close();
}
```

4. 字节缓冲流(过滤流)

   BufferedInputStream

   BufferedOutStream

5. 对象流(序列化和反序列化)

   ObjectOutputStream

   ObjectInputSteam

6. 字符编码

   ISO-8859-1

   UTF-8

   GB2312

   GBK

   BIG5

7. 字符流

   Reader

   ​ FileReader

   ​ BufferedReader

   Writer

   ​ FileWriter

   ​ BufferedWriter

8. 打印流

   PrintWriter

9. 转换流

   InputStreamReader

   OutputStreamWriter

## 枚举

​ 通过关键字 enum 来定义枚举类。枚举类是一种特殊类，它和普通类一样可以使用构造器、定义成员变量和方法，也能实现一个或多个接口,但枚举类不能继承其他类.

## 网络编程

1. 什么是网络？

   点和线构成的，对象的相互联系

2. 网络编程

   计算机和计算机建立通信

3. java.net

4. 网络流

   ```java

       URL url = new URL("https://www.hao123.com/");
       URLConnection connection = url.openConnection();
       InputStream in = connection.getInputStream();
       OutputStream out = new FileOutputStream("D:\\project\\logs\\xx.html");
       byte[] arr = new byte[1024];
       int count =0;
       while ((count=in.read(arr))!=-1){
           out.write(arr,0,count);
       }
       in.close();
       out.close();
   ```

## 操作符

1. 什么是操作符呢？

   ​ 操作符就是对数据进行的一种处理工作，一道加工程序；就好像工厂的工人对流水线上的产品进行一道加工程序一样。

2. 中间操作符

   对于数据流来说，中间操作符在执行制定处理程序后，数据流依然可以传递给下一级的操作符。

   - map(mapToInt,mapToLong,mapToDouble) 转换操作符，把比如 A->B，这里默认提供了转 int，long，double 的操作符。

   - flatmap(flatmapToInt,flatmapToLong,flatmapToDouble) 拍平操作比如把 int[]{2,3,4} 拍平 变成 2，3，4 也就是从原来的一个数据变成了 3 个数据，这里默认提供了拍平成 int,long,double 的操作符。

   - limit 限流操作，比如数据流中有 10 个 我只要出前 3 个就可以使用。

   - distint 去重操作，对重复元素去重，底层使用了 equals 方法。

   - filter 过滤操作，把不想要的数据过滤。

   - peek 挑出操作，如果想对数据进行某些操作，如：读取、编辑修改等。

   - skip 跳过操作，跳过某些元素。

   - sorted(unordered) 排序操作，对元素排序，前提是实现 Comparable 接口，当然也可以自定义比较器

3. 终止操作符

   ​ 数据经过中间加工操作，就轮到终止操作符上场了；终止操作符就是用来对数据进行收集或者消费的，数据到了终止操作这里就不会向下流动了，终止操作符只能使用一次。

   - collect 收集操作，将所有数据收集起来，这个操作非常重要，官方的提供的 Collectors 提供了非常多收集器，可以说 Stream 的核心在于 Collectors。

   - count 统计操作，统计最终的数据个数。

   - findFirst、findAny 查找操作，查找第一个、查找任何一个 返回的类型为 Optional。

   - noneMatch、allMatch、anyMatch 匹配操作，数据流中是否存在符合条件的元素 返回值为 bool 值。

   - min、max 最值操作，需要自定义比较器，返回数据流中最大最小的值。

   - reduce 规约操作，将整个数据流的值规约为一个值，count、min、max 底层就是使用 reduce。

   - forEach、forEachOrdered 遍历操作，这里就是对最终的数据进行消费了。

   - toArray 数组操作，将数据流的元素转换成数组。

## Java 并发编程

1. 进程和线程
   - 进程：程序指令和数据的运行合集。
   - 线程：一条指令，进程的子集。
2. 并行与并发

   - 并行： 单位时间多个线程同时运行（多核）
   - 并发：某段时间运行多个线程（单位时间只有一个线程在 CPU 运行)

3. 同步和异步

   - 同步：等待返回结果继续执行
   - 异步：不等待返回结果继续执行

4. Java 线程

   - 创建和运行线程

     // 创建线程

     Thread t = new Thread(){

     public void run(){

     //要执行的任务

     }}

     // 运行线程

     t.start();

     测试：

     ```java
     @Test
     void testThred(){
         new Thread(){
             public void run(){
                 System.out.println("test");
             }
         }.start();
     }
     ```

     ```java
     @Test
     void testRunable(){
         new Thread(new Runnable() {
             @Override
             public void run() {
                 System.out.println("Runnable");
             }
         }).start();
         log.debug("Runnable");
     }
     ```

   - FutureTask&Callable
   - jps 命令
   - 线程运行原理
     - 栈与栈帧
     - 线程上下文切换

### Java 学习记录

#### 注解 @interface

##### 1.元注解

元注解分别有

- @Retention  
   Retention 英文意思有保留、保持的意思，它表示注解存在阶段是保留在源码（编译期），字节码（类加载）或者运行期（JVM 中运行）。在@Retention 注解中使用枚举 RetentionPolicy 来表示注解保留时期
  @Retention(RetentionPolicy.SOURCE)，注解仅存在于源码中，在 class 字节码文件中不包含
  @Retention(RetentionPolicy.CLASS)， 默认的保留策略，注解会在 class 字节码文件中存在，但运行时无法获得
  @Retention(RetentionPolicy.RUNTIME)， 注解会在 class 字节码文件中存在，在运行时可以通过反射获取到
  如果我们是自定义注解，则通过前面分析，我们自定义注解如果只存着源码中或者字节码文件中就无法发挥作用，而在运行期间能获取到注解才能实现我们目的，所以自定义注解中肯定是使用 @Retention(RetentionPolicy.RUNTIME)

- @Target  
   Target 的英文意思是目标，这也很容易理解，使用@Target 元注解表示我们的注解作用的范围就比较具体了，可以是类，方法，方法参数变量等，同样也是通过枚举类 ElementType 表达作用类型
  @Target(ElementType.TYPE) 作用接口、类、枚举、注解
  @Target(ElementType.FIELD) 作用属性字段、枚举的常量
  @Target(ElementType.METHOD) 作用方法
  @Target(ElementType.PARAMETER) 作用方法参数
  @Target(ElementType.CONSTRUCTOR) 作用构造函数
  @Target(ElementType.LOCAL_VARIABLE)作用局部变量
  @Target(ElementType.ANNOTATION_TYPE)作用于注解（@Retention 注解中就使用该属性）
  @Target(ElementType.PACKAGE) 作用于包
  @Target(ElementType.TYPE_PARAMETER) 作用于类型泛型，即泛型方法、泛型类、泛型接口 （jdk1.8 加入）
  @Target(ElementType.TYPE_USE) 类型使用.可以用于标注任意类型除了 class （jdk1.8 加入）
  一般比较常用的是 ElementType.TYPE 类型
- @Document  
   Document 的英文意思是文档。它的作用是能够将注解中的元素包含到 Javadoc 中去。
- @Inherited  
   Inherited 的英文意思是继承，但是这个继承和我们平时理解的继承大同小异，一个被@Inherited 注解了的注解修饰了一个父类，如果他的子类没有被其他注解修饰，则它的子类也继承了父类的注解。
- @Repeatable(jdk>1.8)  
   Repeatable 的英文意思是可重复的。顾名思义说明被这个元注解修饰的注解可以同时作用一个对象多次，但是每次作用注解又可以代表不同的含义。

##### 2.注解的属性

    注解的属性其实和类中定义的变量有异曲同工之处，只是注解中的变量都是成员变量（属性），并且注解中是没有方法的，只有成员变量，变量名就是使用注解括号中对应的参数名，变量返回值注解括号中对应参数类型。

##### 3.注解的本质

    注解的本质就是一个Annotation接口

```java
    /**Annotation接口源码*/
       public interface Annotation {

           boolean equals(Object obj);

           int hashCode();

           Class<? extends Annotation> annotationType();
       }
```

##### 4.注解的类型

            1.基本数据类型
            2.String
            3.枚举类型
            4.注解类型
            5.Class类型
            6.以上类型的一维数组类型

##### 5.注解成员变量赋值

如果注解又多个属性，则可以在注解括号中用“，”号隔开分别给对应的属性赋值，如下例子，注解在父类中赋值属性

```java
@Documented
@Inherited
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface MyTestAnnotation {
    String name() default "mao";
    int age() default 18;
}

@MyTestAnnotation(name = "father",age = 50)
public class Father {
}
```

##### 6.获取注解属性

```java
/**是否存在对应 Annotation 对象*/
  public boolean isAnnotationPresent(Class<? extends Annotation> annotationClass) {
        return GenericDeclaration.super.isAnnotationPresent(annotationClass);
    }

 /**获取 Annotation 对象*/
    public <A extends Annotation> A getAnnotation(Class<A> annotationClass) {
        Objects.requireNonNull(annotationClass);

        return (A) annotationData().annotations.get(annotationClass);
    }
 /**获取所有 Annotation 对象数组*/
 public Annotation[] getAnnotations() {
        return AnnotationParser.toArray(annotationData().annotations);
    }
```

##### 7.JDK 提供的注解

| 注解              | 作用                                                                                                | 注意事项                                                                                  |
| ----------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| @Override         | 它是用来描述当前方法是一个重写的方法，在编译阶段对方法进行检查                                      | jdk1.5 中它只能描述继承中的重写，jdk1.6 中它可以描述接口实现的重写,也能描述类的继承的重写 |
| @Deprecated       | 它是用来描述当前方法是一个重写的方法，在编译阶段对方法进行检查 它是用于描述当前方法是一个过时的方法 |                                                                                           |
| @SuppressWarnings | 对程序中的警告去除                                                                                  |                                                                                           |

##### 8. 注解的作用

提供信息给编译器： 编译器可以利用注解来检测出错误或者警告信息，打印出日志。

编译阶段时的处理： 软件工具可以用来利用注解信息来自动生成代码、文档或者做其它相应的自动处理。

运行时处理： 某些注解可以在程序运行的时候接受代码的提取，自动做相应的操作。

正如官方文档的那句话所说，注解能够提供元数据

##### 9. 注解使用注意事项

- 如果注解只有一个参数，最好取名 value，这样在使用的时候可以直接指定属性值。例如：@Test("hello")
- 只能使用 public 和默认权限修饰符修饰参数
- 参数默认值：注解参数必须有确定的值。要么在定义的时候给默认值；要么在使用注解的时候指定参数值。

##### 10. 实列

```java
package com.live.zhf.learn;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
public @interface Test {

    int max() default 0;

    int min() default 0;

    String description() default "";
}


package com.live.zhf.learn;

public class AnnoationTest {
    @Test(min = 6,max = 10,description = "用户名长度在6-10个字符之间")
    private String name;

    @Test(min = 6,max =10,description = "密码长度在6-10个字符之间")
    private String passdword;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassdword() {
        return passdword;
    }

    public void setPassdword(String passdword) {
        this.passdword = passdword;
    }
}


package com.live.zhf.learn;

import java.lang.reflect.Field;

public class TestUtil {
    public static void valid(Object obj) throws IllegalAccessException {
        Class<?> clazz = obj.getClass();
        Field[] fields = clazz.getDeclaredFields();
        for (Field field:fields){
            Test test = field.getAnnotation(Test.class);//获取属性上的@Test注解
            if(test != null){
                field.setAccessible(true);//设置属性可访问

                if("class java.lang.String".equals(field.getGenericType().toString())){//字符串类型的才判断长度
                    String value = (String)field.get(obj);
                    if(value != null && ((value.length() > test.max()) || value.length() < test.min())){
                        System.out.println(test.description());
                    }
                }
            }
        }

    }
}
 @Test
    void annoationTest() {
        AnnoationTest annotation = new AnnoationTest();
        annotation.setName("abc");
        annotation.setPassdword("12345678901");
        try {
            TestUtil.valid(annotation);
        } catch (IllegalAccessException e) {

            e.printStackTrace();
        }

    }

//输出
用户名长度在6-10个字符之间
密码长度在6-10个字符之间
```

#### 反射

1. 概念

   JAVA 反射机制是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；对于任意一个对象，都能够调用它的任意一个方法和属性；这种动态获取的信息以及动态调用对象的方法的功能称为 java 语言的反射机制。
   要想解剖一个类,必须先要获取到该类的字节码文件对象。而解剖使用的就是 Class 类中的方法.所以先要获取到每一个字节码文件对应的 Class 类型的对象.
   _反射就是把 java 类中的各种成分映射成一个个的 Java 对象_

2. 通过反射获取对象

   - 方法一

     ```java
     // 方法一
     Class annoatinCalss = new AnnoationTest().getClass();
     System.out.println(annoatinCalss.getName());
     //output: com.live.zhf.learn.AnnoationTest

     ```

   - 方法二

     ```java
     // 方法二
     Class annoationClass = AnnoationTest.class;
     System.out.println(annoationClass.getName());
     //output: com.live.zhf.learn.AnnoationTest
     ```

   - 方法三

     ```java
     try {
         Class annoationClass = Class.forName("com.live.zhf.learn.AnnoationTest");
         System.out.println(annoationClass.getName());
     } catch (ClassNotFoundException e) {
         e.printStackTrace();
     }
     //output: com.live.zhf.learn.AnnoationTest
     ```

3. 通过反射获取构造器 创建对象

   ```java
         try {
               Class annoationClass = Class.forName("com.live.zhf.learn.AnnoationTest");
               //Constructor[] constructors = annoationClass.getConstructors();
               //System.out.println(constructors.length);
               Constructor constructor =     annoationClass.getConstructor(String.class,String.class);
               //System.out.println(constructor);
               //调用构造方法
               AnnoationTest test =		     (AnnoationTest)constructor.newInstance("aadddd","xxxx");
               //转JSON
               Gson gson = new Gson();
               String json = gson.toJson(test);
               System.out.println(json);
       } catch (ClassNotFoundException | NoSuchMethodException e) {
           e.printStackTrace();
       } catch (IllegalAccessException e) {
               e.printStackTrace();
           } catch (InstantiationException e) {
               e.printStackTrace();
           } catch (InvocationTargetException e) {
               e.printStackTrace();
           }
       }
   ```

4. 通过反射获取属性

   - 获取公共属性

     ```java
     Class annoationClass = Class.forName("com.live.zhf.learn.AnnoationTest");
     Field[] fields = annoationClass.getFields();
     ```

   - 获取私有属性

     ```java
     Class annoationClass = Class.forName("com.live.zhf.learn.AnnoationTest");
     Field[] fields = annoationClass.getDeclaredFields();
     ```

5. 通过反射获取方法

   ```java
   Method[] methods =annoationClass.getDeclaredMethods();
   ```

#### I/O

![](.\image\io.png)

1. 探究 common.io

   - 文件的读取

     ```java
     public static void readerFile(String path){
         File file = new File(path);
         String encoding = "UTF-8";

         // 01.把文件的所有内容放到String里,第二个参数是编码可选的..
         System.out.println("-------------把文件的所有内容读到String中---------");
         try {
             String content = FileUtils.readFileToString(file, encoding);
             System.out.println(content);
         } catch (IOException e) {
             e.printStackTrace();
         }
     }
     ```

   - 文件写入
