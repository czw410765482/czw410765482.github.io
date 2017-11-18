var dustObj =function()
{
	this.x= [];
	this.y= [];
	this.amp = [];
	this.NO =[];
	this.alphe;
}
dustObj.prototype.num =30;
dustObj.prototype.init = function()
{
	for(var i =0; i<this.num; i++)
	{
		this.x[i] = Math.random()*canWidth;
		this.y[i] = Math.random()*canHeight;
		this.amp[i] =Math.random() *30;
		this.NO[i] =Math.floor(Math.random()*7);
	}
	this.alphe =0;
}
dustObj.prototype.draw =function()
{
	this.alphe += deltaTime *0.001;
	var l =Math.sin(this.alphe);
	for(var i= 0; i<this.num; i++)
	{
		var no = this.NO[i];
		ctx1.drawImage(dustPic[no],this.x[i] + this.amp[i] * l,this.y[i]);
	}
}