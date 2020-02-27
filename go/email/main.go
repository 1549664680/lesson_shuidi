package main //包
import (
	"github.com/jordan-wright/email"
	"net/smtp"
	// "log"
)
func main(){ //入口函数
	e := email.NewEmail();
	e.From = "LJR <lanjinron@qq.com>"
	e.To = []string{"1970186643@qq.com","2268849815@qq.com"}
	e.Subject = "大佬"
	e.HTML = []byte(`
	<ul>
		<li><a href="https://juejin.im/post/5e575e02f265da573b0dad5f">百度</a></li>
		<li><a href="https://juejin.im/post/5e57048b6fb9a07cc845a9ef">天猫</a></li>
	</ul>
	`) 
	// 本地并没有搭建邮件服务器  由腾讯服务器转发
	e.AttachFile("main.go") // 附件
	e.Text = []byte("大佬啊")
	e.Send("smtp.qq.com:25",smtp.PlainAuth("","1549664680@qq.com","jblyawcwtrudjaid","smtp.qq.com"))
	// if err != nil {
	// 	log.Fatal(err)
	// }

}