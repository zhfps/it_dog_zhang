## 集合

1. 对象容器

2. Collection体系集合

​        Iterator迭代器

   1. List  有序，有下标,元素可以重复
      1. ArrayList
      
         ArrayList是集合的一种实现，实现了接口List，List接口继承了Collection接口。
      
         默认容量：10（集合里有元素），扩充倍数1.5
      
         特点：查询快，增删慢
      
      2. LinkList
      
         特点：增删快，查询慢
      
      3. Vector
      
         特点：线程安全，查询快，增删慢，运行效率慢
      
   2. set

      无序、无下标，不可重复

      1. HashSet

         //重复依据 equals,hashcode

      2. TreeSet

         //CompareTo 方法确定是否为重复元素

   3. Map

       存储任意键值对，key无序，无下标，不重复；val 可以重复

      1. HashMap

         线程不安全，允许null键null值

         //重复依据equals,hashcode

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

2. File类

   文件和目录：创建，删除，目录遍历

3. 文件字节流

   FileInputstream

   FileOutputstream

​        范例：1.简单文件复制

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

   ​		FileReader

   ​		BufferedReader

   Writer

   ​		FileWriter

   ​		BufferedWriter

8. 打印流

   PrintWriter

9. 转换流

   InputStreamReader

   OutputStreamWriter

## 枚举

​		通过关键字enum来定义枚举类。枚举类是一种特殊类，它和普通类一样可以使用构造器、定义成员变量和方法，也能实现一个或多个接口,但枚举类不能继承其他类.

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

   ​     操作符就是对数据进行的一种处理工作，一道加工程序；就好像工厂的工人对流水线上的产品进行一道加工程序一样。

2. 中间操作符

     对于数据流来说，中间操作符在执行制定处理程序后，数据流依然可以传递给下一级的操作符。

   - map(mapToInt,mapToLong,mapToDouble) 转换操作符，把比如A->B，这里默认提供了转int，long，double的操作符。

   - flatmap(flatmapToInt,flatmapToLong,flatmapToDouble) 拍平操作比如把 int[]{2,3,4} 拍平 变成 2，3，4 也就是从原来的一个数据变成了3个数据，这里默认提供了拍平成int,long,double的操作符。

   - limit 限流操作，比如数据流中有10个 我只要出前3个就可以使用。

   - distint 去重操作，对重复元素去重，底层使用了equals方法。

   - filter 过滤操作，把不想要的数据过滤。

   - peek 挑出操作，如果想对数据进行某些操作，如：读取、编辑修改等。

   - skip 跳过操作，跳过某些元素。

   - sorted(unordered) 排序操作，对元素排序，前提是实现Comparable接口，当然也可以自定义比较器

3. 终止操作符

   ​      数据经过中间加工操作，就轮到终止操作符上场了；终止操作符就是用来对数据进行收集或者消费的，数据到了终止操作这里就不会向下流动了，终止操作符只能使用一次。

   - collect 收集操作，将所有数据收集起来，这个操作非常重要，官方的提供的Collectors 提供了非常多收集器，可以说Stream 的核心在于Collectors。

   - count 统计操作，统计最终的数据个数。

   - findFirst、findAny 查找操作，查找第一个、查找任何一个 返回的类型为Optional。

   - noneMatch、allMatch、anyMatch 匹配操作，数据流中是否存在符合条件的元素 返回值为bool 值。

   - min、max 最值操作，需要自定义比较器，返回数据流中最大最小的值。

   - reduce 规约操作，将整个数据流的值规约为一个值，count、min、max底层就是使用reduce。

   - forEach、forEachOrdered 遍历操作，这里就是对最终的数据进行消费了。

   - toArray 数组操作，将数据流的元素转换成数组。

   
