package main
import (
	"github.com/gin-gonic/gin"
	"fmt"
)
func main() {
	// map hashmap  数据结构 es6 map set
	// js es5 json object
	// var countryCapitalmap map[string]string     // 变量声明 还未分配空间
	// countryCapitalmap = make(map[string]string) // 分配空间
	// countryCapitalmap["France"] = "巴黎"
	// countryCapitalmap["Italy"] = "罗马"
	// countryCapitalmap["Japan"] = "京东"
	// countryCapitalmap["India"] = "新德里"

	// 遍历
	// range 区间
//  for country := range countryCapitalmap{
// 	 fmt.Println(country,"首都是",countryCapitalmap[country])
//  }
	engine := gin.Default() //const app =express
	engine.GET('/',func(context *gin.Context)){
		//context koa 里的ctx express req + res 
		// int -> ? 
		context.String(200,"hello gin get method")
	}
	engine.Run() //node listen 
}
