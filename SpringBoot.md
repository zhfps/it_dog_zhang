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