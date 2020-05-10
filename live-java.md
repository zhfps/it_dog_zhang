### Java学习记录
#### 注解 @interface
##### 1.元注解
元注解分别有
- @Retention  
    Retention英文意思有保留、保持的意思，它表示注解存在阶段是保留在源码（编译期），字节码（类加载）或者运行期（JVM中运行）。在@Retention注解中使用枚举RetentionPolicy来表示注解保留时期
    @Retention(RetentionPolicy.SOURCE)，注解仅存在于源码中，在class字节码文件中不包含
    @Retention(RetentionPolicy.CLASS)， 默认的保留策略，注解会在class字节码文件中存在，但运行时无法获得
    @Retention(RetentionPolicy.RUNTIME)， 注解会在class字节码文件中存在，在运行时可以通过反射获取到
    如果我们是自定义注解，则通过前面分析，我们自定义注解如果只存着源码中或者字节码文件中就无法发挥作用，而在运行期间能获取到注解才能实现我们目的，所以自定义注解中肯定是使用 @Retention(RetentionPolicy.RUNTIME)  

- @Target  
    Target的英文意思是目标，这也很容易理解，使用@Target元注解表示我们的注解作用的范围就比较具体了，可以是类，方法，方法参数变量等，同样也是通过枚举类ElementType表达作用类型
    @Target(ElementType.TYPE) 作用接口、类、枚举、注解
    @Target(ElementType.FIELD) 作用属性字段、枚举的常量
    @Target(ElementType.METHOD) 作用方法
    @Target(ElementType.PARAMETER) 作用方法参数
    @Target(ElementType.CONSTRUCTOR) 作用构造函数
    @Target(ElementType.LOCAL_VARIABLE)作用局部变量
    @Target(ElementType.ANNOTATION_TYPE)作用于注解（@Retention注解中就使用该属性）
    @Target(ElementType.PACKAGE) 作用于包
    @Target(ElementType.TYPE_PARAMETER) 作用于类型泛型，即泛型方法、泛型类、泛型接口 （jdk1.8加入）
    @Target(ElementType.TYPE_USE) 类型使用.可以用于标注任意类型除了 class （jdk1.8加入）
    一般比较常用的是ElementType.TYPE类型  
- @Document  
    Document的英文意思是文档。它的作用是能够将注解中的元素包含到 Javadoc 中去。  
- @Inherited  
    Inherited的英文意思是继承，但是这个继承和我们平时理解的继承大同小异，一个被@Inherited注解了的注解修饰了一个父类，如果他的子类没有被其他注解修饰，则它的子类也继承了父类的注解。  
- @Repeatable(jdk>1.8)  
    Repeatable的英文意思是可重复的。顾名思义说明被这个元注解修饰的注解可以同时作用一个对象多次，但是每次作用注解又可以代表不同的含义。  
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

| 注解              | 作用                                                         | 注意事项                                                     |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| @Override         | 它是用来描述当前方法是一个重写的方法，在编译阶段对方法进行检查 | jdk1.5中它只能描述继承中的重写，jdk1.6中它可以描述接口实现的重写,也能描述类的继承的重写 |
| @Deprecated       | 它是用来描述当前方法是一个重写的方法，在编译阶段对方法进行检查	它是用于描述当前方法是一个过时的方法 |                                                              |
| @SuppressWarnings | 对程序中的警告去除                                           |                                                              |

##### 8. 注解的作用

提供信息给编译器： 编译器可以利用注解来检测出错误或者警告信息，打印出日志。

编译阶段时的处理： 软件工具可以用来利用注解信息来自动生成代码、文档或者做其它相应的自动处理。

运行时处理： 某些注解可以在程序运行的时候接受代码的提取，自动做相应的操作。

正如官方文档的那句话所说，注解能够提供元数据

##### 9. 注解使用注意事项

- 如果注解只有一个参数，最好取名value，这样在使用的时候可以直接指定属性值。例如：@Test("hello")
- 只能使用public和默认权限修饰符修饰参数
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