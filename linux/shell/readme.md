- linux centos版本
  windows 装linux ? 虚拟机
  virtualBox 预分配空间 10几个G 启动慢
  docker 集装的航空母舰
- docker pull centos(国内镜像)
  对比 npm install
  集装箱， 拉了一个centos 操作系统，其他人可用 ubuntu
  容器， 不受其它影响， 在不同的应用端口上提供服务-
- docker images –a
  命令列出了所有的镜像
- docker stop
  命令会向运行中的容器发送一个SIGTERM的信号，然后停止所有的进程。 
- docker kill 
  命令向所有运行在容器中的进程发送了一个不友好的SIGKILL信号。 
- docker run -it image_id /bin/bash
  it 跟image 进行交互 
- docker ps –a
  命令会列出所有的容器，不管是运行的，还是停止的。 
- docker rm
  命令会移除构成容器的可读写层。注意，这个命令只能对非运行态容器执行。 
- docker commit
  命令将容器的可读写层转换为一个只读层，这样就把一个容器转换成了不可变的镜像。 
- docker run --name mysql --restart=always -p 3306:3306 -e MYSQL_ROOT_PASSWORD=1234567890 -d <镜像id>
- docker start container 之后 docker attach container 

- cd 命令  进入目录
- pwd 显示所在的物理路径
- du 得到文件大小
- shell linux脚本
  把这些命令集合起来，.js 
  demo 进入 /var pwd du
  .sh shell

demo.sh
  - centos 怎么安装软件
    yum -y install gcc automake autoconf libtool make 在linux下安装gcc等编译器
  