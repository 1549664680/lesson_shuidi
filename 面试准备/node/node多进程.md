# 开启多进程
1. 面对当进程单线程对多核使用不足的问题，我们已有的经验是启动多进程即可，理想状态下每个进程各自利用一个cpu，实现多核cpu的利用。
node则提供了child——process模块来实现进程的复制，从而开启多进程
根据 require(os).cpus.length 数量来复制出对应的node进程数
通过fork复制的进程都是一个独立的进程，拥有全新的v8实例
child_process模块提供四个方法创建子进程:
  1. spawn():启动一个子进程来执行命令
    cp.spawn('node',['worker.js'])
  2. exec(): 启动一个子进程来执行命令，与spawn不同，它有一个回调函数获取子进程的状况
    cp.exec('node worker.js',fn(){})
  3. execfile(): 启动一个子进程来执行可执行文件，也有回调函数
    cp.execfile('worker.js',fn(){})
  4. fork() :与spawn类似，不过只要指定执行的js模块即可
4种方法有些差异，不过都是spawn() 的延伸应用

2. cluster 模块
cluster模块就是child——process和net模块的组合应用r
  1. 创建 通过判断cluster.ismaster  是不是主进程还是工作进程，来创建相应的进程
  2. cluster创建时，会在内部启动tcp服务器，在cluster。fork（）子进程时，将tcp服务器端socket的文件描述符发给工作进程，如果进程是通过cluster。fork（）复制出来的，那么它的环境变量里就存在node_unique_id,如果工作进程中存在listen（）侦听网络端口的调用，它将拿到文件描述符，通过so_reuseaddr端口重用，实现多个子进程共享端口
  3. 事件 ：fork，online，listening，disconnect，exit，setup