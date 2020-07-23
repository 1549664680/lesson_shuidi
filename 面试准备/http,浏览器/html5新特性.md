（一）  语义标签
<article><aside><footer><header><nav><section><time>
（二）增强型表单
<input type="text" autofocus="autofocus" required pattern="\d+" name="auto" placeholder="必填项测试" />
<input type="number" name="demoNumber" min="1" max="100" step="2" />
<input type="email" placeholder="请输入邮箱" name="mail" />
<input type="url" name="url" placeholder="输入正确的网址" />
<input type="tel" placeholder="输入电话" name="phone"/>
<input type="date" name="time" />
<input type="color" name="color" /><br />
<input type="range" min="0" max="50" step="5" name="range" value="25" />
 <!-- output配合from的oninput属性oninput="output.value=parseInt(range.value)" -->
<output name="output" >25</output>
（三）视频和音频
<video><audio>
（四）Canvas绘图
<canvas> 元素用于图形的绘制，通过脚本 (通常是JavaScript)来完成.
（五）SVG绘图
（六）地理定位
navigator.geolocation.getCurrentPosition(shows)
function shows(position){
  console.log(position.coords.latitude)
}
（七）拖放API
（八） WebWorker
（九） WebStorage
（十）WebSocket