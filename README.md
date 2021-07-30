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

