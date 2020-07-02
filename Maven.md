### Maven 记录
1. maven的安装


2. maven的配置

   1. pom.xml

      - dependencies 元素

        此元素包含多个项目依赖 <dependency>

      - dependency 元素

        1. groupId:组织的唯一标识
        2. artifactId: 项目的唯一标识
        3. version: 项目的版本

      - 变量的定义

        <properties></properties>

        范例：

        ```xml
        <properties>
            <mybatis.version>1.3.2</mybatis.version>
        </properties>
        
        //
         <dependency>
                    <groupId>org.mybatis.spring.boot</groupId>
                    <artifactId>mybatis-spring-boot-starter</artifactId>
                    <version>${mybatis.version}</version>
         </dependency>
        ```

      - 插件


3. maven的使用

