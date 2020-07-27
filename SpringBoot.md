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

```xml
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt</artifactId>
    <version>0.9.1</version>
</dependency>
<dependency>
    <groupId>com.auth0</groupId>
    <artifactId>java-jwt</artifactId>
    <version>3.10.2</version>
</dependency>
```

```java
package com.live.zhf.config;
import com.live.zhf.exception.SysException;
import io.jsonwebtoken.*;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import javax.naming.AuthenticationException;
import java.util.Date;

/**
 * JWT的token，区分大小写
 */
@ConfigurationProperties(prefix = "config.jwt")
@Component
public class JwtConfig {
    private String secret;
    private long expire;
    private String header;

    /**
     * 生成token
     * @param subject
     * @return
     */
    public String createToken (String subject){
        Date nowDate = new Date();
        Date expireDate = new Date(nowDate.getTime() + expire * 1000);//过期时间

        return Jwts.builder()
                .setHeaderParam("typ", "JWT")
                .setSubject(subject)
                .setIssuedAt(nowDate)
                .setExpiration(expireDate)
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }
    /**
     * 获取token中注册信息
     * @param token
     * @return
     */
    public Claims getTokenClaim (String token) throws ExpiredJwtException,UnsupportedJwtException,MalformedJwtException,SignatureException,IllegalArgumentException,SysException  {
        try {
            Claims claims = Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
            return claims;
        }catch (ExpiredJwtException e){
            throw new ExpiredJwtException(null, null, e.getMessage());
        }catch (UnsupportedJwtException e){
            throw new UnsupportedJwtException(e.getMessage());
        }catch (MalformedJwtException e){
            throw new MalformedJwtException(e.getMessage());
        }catch (SignatureException e){
           throw new SignatureException(e.getMessage());
        }catch (IllegalArgumentException e){
            throw new IllegalArgumentException(e.getMessage());
        }catch (Exception e){
            throw new SysException(e.getMessage());
        }
    }
    /**
     * 验证token是否过期失效
     * @param expirationTime
     * @return
     */
    public boolean isTokenExpired (Date expirationTime) {
        return expirationTime.before(new Date());
    }

    /**
     * 获取token失效时间
     * @param token
     * @return
     */
    public Date getExpirationDateFromToken(String token) throws ExpiredJwtException,UnsupportedJwtException,MalformedJwtException,SignatureException,IllegalArgumentException,SysException  {
        return getTokenClaim(token).getExpiration();
    }
    /**
     * 获取用户名从token中
     */
    public String getSubject(String token) throws ExpiredJwtException,UnsupportedJwtException,MalformedJwtException,SignatureException,IllegalArgumentException,SysException  {
            return getTokenClaim(token).getSubject();
    }

    /**
     * 获取jwt发布时间
     */
    public Date getIssuedAtDateFromToken(String token) throws ExpiredJwtException,UnsupportedJwtException,MalformedJwtException,SignatureException,IllegalArgumentException,SysException  {
        return getTokenClaim(token).getIssuedAt();
    }

    // --------------------- getter & setter ---------------------

    public String getSecret() {
        return secret;
    }
    public void setSecret(String secret) {
        this.secret = secret;
    }
    public long getExpire() {
        return expire;
    }
    public void setExpire(long expire) {
        this.expire = expire;
    }
    public String getHeader() {
        return header;
    }
    public void setHeader(String header) {
        this.header = header;
    }
}

```

```java
package com.live.zhf.exception;

import com.live.zhf.utils.Result;
import com.live.zhf.utils.ResultBuilder;
import com.live.zhf.utils.ResultCode;
import io.jsonwebtoken.SignatureException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.naming.AuthenticationException;

@ControllerAdvice
@ResponseBody
@Slf4j
public class ExceptionHandlers {
    @ExceptionHandler(value = { SignatureException.class })
    @ResponseBody
    public Result<String> handlerSignatureException(SignatureException e){
        log.error(e.getMessage());
        Result<String> result= ResultBuilder.error(e.getMessage(), ResultCode.PERMISSION_TOKEN_ERROE);
        return result;
    }
    @ExceptionHandler(value = { Exception.class })
    @ResponseBody
    public Result<String> handlerException(Exception e){
        System.out.println(e.getMessage());
        log.error(e.getMessage());
        Result<String> result= ResultBuilder.error(e.getMessage(), ResultCode.PERMISSION_TOKEN_ERROE);
        return result;
    }
    @ExceptionHandler(value = { AuthenticationException.class })
    @ResponseBody
    public Result<String> handlerAuthorizationException(AuthenticationException e){
        System.out.println(e.getMessage());
        log.error(e.getMessage());
        Result<String> result= ResultBuilder.error(e.getMessage(), ResultCode.PERMISSION_TOKEN_ERROE);
        return result;
    }
    @ExceptionHandler(value = { SysException.class })
    @ResponseBody
    public Result<String> handlerSysException(SysException e){
        log.error(e.getMessage());
        Result<String> result= ResultBuilder.error(e.getMessage(), ResultCode.PERMISSION_TOKEN_ERROE);
        return result;
    }
}
```

#### 7.整合security

#### 8.整合swagger

```xml
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger2</artifactId>
            <version>2.9.2</version>
        </dependency>
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger-ui</artifactId>
            <version>2.9.2</version>
        </dependency>
@Api：用于类上，说明该类的作用。可以标记一个Controller类做为swagger 文档资源
@Api(value = "xxx", description = "xxx")
     value    url的路径值
     tags    如果设置这个值、value的值会被覆盖
     description    对api资源的描述
     basePath    基本路径可以不配置
     position    如果配置多个Api 想改变显示的顺序位置
     produces    For example, "application/json, application/xml"
     consumes    For example, "application/json, application/xml"
     protocols    Possible values: http, https, ws, wss.
     authorizations    高级特性认证时配置
     hidden    配置为true 将在文档中隐藏


@ApiOperation：用于方法上，说明方法的作用，每一个url资源的定义
@ApiOperation(value = "xxx",httpMethod="POST", notes= "xxx",response=String.class)
     value    url的路径值
     tags    如果设置这个值、value的值会被覆盖
     notes    对api资源的描述
     position    如果配置多个Api 想改变显示的顺序位置
     produces    For example, "application/json, application/xml"
     consumes    For example, "application/json, application/xml"
     protocols    Possible values: http, https, ws, wss.
     authorizations    高级特性认证时配置
     hidden    配置为true 将在文档中隐藏
     response    返回的对象
     responseContainer    这些对象是有效的 "List", "Set" or "Map".，其他无效
     httpMethod    "GET", "HEAD", "POST", "PUT", "DELETE", "OPTIONS" and "PATCH"
     code    http的状态码 默认 200
     extensions    扩展属性


@ApiParam：用于方法、参数、字段上，请求属性
public ResponseEntity<User> createUser(@RequestBody @ApiParam(value = "Created user object", required = true)  User user)
     name    属性名称
     value    属性值
     defaultValue    默认属性值
     allowableValues    可以不配置
     required    是否属性必填
     access     
     allowMultiple    默认为false
     hidden    隐藏该属性
     example    示例


@ApiResponse：用于方法上，响应配置
@ApiResponse(code = 400, message = "Invalid user supplied")
     code    http的状态码
     message    描述
     response    默认响应类 Void
     reference    参考ApiOperation中配置
     responseHeaders    参考 ResponseHeader 属性配置说明
     responseContainer    参考ApiOperation中配置


@ApiResponses：用于方法上，响应集配置
 @ApiResponses({ @ApiResponse(code = 400, message = "Invalid Order") })
     value    多个ApiResponse配置


@ResponseHeader    ：用于方法上，响应头设置
@ResponseHeader(name="head1",description="response head conf")
     name    响应头名称
     description    头描述
     response    默认响应类 Void
     responseContainer    参考ApiOperation中配置


@ApiImplicitParams    用于方法上，包含一组参数说明


@ApiImplicitParam    用于方法上，用在@ApiImplicitParams注解中，指定一个请求参数的各个方面
     paramType    参数放在哪个地方
     name    参数代表的含义
     value    参数名称
     dataType    参数类型，有String/int，无用
     required     是否必要
     defaultValue    参数的默认值


@ApiModel    用于类上，描述一个Model的信息（这种一般用在post创建的时候，使用@RequestBody这样的场景，请求参数无法使用@ApiImplicitParam注解进行描述的时候


@ApiModelProperty    用于方法、字段上，描述一个model的属性


@ApiIgnore    用于类，属性，方法上，忽略某项api,使用@ApiIgnore
```

swaggerConfig:

```java
package com.live.zhf.config;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Collections;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
    @Bean
    public Docket webApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .groupName("接口文档")//1-端口所属模块
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.live.zhf"))//扫描当前package下的controller
                .apis(RequestHandlerSelectors.withClassAnnotation(Api.class))//扫描类上标有@Api的controller类
                .paths(PathSelectors.any())
                .build();
    }


    /*** 获取 API 信息 方法 ***/
    private ApiInfo apiInfo() {
        // 作者 名称 连接地址 邮箱 是 固定写法
        Contact contact = new Contact("it_dog_zhang", null, null);
        // 返回一个 构造对象
        return new ApiInfoBuilder()
                .title("live-java项目模版")
                .description("项目接口api文档")
                .contact(contact)
                .version("1.0")
                .build();
    }

}
```

示例：

```java
@ApiOperation(value = "修改菜单")
@PostMapping("updateMenu")
@ResponseBody
public Result<SysMenu> updateMenu(
        @ApiParam(name = "menu",value = "菜单",required = true)
        @RequestParam(name = "menu",required = true)
                SysMenu menu
       ) throws UpdateException {
    return sysMenuService.update(menu);
}
```

#### 9.数据校验

@Validated

bean上的注解

| 限制                      | 说明                                                         |
| :------------------------ | :----------------------------------------------------------- |
| @Null                     | 限制只能为null                                               |
| @NotNull                  | 限制必须不为null                                             |
| @AssertFalse              | 限制必须为false                                              |
| @AssertTrue               | 限制必须为true                                               |
| @DecimalMax(value)        | 限制必须为一个不大于指定值的数字                             |
| @DecimalMin(value)        | 限制必须为一个不小于指定值的数字                             |
| @Digits(integer,fraction) | 限制必须为一个小数，且整数部分的位数不能超过integer，小数部分的位数不能超过fraction |
| @Future                   | 限制必须是一个将来的日期                                     |
| @Max(value)               | 限制必须为一个不大于指定值的数字                             |
| @Min(value)               | 限制必须为一个不小于指定值的数字                             |
| @Past                     | 限制必须是一个过去的日期                                     |
| @Pattern(value)           | 限制必须符合指定的正则表达式                                 |
| @Size(max,min)            | 限制字符长度必须在min到max之间                               |
| @Past                     | 验证注解的元素值（日期类型）比当前时间早                     |
| @NotEmpty                 | 验证注解的元素值不为null且不为空（字符串长度不为0、集合大小不为0） |
| @NotBlank                 | 验证注解的元素值不为空（不为null、去除首位空格后长度为0），不同于@NotEmpty，@NotBlank只应用于字符串且在比较时会去除字符串的空格 |
| @Email                    | 验证注解的元素值是Email，也可以通过正则表达式和flag指定自定义的email格式 |

## Logback

1. 网站： http://logback.qos.ch/

