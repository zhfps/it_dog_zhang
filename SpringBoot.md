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