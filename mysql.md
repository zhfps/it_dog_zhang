- DDL

  - 插入语句 insert

    ```sql
    insert into 表 (列,...) values(值,);
    //范例
    insert into sys_user (UserName, NickName, Password) values ('张三','张三','12345')
    //注意：字段和值一一对应
    
    insert into 表 set 列 = 值,...
    //范例
    insert into sys_user set UserName = '张三',NickName= '张三',Password= '1234'
    ```

  - 更新语句update

    ```sql
    update 表 set 列 = 值,... Where 筛选条件
    ```

  - 删除delete

    ```sql
    delete from 表 where 筛选条件
    
    truncate table 表
    ```

    [^p110]: 2020/12/28

    

- 查询去重(distinct)

  select distinct xx  from xx;

  例子：

    ```sql
    SELECT DISTINCT user_type FROM sys_user;
    ```

- +号的作用(运算符)

  ```sql
  select  100+90;   // 结果：190
  
  select  '1234'+89; //结果：1323
  
  select  'car'+ 11; //结果：11， 如果转换失败，字符会转换成0
  
  select null +null; //结果： null  ,一方为null，结果为null
  ```

- 字符串拼接 concat(str1,str2,...)

  案例：将用户名和用户类型拼接

  ```sql
  SELECT CONCAT(user_name,user_type) FROM sys_user;
  ```


- 条件查询(select ... from... where...)

  1. 条件表达式（<   >  =  !=  <>  >=  <=)

     ```sql
     示例1：SELECT * FROM sys_menu
     WHERE  menu_id> 100
     
     示例2：SELECT * FROM sys_menu
     WHERE  menu_id> 100 and menu_id<105
     ```

     

  2. 逻辑表达式（&& || ！   and or not）

     ```sql
     示例：SELECT * FROM sys_menu
     WHERE  parent_id = 0 and menu_id<105
     ```

     

  3. 模糊查询 

     - like(搭配通配符[%【任意多个字符】,_【任意单个字符】])

       ```sql
       示例：SELECT * FROM sys_menu
       WHERE  menu_name like '%系统%'
       ```

       

     - between and

       ```sql
       示例：SELECT * FROM sys_menu
       WHERE  menu_id BETWEEN 1 AND 105
       ```

       

     - in 

       ```sql
       示例：SELECT * FROM sys_menu
       WHERE  menu_name in ('系统管理','系统监控');
       ```

     - is null

       ```sql
       示例：SELECT * FROM sys_menu
       WHERE  component is null;
       ```

- 安全等于:<=> 可以判断null

  ```sql
  示例：SELECT * FROM sys_menu
  WHERE  component <=> null;
  ```

  

- 排序查询(支持多字段，表达式，别名，函数)

  语法

  select 查询列表 from 表  where xxx  order by 【asc|desc】

  示例：

  ```sql
  SELECT * FROM sys_menu ORDER BY menu_id DESC;
  ```

- 常见函数

  1. 单行函数

     - 字符函数

       length()

       concat(sr1,sr2,...)

       upper()

       lower()

       substr,substring

       instr

       trim

       lpad (左填充)

       rpad(右填充)

       replace

     - 数学函数

       1. round 四舍五入
       2. ceil 向上取整
       3. floor 向下取整
       4. truncate 截断
       5. mod 取余

     - 日期函数

       1. now 返回当前系统日期 时间
       2. curdate 日期
       3. curtime  时间
       4. year,month,date...
       5. str_to_date
       6. date_format

     - 其他函数

       version()

       user()

     - 流程控制函数

       1. if(表达式，真，假)

       2. case

          1语法：case 表达式

          ​			when 常量 then 表达式或语句

          2语法： case

          ​             when 条件 then 表达式或语句

  2. 分组函数（聚合函数）

     1. sum
     2. avg
     3. max
     4. min
     5. count
  
  - 算法挑战：
  
    一个数异或上0值不变
  
- 分组函数可以搭配 dinstinct

- 分组查询：

  1. 语法

     select  列 from 表

     ​            where 

      			group by

     ​             order  by

  2. 示例：

     统计菜单中不同类型的菜单数目：

     ```sql
     SELECT COUNT(menu_type) as num,menu_type FROM sys_menu
     GROUP BY menu_type
     ORDER BY num ASC;
     ```

  3. 示例：

     统计菜单中不同类型的菜单中含有"管理"的菜单数目：

     ```sql
     SELECT COUNT(menu_type) as num,menu_type FROM sys_menu
     WHERE menu_name LIKE '%管理%'
     GROUP BY menu_type
     ORDER BY num ASC;
     ```

  4. 示例 ：

     统计菜单中不同类型的菜单的菜单数目大于5：

     ```sql
     SELECT COUNT(menu_type) as num,menu_type FROM sys_menu
     WHERE menu_name LIKE '%管理%'
     GROUP BY menu_type
     HAVING num > 5;
     ```

  5. 按表达式或函数分组

     统计菜单中的菜单长度的种类：

     ```sql
     SELECT length(path) as num FROM sys_menu
     WHERE menu_name LIKE '%管理%'
     GROUP BY num;
     ```

  6. 按多个字段分组

     示例：略

  7. 支持排序

- 连接查询

  1. 笛卡尔积

     略

  2. sql92

     支持内连接

     - 等值连接

       ```sql
       SELECT sys_user.user_name,sys_role.role_name from sys_user,sys_role
       WHERE sys_user.user_id = sys_role.role_id;
       ```

     - 非等值连接

     - 自连接

       

  3. sql99

     - 语法：select 列 from 表  [连接类型]

       ​				join 表

       ​				on 连接条件

       ​				where

     - 内连接 inner

     - 外连接

       1. 左外 left
       2. 右外 right
       3. 全连接 full

     - 交叉连接 cross

- 子查询

  1. 标量子查询
  2. 列子查询
  3. 行子查询

- 分页查询 limit
  
  ```sql
  SELECT * FROM sys_menu
  LIMIT 3, 5;
  ```
  
- 联合查询union

- DML

  1. 插入语句（insert)

     insert into 表（列） values（值）;
        ```sql
     示例:INSERT INTO forum_user(id,name,password) 						VALUES('x','xia','admin');
        ```
     
     insert into 表 set 列=值
     
     ```sql
     INSERT INTO forum_user set id='y',name='y',password= 'u';
     ```
     
  2. 修改语句
  
     update 表 set 列=值  where
  
  3. 删除语句
  
     - delete from 表 where
  
     - truncate table  表  （不能回滚）
  
- DDL

  1. 库的管理

     - 创建：create database 库名；
     - 修改： rename database  库名 to 新
     - 删除：drop database

  2. 表的管理

     - 创建: create table 表 （

       列  类型 长度 约束

       ）

     - 修改：

       1. 修改列名： alter table 表  change column 列名 新 类型；
       2. 修改类型： alter table 表 modify column 列 类型；
       3. 添加列：alter table 表 add column 列 类型；
       4. 删除：alter table 表 drop column 列 类型；
       5. 修改表名： alter table 表rename to 表名;

     - 删除： drop table 表； 

     - 常见约束：not null,primary key,default,unique,check,foreign key
  
- 标识列(自增长列)

- 事务 

- 视图

  1. create view as 视图名 查询语句
  2. 修改：create or replace view 视图名；alter view 视图名
  3. 删除： drop view 视图名

- 变量

  1. 系统变量

     - 全局变量

       查看：show clobal variables; 

     - 会话变量

  2. 用户变量

     声明：

     set @变量名 = 值

     set @变量名：=

     select @变量名：=

     局部变量：

      声明：DECLEARE 变量名 类型；

- 存储过程和函数

  - 存储过程

  1.  含义：一组预先编译好的SQL语句集合，理解成批处理语句；

  2. 创建： create procedure 存储过程名（参数列表）begin  语句 end

  3. 参数模式：

     - in 输入
     - out 输出
     - inout 输入or输出

  4. 调用 call 存储名（参数）

  5. 删除：drop procedure 存储过程名

  - 函数

    1. 语法： create function 函数名 （参数） returns 返回类型

       begin
    
          语句
    
       end
    
    2. 调用： select 函数
    
    3. 查看： show create function 函数名
    
    4. 删除： drop function 函数名
  
 - 流程控制结构：
   
   1. 分支结构
   
      - if函数  if(表达式，表达式，。。。)
   
      - case
   
        1. 
   
           case 变量|表达式|字段
   
           when 值 then 返回的值或语句
   
           。。。
   
           else 
   
           end case
   
        2.  
   
           case 
   
           when 条件 then 值
   
           。。。
   
           else
   
           end case
   
    2. 循环（while,loop,repeat)
   
       

- MySQL高级

  ​            

​     

​     