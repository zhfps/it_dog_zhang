Liux学习：

   1.退出登录

​		logout

​		exit

   2. 关机

      shutdown -h now 立即关机

      shutdown -h 1 一分钟后关键

      shutdown -r now 立即重启

      halt  关机

      reboot 重启

​		

###### ip配置

1. ip查询： ip addr
2. centos7 默认不打开网络
   1. 编辑	

        ```shell
            vi /etc/sysconfig/network-scripts/ifcfg-ens33
        ```
        
        i:启用编辑    esc   => :wq 保存
        
   2. 重启服务
   
        ```
        service network restart
        ```
   
        