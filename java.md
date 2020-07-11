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

