class Foo{
	static classMethod(){
		return 'hello';
	}

	constructor(...args){
		this.args = args;
	}
  

}

class Bar extends Foo{
	static classMethod(){
		return super.classMethod()+',too';
	}
	constructor(){
		super();	
	}
}

console.log(Bar.classMethod());
