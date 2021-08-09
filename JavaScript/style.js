//基本语法
var name='hello \' world'
//console.log(name)
var num = [1,2,3,4]
var test = typeof name
//console.log(num[0], name[name.length-1], test[0])
//console.log(name + name)
var temp_a = 123;
//console.log(temp_a.toString())


//对象
console.log('下面是对象的测试');
var obj = Object();
obj.name = 'obj_name';
obj.num = [1,2,3,4];
//delete obj.name;
//console.log(obj.num[1]);
//console.log(obj);
for(var temp in obj)
{
    console.log(temp, obj[temp]);
    console.log(typeof(temp));
}

//console.log('num' in obj); //检查obj中是否存在num属性,注意num一定要以字符串的形式，否则会相当于将公共变量num这个变量的值作为字符串传入

//函数
console.log('下面是函数的测试');
function func1(a, b)
{
  	for(var i=0; i<10; i+=1)
      {
        b*=2;
      }
      console.log(a*b);
  	if(b % 2 == 0)
      return true;
 		else
      return false
}
var answer = func1(num[0], num[1]);
console.log('the function answer is ' + answer)