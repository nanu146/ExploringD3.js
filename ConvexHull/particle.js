var particle={
	x:0,
	y:0,
	height:0,
	origin:{},
	// dummy constructor 
	create:function(){
		var obj;
		obj=Object.create(this);
		return obj;
	},
	setX:function(x){
		this.x=x;
	},
	setY:function(y){ 
		this.y= y
	},
	getX:function(){
		return this.x;
	},
	getY:function(){
		return this.height-this.y;
	},

	polarAngle:function(){
		
		if(!this.equals(this.origin)){
			return Math.atan2((this.y-this.origin.y),(this.x-this.origin.x));
		}
		else
		{
			return null;
		}
	},
	equals:function(obj){
		return this.x==obj.x&& this.y==obj.y? true: false;
	}
}
