# 算法刷题

1. 两数之和

//给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。 
//
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。 
//
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。 
//
// 示例： 
//
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
//输出：7 -> 0 -> 8
//原因：342 + 465 = 807
// 
// Related Topics 链表 数学


```java
class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; }
}
public class Solution2 {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        //定义满十进一的数
        int num = 0;
        //定义一个ListNode，作为链表头
        ListNode proNode = new ListNode(0);
        //定义一个ListNode，接受两数的和
        ListNode currentNode = new ListNode(0);
        //先连接两个Node
        proNode.next=currentNode;

        do {
            //两数相加
            int sum = (l1!=null?l1.val:0) + (l2!=null?l2.val:0) + num;
            //是否满十
            num = sum/10;
            //得出个位数
            int result = sum%10;
            //填入结果
            currentNode.val = result;
            l1 = l1!=null?l1.next:l1;
            l2 = l2!=null?l2.next:l2;
            if(l1!=null || l2!=null || num!=0) {
                currentNode.next = new ListNode(0);
                currentNode = currentNode.next;
            }
        }while(l1!=null || l2!=null || num!=0);
        return proNode.next;
    }
}
```
2. 设计一个算法，计算出n阶乘中尾部零的个数

```
样例  1:
	输入: 11
	输出: 2
	
	样例解释: 
	11! = 39916800, 结尾的0有2个。

样例 2:
	输入:  5
	输出: 1
	
	样例解释: 
	5! = 120， 结尾的0有1个。
```

O(logN)的时间复杂度

```java
public class Solution {
    /*
     * @param n: An integer
          * @return: An integer, denote the number of trailing zeros in n!
          */
        public long trailingZeros(long n) {
        // write your code here, try to do it without arithmetic operators.
        long  num = 0;
        while(n>1)    
        {
            num += n/5;  
            n = n/5;
        }
        return num;

}

}
```

3. 加法 两数之和

```java
public class Solution {
    /**
     * @param a: An integer
     * @param b: An integer
     * @return: The sum of a and b 
     */
    public int aplusb(int a, int b) {
        // write your code here
        int res=0;
		int xor=a^b;//得到原位和
		int forworad=(a&b)<<1;//得到进位和
		return forworad==0?xor:aplusb(xor,forworad);
    }
}
```
4. 合并两个有序升序的整数数组A和B变成一个新的数组。新数组也要有序。

 从头开始比较两个数列中的数，哪一个小就取出依次存入新的数组中，直到其中一个全部比较完，将另一个数组剩下的部分直接存入新的数组中。

```java
public class Solution {
    
    public int[] mergeSortedArray(int[] A, int[] B) {
       
        int i=0,j=0,k=0;
        int[] arr = new int[A.length+B.length];

        while(i<A.length&&j<B.length){
            if(A[i]<B[j])
                arr[k]= A[i++];
            else
                arr[k]= B[j++];
            k++;
        }
        while(i<A.length){
            arr[k]= A[i++];
            k++;
        }
        while(j<B.length){
            arr[k]= B[j++];
            k++;
        }
        return arr;
    }
}
```

5. 给定一个字符串（以字符数组的形式给出）和一个偏移量，根据偏移量原地旋转字符串(从左向右旋转)。

```java
public class Solution {
    /**
     * @param str: An array of char
     * @param offset: An integer
     * @return: nothing
     */
    public void rotateString(char[] str, int offset) {
        // write your code here
         if(str.length == 0 || offset == 0){
            return;
        } 
        offset = offset%str.length;//实际偏移量
        for(int i = 0;i<offset; i++){
            char temp = str[str.length-1];
            for(int j = str.length-1;j>0;j--){
                str[j] = str[j-1];
            }
            str[0] = temp;
        }
    }
}
```
6. 反转一个只有3位数的整数。

    样例
    样例 1:

    输入: number = 123
    输出: 321
    样例 2:

    输入: number = 900
    输出: 9
    注意事项
    你可以假设输入一定是一个只有三位数的整数，这个整数大于等于100，小于1000。
    ```java
    public class Solution {
    /**
     * @param number: A 3-digit number.
     * @return: Reversed number.
     */
    public int reverseInteger(int number) {
        // write your code here
            if(number == 100){
                return 1;
            }else{
                return number/100 + number%100/10*10 + number%100%10*100;
            }
        
         }
        }
    ```
7. 给你一个整数n. 从 1 到 n 按照下面的规则打印每个数：
    * 如果这个数被3整除，打印fizz.
    * 如果这个数被5整除，打印buzz.
    * 如果这个数能同时被3和5整除，打印fizz buzz.
    * 如果这个数既不能被 3 整除也不能被 5 整除，打印数字本身。
    ```java
            public class Solution {
            /**
            * @param n: An integer
            * @return: A list of strings.
            */
            public List<String> fizzBuzz(int n) {
                // write your code here
                List<String> result = new ArrayList<String>();

                for (int i=1; i<=n ; i++ ) {
                    if(i<3){
                        result.add(String.valueOf(i));
                    }
                    else if(i%3 ==0 && i%5 == 0){
                        result.add("fizz buzz");
                    }else if(i%3 == 0){
                        result.add("fizz");
                    }else if(i%5 == 0){
                        result.add("buzz");
                    }else{
                        result.add(String.valueOf(i));
                    }
                }
                
                return  result;
            }
        }
    ```
8. 比较两个字符串A和B，确定A中是否包含B中所有的字符。字符串A和B中的字符都是 大写字母
样例
给出 A = "ABCD" B = "ACD"，返回 true
给出 A = "ABCD" B = "AABC"， 返回 false
注意事项
在 A 中出现的 B 字符串里的字符不需要连续或者有序。
    ```java
        public class Solution {
            /**
            * @param A: A string
            * @param B: A string
            * @return: if string A contains all of the characters in B return true else return false
            */
            public boolean compareStrings(String A, String B) {
                // write your code here
                if(A.length()<B.length()){
                    return  false;
                }else {
                    char[] arr = A.toCharArray();
                    char[] brr = B.toCharArray();
                    int[] crr = new int[26];
                    int al = arr.length;
                    int bl = brr.length;
                    for (int i = 0; i < arr.length; i++) {
                        int asc = (int)arr[i];
                        crr[asc-65] +=1;
                        if(i<bl){
                            int bsc =(int)brr[i];
                            crr[bsc-65] -=1;
                        }
                    }
                    boolean check = true;
                    for (int i = 0; i <26 ; i++) {
                        if(crr[i]<0){
                            check = false;
                        }
                    }

                    return  check;
                }
            }
        }
    ```
9. 子串查找 
    对于一个给定的 source 字符串和一个 target 字符串，你应该在 source 字符串中找出 target 字符串出现的第一个位置(从0开始)。如果不存在，则返回 -1。
    ```java
        public class Solution {
        /**
        * @param source: 
        * @param target: 
        * @return: return the index
        */
        public int strStr(String source, String target) {
            
                    char[] arr = source.toCharArray();
                    char[] brr = target.toCharArray();
                    int al = arr.length;
                    int bl = brr.length;
                    int i = 0;
                    int j = 0;
                    while(i<al&&j<bl){
                        if(arr[i] == brr[j]){
                            i++;
                            j++;
                        }else {
                            i=i-j+1;
                            j=0;
                        }
        
                    }
                    if(j==bl){
                        return  i-j;
                    }else {
                        return -1;
                    }
            
        }
    }
    ```

### 书籍阅读

###### 《漫画算法》

1. 什么是算法？

   - 通俗：解决某一类问题的思想或公式；
   - 计算机：用于解决一系列特定运算和逻辑的程序指令集。

2. 什么是数据结构？

   数据的组织，管理和存储格式。
   
3. 数组

   有限个相同类型的变量所组成的有序集合。

4. 链表

   在物理上非连续、非顺序的数据结构，由若干节 点（node）所组成。

5. 散列表

   散列表也叫作哈希表（hash table），这种数据结构提供了键（Key）和值 （Value）的映射关系。只要给出一个Key，就可以高效查找到它所匹配的Value，时 间复杂度接近于O(1)。

6. 树

   

   