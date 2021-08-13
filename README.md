# 目录

[HTML基础操作](# HTML基础操作)

[CSS基础操作](# CSS基础操作)

[JavaScript](# JavaScript)

[Ajax](# Ajax)




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



### 基础语法

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

//$号的使用,代替document.getElementById()频繁使用的书写方式
var temp = $('id') //等同于var temp = document.getElementByID（'id'）
```



### 对象

类似于C++中的类

```javascript
var obj = Object() //声明对象
obj.name = 'obj_name' //对其中的变量直接赋值，不需要声明
obj.num = [1,2,3,4]
console.log(obj.num[1])
console.log(obj.test) //对于没有的属性，会打印undefined
delete obj.name //删除对象中的已经赋值的对象
```

可以通过对象创建字典

```javascript
var obj = {
  'name':'Barry Allen',
  'age':22,
  'gender':'male'
};

//如果需要枚举其中的属性
for(var temp in obj)
{
    console.log(temp, obj[temp]); //temp是key值，为string属性，通过key值可以访问obj的内容
    console.log(typeof(temp));
}
```





### 函数

```javascript
function func1(a, b)
{
    console.log(a*b);
  	for(var i=0; i<10; i+=1)
      {
        b*=2;
      }
  	if(b % 2 == 0)
      return true;
 		else
      return false
}
var num = [1,2,3,4];
var answer = func1(num[0], num[1]);
```





# Ajax

## XML标记语言

和HTML类似的标记语言，但是没有HTML的预定义标签，而是需要自行定义，用来记录数据

XML可以直接写入HTML中，AJAX异步刷新的时候，曾经采用XML字符串进行传输，后期改用JSON格式进行数据交换

```xml
<!--以下所有数据均为自定义数据-->
<student>
    <name>XML_infotest</name>
    <gender>male</gender>
    <age>18</age>
</student>
```



# VUE

## 基本规则

### 插值语法

1. Vue在JavaScript中通过对div容器的ID或者类进行标记，汇总数据，并对该数据块进行处理

   ```html
   <div id='test1'>
     <p>
       The name is {{name}}
     </p>
   </div>
   
   <script>
     //创建vue实例
     const v = new Vue({
       el: '#test1', //通过#对id进行标记。也可以使用document.getElementById()方式。如果是class，那就用.，这和css的规则一致
       data:{
         name: 'Batman',
         gender: 'male' //data里面的key不需要打单引号，否则会调用错误
       }
     })
   </script>
   ```

   一个实例只能接管一个div容器，即使el中使用了class类型的对象，vue依然只识别第一个容器，后面的容器不会被解析

   同样，如果有多个Vue实例同时对一个id的容器进行修饰，那么只有第一个vue实例能够最终影响到这个容器，后续的实例无法对这个容器进行修饰

   总的来说，容器与实例是一对一的关系

   ```html
   <div id='test1'>
     <p>
       The name is {{name}}
     </p>
   </div>
   
   <script>
     //创建vue实例
     const v1 = new Vue({
       el: '#test1', 
       data:{
         gender: 'male' 
       }
     })
     
     const v2 = new Vue({ // 这个实例无法对test1再次影响，最终结果中，test1里只能访问到gender属性，调用{{name}}属性会报错
       el: '#test1', 
       data:{
         name: 'Batman',
       }
     })
   </script>
   ```

 2. {{}}内除了数据变量名外，还可以直接写入js表达式

    ```html
    <p>
      {{name}}, {{gender}}, {{Date.now()}}
    </p>
    ```

	3. 如果一个div容器属性过多，可以采用层级的方式进行标记

    ```html
    <p>
      {{name}}
    </p>
    <p>
      {{school.name}}
    </p>
    
    <script>
     const v1 = new Vue({
        el: '#test1', 
        data:{
          name: 'batman' 
          school:{
          	name:'superman'
        	}
        }
      })
    </script>
    ```

    



### 指令语法

用于修改标签内的属性值。标准写法是在需要修改的属性前写`v-bind:`，但在vue里可以化简成一个单独的冒号

```html
<a :href=url>点击我跳转</a>
<a v-bind:href=url>点我跳转的效果和上一行一样</a>
<script>
const v1 = new Vue({
    el: '#test1', 
    data:{
      url:'http://www.baidu.com'
    }
  })
</script>
```



### 单向和双向绑定

一个输入框里的数据如果修改了，那么另一个框里的信息也能及时跟着改变，就是双向绑定。采用v-model对核心的数据进行绑定。可以绑定了多个标签，每一个标签修改的时候都会影响所有name属性

```html
单向数据绑定<input type="text" v-bind:value=name>
双向数据绑定<input type="text" v-model:value=name> 
// 双向绑定后，修改第二行的输入框里的内容，所有调用name属性的值都会同时被修改为输入框里的值；但是修改第一行输入框里的值，只有其自身的值会被修改
```

v-model只能对具有value属性的标签（基本上只有input，select标签）进行绑定，其他的标签（比如p，h1，div等）无法使用



### data属性

vue 的data属性可以有两种写法，第一种为上述的写法，第二种函数式写法如下：

```javascript
const v = new Vue({
  el:'#root',
  data: function(){
    return{
      name:'Batman'
    }
  }
});
```

这里有三个注意点：

1. 这个写法中，data作为key值，其value为一个函数,这个函数的返回值是一个字典
2. 这里的函数必须用function写法，不能用箭头函数
3. 组件中，data必须采用这种函数式写法

