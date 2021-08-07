# 目录

[CS基础操作](# CSS基础操作)

```
[内部样式](# 内部样式)
```


# HTML基础操作

## 实体

相当于其他语言的转义符号，用于表示空格、大小于号等

```html
&nbsp : 表示空格
&gt : 表示大于号
&lt : 表示小于号
&copy : 表示版权符号
<!--
使用效果如下：如果要在两个字之间插入多个空格：
-->
<p>
    测   试
</p>
```



## 块元素

对页面进行分块，实现头部，侧边栏，底栏和版块的效果

```html
<header>
    <p>测&copy;&copy;&copy;试</p>
</header>
<main>
    <p>这是中间版块</p>
</main>
<footer>
    <p>这是底部版块</p>
</footer>
<nav>
    这是导航版块
</nav>
<aside>
    这是侧边版块
</aside>
```



## 内联网页

在网页中直接调用一个现成的网页

```html
<iframe src='https://www.bilibili.com' width="100%" height="500px" frameborder="0"></iframe>
```

注意：src必须写成http的形式



## 音频视频文件

```html
<audio src='' controls></audio>
<video src='' controls></video>
```

音视频文件如果不在标签内加`controls`，则网页不显示控制条，用户无法控制音频





# CSS基础操作

## 内部样式

将标签的格式写入到 `<style>`里，直接修改标签的属性

```html
<style>
    p{
        color: green;
        font-size:50px;
    }
</style>
```

此时所有的 `<p>`都默认为该配置。

内部样式表只能对本页面内使用，无法跨页面起作用。



### 简单选择器

上述写法的效果对所有的p标签均起作用，如果想针对某类标签起作用，可以采用<font color = red>选择器</font>的方式如下：

```html
<style>
    /*
    第一种选择器：针对某个id的标签进行修改。该方式可以同时修改所有id相同的标签。但是严格来说，一个ID只能用于一个标签（1对1），不应该一个ID对应多个标签。标记方式是css中用#开头
    */
    #id1{
        font-size: large;
        color: darkslategrey;
        position:relative;
        font-family: 'Courier New', Courier, monospace;
    }
    
    /*
    第二种是class属性：可以批量作用于标签，标记方式是开头用.。除此之外注意，一个标签可以同时继承多个类属性且可以同时具备所有类的功能，类名之间只需要用空格隔开即可
    */
    .class1{
    color: gold;
    font-weight: bolder ;
    float: right;
    width:25%;
    background-color: lemonchiffon;
    height:max-content;
	}
    
</style>
<aside class='class1 class2'></aside>
```





### 复合选择器

如果需要设定的CSS类有多个限定条件，则简单选择器就难以使用，需要使用符合选择器。

```html
<style>
/*
  假如需要对class为red的div标签里所有文字颜色进行修改
  */
  div.red{
    color: red;
   }
  
/*假如需要对同时为a b c三个类的标签进行修改*/
  .a.b.c{
    color:red;

 /*如果需要同时对span标签和p标签进行修改*/
    span, p{
      color:red;
    }
  }
</style>
<div class='red'>测试</div>
<p class='red'>测试</p>
<p class='a b c'>测试</p>
```





### 关系选择器

针对嵌套标签，使用`>`来实现嵌套

```html
<style>
	/*为div包含的span元素设置条件*/
  div > span {
    color:red;
  }
  /*为div包含的p中的div元素设置条件*/
  div > p > div{
    color:red;
  }
  /*为class是box的div标签里的span设置条件*/
  div.box > span{
    color:orange;
  }
</style>

<div>
  测试代码span_1
  <p>
    测试代码p
    <div>
			测试代码div
    </div>
  </p>
	<span>测试代码span_2</span>
</div>

<div class='box'>
  <span>
  测试box类下的span标签
  </span>
</div>
```





### 属性选择器

针对标签中带有不同属性的情况，依据属性去修改标签内容。方式是采用`[]`进行标记

```html
<style>
/*修改带有title属性的p标签*/
p[title]{
  color : orange;
}
/*修改带有title且title属性值为abc的p标签*/
p[title=abc]{
  color : orange;
}
/*修改带有title且title属性值不为abc的p标签*/
p[title^=abc]{
  color : orange;
}
</style>

<p title='abc'></p>
<p title='def'></p>
<p title='mno'></p>
<p></p>
```



### 伪类

伪类用于描述一类特殊的元素：比如被鼠标选中的元素，标签内第一个子标签，被点击的元素。

通常伪类处理的都是一些动态的元素信息，这些信息难以通过静态的class标记去区分，而是依赖于页面的实时渲染结果或者用户的操作结果

伪类的处理方式是通过`:`标记

```html
<style>
/*标记ul标签里的li子标签中，第一个li子标签*/
  ul > li:first-child{
    color: red;
  }
/*或者用nth写法。这种写法的括号中如果写n，则表示应用于全部子标签；如果写2n或者even，则表示应用于全部偶数标签；写2n+1或者odd表示奇数*/
  ul > li:nth-child(1){
    color : red;
  }
  
  /*伪类中取反操作通过:not实现。下面通过取反操作对ul中奇数行标签改变颜色*/
  ul > li:not(:nth-child(2n)){
     color: darkseagreen;
  }
</style>
```



#### 超链接的伪类

超链接在点击过一次后，颜色会改变。为了改变这种默认的配置，可以通过伪类的方式进行修改。

```html
<style>
  /*
  link伪类标记点击过的连接，而visited标记未点击过的连接。其中visited的伪类只能修改颜色属性.这样一来，不管是否点击过，连接的样式都不会发生改变
  */
a:link, a:visited{
    color: red;
}
  /*
  如果要修改鼠标悬停在连接上是，连接的颜色，可以通过hover属性修改
  */
  a:hover{
    color: cadetblue;
  }
</style>
```



### 伪元素

和伪类差不多，可以修改一类特殊的内容（如段落首字母大写,首行内容或者鼠标拖动选中的内容）。伪元素需要用双冒号

```css
p::first-line{
    background-color: black;
}
p::first-letter{
    font-size : 50px
  }
```



## 外部样式

解决了内部样式无法跨页面使用的缺陷。可以采用新建一个后缀名为`.css`的文件，调用该文件的方式实现

```html
# 下面的内容来自style.css
  p{
    font-size: 50px;
    color:bisque;
	}	

# 下面的内容来自最终编写的html：
<link rel='stylesheet' href='./style.css'> //rel
表示外接css的模式
```





# JavaScript

Js最重要的事项：

<font color = red>如果`<script>`标签中采用src引入了外部的js文件，那么这个script标签中就不能再编写其他的操作。但可以重新创建一个新的script标签去编写</font>

```html
<script src='./style.js'></script> <!--这个标签里，引入了外部的js文件，那么这个script标签对中就无法编写新的规则-->

<script>
  alert('Here is the new tab');
</script>
<!--可以重新启用一个新的script标签编写这个HTML文件的新的操作-->
```



## 基本语法

1. JS严格区分大小写， 但HTML不区分大小写
2. JS语句需要以分号作为结尾。浏览器有时候会自动补全分号，但是可能会出错
3. 浏览器会忽视JS的空格和换行



### 语法

```javascript
//声明用var
var a;
a=1;

//字符串和数组
var str = '123';
var num = [1,2,3,4]
var str2 = '456'
console.log(num[0], name[name.length-1])
console.log(str + str2) // 字符串拼接

//变量类型检查,检查的结果以string类型返回
var test = typeof a; //此时test的值为'string'
console.log(test[1]);//返回值为't'

//强制类型转换
var a=123
console.log(a.toString())
