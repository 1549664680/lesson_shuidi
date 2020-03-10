package main //包
import (
	"github.com/jordan-wright/email"
	"net/smtp"
	// "log"
)
func main(){ //入口函数
	e := email.NewEmail();
	e.From = "LJR <lanjinron@qq.com>"
	e.To = []string{"1269928993@qq.com","1939108122@qq.com"}
	e.Subject = "挺好"
	e.HTML = []byte(`
	<ul>
		<li><a href="https://juejin.im/post/5e575e02f265da573b0dad5f">百度</a></li>
		<li><a href="https://juejin.im/post/5e57048b6fb9a07cc845a9ef">天猫</a></li>
	</ul>
	`) 
	// 本地并没有搭建邮件服务器  由腾讯服务器转发
	e.AttachFile("3c6234a85edf8db1af2184590723dd54564e7486.jpg") // 附件
	e.Text = []byte("没事写写代码，追上大佬的脚步")
	e.Send("smtp.qq.com:25",smtp.PlainAuth("","1549664680@qq.com","jblyawcwtrudjaid","smtp.qq.com"))
	// if err != nil {
	// 	log.Fatal(err)
	// }

}