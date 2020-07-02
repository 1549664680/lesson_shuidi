1. ## 强缓存
  不需要发送请求到服务端，直接读取浏览器本地缓存，在 Chrome 的 Network 中显示的 HTTP 状态码是 200 ，
  在 Chrome 中，强缓存又分为 Disk Cache (存放在硬盘中)和 Memory Cache (存放在内存中)，存放的位置是由浏览器控制的。
  是否强缓存由 Expires、Cache-Control 和 Pragma 3 个 Header 属性共同来控制。
  # 字段
  1. Expires
  Expires 的值是一个 HTTP 日期，在浏览器发起请求时，会根据系统时间和 Expires 的值进行比较，如果系统时间超过了 Expires 的值，缓存失效。由于和系统时间进行比较，所以当系统时间和服务器时间不一致的时候，会有缓存有效期不准的问题。Expires 的优先级在三个 Header 属性中是最低的。
  2. Cache-Control
  Cache-Control 是 HTTP/1.1 中新增的属性，在请求头和响应头中都可以使用，常用的属性值如有：
  max-age：单位是秒，缓存时间计算的方式是距离发起的时间的秒数，超过间隔的秒数缓存失效
  no-cache：不使用强缓存，需要与服务器验证缓存是否新鲜
  no-store：禁止使用缓存（包括协商缓存），每次都向服务器请求最新的资源
  private：专用于个人的缓存，中间代理、CDN 等不能缓存此响应
  public：响应可以被中间代理、CDN 等缓存
  must-revalidate：在缓存过期前可以使用，过期后必须向服务器验证
  3. Pragma
  Pragma 只有一个属性值，就是 no-cache ，效果和 Cache-Control 中的 no-cache 一致，不使用强缓存
2. ## 协商缓存
  1.  ETag/If-None-Match
  ETag/If-None-Match 的值是一串 hash 码，代表的是一个资源的标识符，当服务端的文件变化的时候，它的 hash码会随之改变，通过请求头中的 If-None-Match 和当前文件的 hash 值进行比较，如果相等则表示命中协商缓存。ETag 又有强弱校验之分，如果 hash 码是以 "W/" 开头的一串字符串，说明此时协商缓存的校验是弱校验的，只有服务器上的文件差异（根据 ETag 计算方式来决定）达到能够触发 hash 值后缀变化的时候，才会真正地请求资源，否则返回 304 并加载浏览器缓存。
  2.  Last-Modified/If-Modified-Since
  Last-Modified/If-Modified-Since 的值代表的是文件的最后修改时间，第一次请求服务端会把资源的最后修改时间放到 Last-Modified 响应头中，第二次发起请求的时候，请求头会带上上一次响应头中的 Last-Modified 的时间，并放到 If-Modified-Since 请求头属性中，服务端根据文件最后一次修改时间和 If-Modified-Since 的值进行比较，如果相等，返回 304 ，并加载浏览器缓存
  

  缓存位置
强缓存命中或者协商缓存阶段服务器换回 304 的时候，直接从缓存中获取资源
浏览器中的缓存位置一共有四种，按优先级从高到低依次为：

Service Worker
Memory Cache
Disk Cache
Push Cache
#Service Worker
Service Worker 借鉴了 Web Worker 的思路，即让 JS 运行在主线程之外，由于它脱离了浏览器的窗体，因此无法直接访问 DOM。虽然如此，但它仍然能帮助完成很多有用的功能，比如离线缓存、消息推送和网络代理等功能。其中的离线缓存就是 Service Worker Cache

#Memory Cache 和 Disk Cache
Memory Cache 指的是内存缓存，从效率上讲它是最快的。但是从存活时间来讲又是最短的，当渲染进程结束后，内存缓存也就不存在了
Disk Cache 就是存储在磁盘中的缓存，从存取效率上讲是比内存缓存慢的，但是他的优势在于存储容量和存储时长

比较大的JS、CSS文件会直接被丢进磁盘，反之丢进内存
内存使用率比较高的时候，文件优先进入磁盘
#Push Cache
即推送缓存，这是浏览器缓存的最后一道防线，是 HTTP/2 中的内容，虽然现在应用的并不广泛，但随着 HTTP/2 的推广，它的应用越来越广泛