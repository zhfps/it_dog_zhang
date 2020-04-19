# Java并发编程

1. 进程和线程
   - 进程：程序指令和数据的运行合集。
   - 线程：一条指令，进程的子集。
   
2. 并行与并发

   - 并行： 单位时间多个线程同时运行（多核）
   - 并发：某段时间运行多个线程（单位时间只有一个线程在CPU运行)

3. 同步和异步

   - 同步：等待返回结果继续执行
   - 异步：不等待返回结果继续执行

4. Java线程

   - 创建和运行线程

     //  创建线程

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
   
   -  FutureTask&Callable
   - jps命令
   - 线程运行原理
     - 栈与栈帧
     - 线程上下文切换