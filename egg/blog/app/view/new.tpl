<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="https://cdn.bootcss.com/twitter-bootstrap/3.4.1/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
    <h1>Blog New</h1>
    <form action="/posts" method="post" id="article-form">
        <div class="form-group">
            <label for="titleInput">标题</label>
            <input type="text" class="form-control" id="titleInput" placeholder="请输入标题" name="title">
        </div>
        <div class="form-group">
            <label for="contentInput">内容</label>
            <input type="text" class="form-control" id="contentInput" placeholder="请输入内容" name="body">
        </div>
        <input type="submit" class="btn-default" value="Submit">
    </form>   
    </div>

</body>
</html>