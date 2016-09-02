function radiansToDegrees(radians){
	return (radians*360)/(2*Math.PI);
}

function degreesToRadians(degrees){
	return (degrees/360)*2*Math.PI;
}

function triangleSignedArea(a,b,c){
	return b.x*(c.y-a.y) +a.x*(b.y-c.y)+c.x*(a.y-b.y);
}

function sortByPolarAngle(a,b)
{
	a.origin=origin;
	b.origin=origin;
	return a.polarAngle()-b.polarAngle();
}

function diagonalCreator(stack,edges,end)
{

	if(edges.length==0)
	{
		for (var i = 1; i < stack.length; i++) {
			var temp=[];
			temp.push(stack[i-1]);
			temp.push(stack[i]);
			edges.push(temp);
		}


	}
	else
	{
		for(i=1;i<stack.length;i++)
		{
			if(!edges[Math.floor(i/2)])
			{
				var temp=[];
				temp.push(stack[i-1]);
				temp.push(stack[i]);
				edges.push(temp);
			}
			else
			{
				if(stack[i-1] !=edges[Math.floor(i/2)][0] || stack[i] !=edges[Math.floor(i/2)][1])
				{
					edges.splice(Math.floor(i/2),1);
				}
			}
			
		}
	}
}