# SpringBoot

###### @SpringBootConfiguration

​		Spring Boot 的配置类；标注在某个类上，表示这是一个Spring Boot的配置类；

​	@Configuration：配置类

###### @EnableAutoConfiguration

​		开启自动配置

###### 配置文件

1. application.properties

   @ConfigurationProperties(prefix = '')

2. application.yml

###### @PropertySource()

###### @ImportResource 

​      导入配置文件

Profile

1.   多Profile

   ```properties
   spring.profiles.active=dev
   ```

2.   profile

   application-dev.properties

   application-prod.properties

3. 配置文件加载位置

   /config/

   ./

   classpath:/config/

   classpath:/

###### 日志

​	SLFJ   Logback

1. ​    SL4j的使用

   ​     

   ```java
   import org.slf4j.Logger;
   import org.slf4j.LoggerFactory;
   
   public class HelloWorld {
     public static void main(String[] args) {
       Logger logger =           LoggerFactory.getLogger(HelloWorld.class);
       logger.info("Hello World");
     }
   }
   ```

2. ​    日志统一

3. ​     使用默认配置trace<debug<info<warn<error

   ​     logging.path =指定路径

   ​     logging.file =指定路径和文件

   ​     logging.patter.console =  格式（控制台）

   ​	 logging.patter.file = 格式 （文件）
   
4. logback.xml

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <configuration>
       <!-- 日志存放路径 -->
       <property name="log.path" value="/logs" />
       <!-- 日志输出格式 -->
       <property name="log.pattern" value="%d{HH:mm:ss.SSS} [%thread] %-5level %logger{20} - [%method,%line] - %msg%n" />
   
       <!-- 控制台输出 -->
       <appender name="console" class="ch.qos.logback.core.ConsoleAppender">
           <encoder>
               <pattern>${log.pattern}</pattern>
           </encoder>
       </appender>
   
       <!-- 系统日志输出 -->
       <appender name="file_info" class="ch.qos.logback.core.rolling.RollingFileAppender">
           <file>${log.path}/sys-info.log</file>
           <!-- 循环政策：基于时间创建日志文件 -->
           <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
               <!-- 日志文件名格式 -->
               <fileNamePattern>${log.path}/sys-info.%d{yyyy-MM-dd}.log</fileNamePattern>
               <!-- 日志最大的历史 60天 -->
               <maxHistory>60</maxHistory>
           </rollingPolicy>
           <encoder>
               <pattern>${log.pattern}</pattern>
           </encoder>
           <filter class="ch.qos.logback.classic.filter.LevelFilter">
               <!-- 过滤的级别 -->
               <level>INFO</level>
               <!-- 匹配时的操作：接收（记录） -->
               <onMatch>ACCEPT</onMatch>
               <!-- 不匹配时的操作：拒绝（不记录） -->
               <onMismatch>DENY</onMismatch>
           </filter>
       </appender>
   
       <appender name="file_error" class="ch.qos.logback.core.rolling.RollingFileAppender">
           <file>${log.path}/sys-error.log</file>
           <!-- 循环政策：基于时间创建日志文件 -->
           <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
               <!-- 日志文件名格式 -->
               <fileNamePattern>${log.path}/sys-error.%d{yyyy-MM-dd}.log</fileNamePattern>
               <!-- 日志最大的历史 60天 -->
               <maxHistory>60</maxHistory>
           </rollingPolicy>
           <encoder>
               <pattern>${log.pattern}</pattern>
           </encoder>
           <filter class="ch.qos.logback.classic.filter.LevelFilter">
               <!-- 过滤的级别 -->
               <level>ERROR</level>
               <!-- 匹配时的操作：接收（记录） -->
               <onMatch>ACCEPT</onMatch>
               <!-- 不匹配时的操作：拒绝（不记录） -->
               <onMismatch>DENY</onMismatch>
           </filter>
       </appender>
   
       <!-- 用户访问日志输出  -->
       <appender name="sys-user" class="ch.qos.logback.core.rolling.RollingFileAppender">
           <file>${log.path}/sys-user.log</file>
           <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
               <!-- 按天回滚 daily -->
               <fileNamePattern>${log.path}/sys-user.%d{yyyy-MM-dd}.log</fileNamePattern>
               <!-- 日志最大的历史 60天 -->
               <maxHistory>60</maxHistory>
           </rollingPolicy>
           <encoder>
               <pattern>${log.pattern}</pattern>
           </encoder>
       </appender>
   
       <!-- 系统模块日志级别控制  -->
       <logger name="com.live.zhf" level="info" />
       <!-- Spring日志级别控制  -->
       <logger name="org.springframework" level="warn" />
   
       <root level="info">
           <appender-ref ref="console" />
       </root>
   
       <!--系统操作日志-->
       <root level="info">
           <appender-ref ref="file_info" />
           <appender-ref ref="file_error" />
       </root>
   
       <!--系统用户操作日志-->
       <logger name="com.live.zhf" level="info">
           <appender-ref ref="sys-user"/>
       </logger>
   </configuration>
   ```

#### docker

1.  安装： yum install docker

2.  启动：systemctl start docker

3.  查看版本号：docker -v

4. 开机启动：systemctl enable docker

5. 停止： systemctl stop docker

6. 常用

   docker search

   docker pull

7. 容器操作

   docker run --name

   docker ps

   docker stop 容器id

   docker start

   docker rm

   -d  -p
   
8.  Spring Boot与数据访问

    1. jdbc

    2. druid
    
    3. mybatis
    
    4. jpa
    
###### 启动配置


​       

###### 高级

1. ​	缓存

   ​	JSR107

   ​    CachingProvide

   ​	CachManger

   ​	Cache

   ​    CacheEvit
   
   @Cacheable
   
2. 消息

   - RabbitMQ
   
3. 检索

   - ElasticSearch

4. 任务

   - 异步任务
   - 定时任务
   - 邮件任务

5. 安全

6. 端点



#### 1.项目打包发布

-  maven package
- java -jar xxx.jar

#### 2.banner

-   resource

   创建banner.txt会替换调默认banner

- 禁用

  ```java
  SpringApplication application = new SpringApplication(LiveJavaApplication.class);
  // 禁用Banner
  application.setBannerMode(Banner.Mode.OFF);
  application.run(args);
  ```

#### 3.整合MyBatis

pom：

```xml
<!-- SpringBoot集成mybatis框架 -->
<dependency>
    <groupId>org.mybatis.spring.boot</groupId>
    <artifactId>mybatis-spring-boot-starter</artifactId>
    <version>1.3.2</version>
</dependency>
<!-- Mysql驱动包 -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <scope>runtime</scope>
</dependency>
```

properties:

```properties
# 数据库配置
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://127.0.0.1:3306/yunxi?useUnicode=true&characterEncoding=utf8&useSSL=false&serverTimezone=UTC
spring.datasource.username = root
spring.datasource.password = password
#mybatis
mybatis.config-location=classpath:mybatis/mybatis-config.xml
mybatis.mapper-locations=classpath:mapper/**/*.xml
```

mybatis-config.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <settings>
        <setting name="mapUnderscoreToCamelCase" value="true"/>
    </settings>
</configuration>
```

#### 4.整合MyBatis分页

Pom:

```xml
<!-- 分页-->
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper-spring-boot-starter</artifactId>
    <version>1.2.13</version>
</dependency>
```

接口：

```java
public Result<PageInfo> getUserAll(Integer currentPage, Integer pageSize) {
    PageHelper.startPage(currentPage, pageSize);
    List<SysUser> users = this.sysUserService.queryAll();
    PageInfo pageInfo = new PageInfo(users);
    Result<PageInfo> result = this.resultBuilder.success(pageInfo, ResultCode.SUCCESS);
    return result;
}
```

#### 5.整合阿里数据数据库连接池

[参考地址](https://github.com/alibaba/druid/tree/master/druid-spring-boot-starter)

```xml
<!--数据库连接池-->
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>druid</artifactId>
    <version>1.1.21</version>
</dependency>
```
```properties
###########################application.properties#############################
# 连接数据库的相关属性
spring.datasource.url =
spring.datasource.username =
spring.datasource.password =
# 非必填可根据 url 推断
spring.datasource.driver-class-name =

# 初始化连接的数量
spring.datasource.initial-size = 
# 数据库连接的最大数量
spring.datasource.max-active = 
# 最小连接数
spring.datasource.min-idle = 
# 获取连接的最大等待时间
spring.datasource.max-wait = 
# 是否缓存预编译语句，对支持游标的数据库性能提升巨大
spring.datasource.pool-prepared-statements = 
# 最大缓存预编译语句的数量大小，当大于 0 时，pool-prepared-statements 自动触发修改为 true
spring.datasource.max-pool-prepared-statement-per-connection-size = 
# spring.datasource.max-open-prepared-statements = # 等价于上面的 max-pool-prepared-statement-per-connection-size
# 检测连接是否有效的 SQL 语句，一般为查询语句
spring.datasource.validation-query = select 1 from dual
# 检测连接是否有效语句执行超时
spring.datasource.validation-query-timeout = 
# 获取连接时检测连接是否有效
spring.datasource.test-on-borrow = 
# 返回连接时检测连接是否有效
spring.datasource.test-on-return = 
# 对空闲连接进行检测，如果空闲时间大于 time-between-eviction-runs-millis 检测连接是否有效
spring.datasource.test-while-idle = 
# 检测空闲连接是否有效的时间间隔
spring.datasource.time-between-eviction-runs-millis = 
# 连接的最小生存时间
spring.datasource.min-evictable-idle-time-millis = 
# 是否支持异步关闭连接
spring.datasource.async-close-connection-enable = 
# 配置监控统计拦截的filters，去掉后监控界面sql无法统计，'wall'用于防火墙
spring.datasource.filters = config,stat,wall,log4j
# 通过 connectProperties 属性来打开 mergeSql（sql参数化合并） 功能；慢 sql 记录以及密码加密实现
spring.datasource.connectionProperties = druid.stat.mergeSql = true;druid.stat.slowSqlMillis = 5000;config.decrypt = true;config.decrypt.key  = 

```

#### 6.整合jwt