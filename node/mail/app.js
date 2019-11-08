const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service:'qq',//腾讯
    port:465,
    secureConnection:true,
    auth:{
        user:'1549664680@qq.com',
        pass:'bgcugsvnevrrijcj'
    }
})

let mailOptions = {
    from:"光棍节前的呐喊<1549664680@qq.com>",
    to:"2268849815@qq.com",
    subject:'哈哈哈',
    html:'<b>肖某，干嘛呢，课不来上课，都几节课没来了，还要不要学习了<b>'
}

transporter.sendMail(mailOptions,(error,info) => {
    if(error){
        return console.log(error);
    }
    console.log('Message send: %s', info.messageId);
})