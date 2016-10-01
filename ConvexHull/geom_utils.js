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
		for(i=1;i<=stack.length;i++)
		{
			// Doing a search on posterior elements of the edgeholder
			if(edgeMatchFound(stack[Math.floor(i/2)],3))
			{

			}
			else
			{
				var temp=[];
				temp.push(stack[Math.floor(i/2)]);
				temp.push(stack[Math.ceil(i/2)]);
				edges.push(temp);
			}
			/*if(!edges[Math.floor(i/2)])
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
			}*/
			
		}
	}
}


function edgeMatchFound(edges,searchelement,indexer)
{
	var ret=false;
	// For anteroir and posterior element search
	if(indexer ==0 || indexer==1)
	{
		for(i=0;i<edges.length;i++)
		{
			if(edges[i][indexer]==searchelement)
			{
				ret= true;
				break;
			}
		}
	}
	//for in general element search
	else
	{
		for(i=0;i<edges.length;i++)
		{
			if(edges[i][0]==searchelement || edges[i][1]==searchelement)
			{
				ret= true;
				break;
			}
		}
	}

	return ret;
}

function removeEdgesFor(edges,searchelement)
{
	for(i=0;i<edges.length;i++){
		if(edges[i][0]==searchelement || edges[i][1]==searchelement)
		{
			edges.splice(i,1);
		}

	}
}


function edgeCreator(edges, stack, end)
{
	// setting false if no default available
	end= end|| false;
	var i=0;
	// Creating circular link of first and last element if stack reaches the end for completing the convex hull
	if(end)
	{
		temp=[];
		temp[0]=stack[stack.length-1];
		temp[1]=stack[0];

		edges.push(temp);
	}
	// Entering the normal flow
	else
	{
		// Iterate through edges length or stack length, which is more. Createing new edge for extra stack elements 
		//and removing edges for elemets not found in stack
		// reason for comparing stack.length aganst i+1 value: since there exists just one  stack element(n+1) more than edges(n) 
		while( i<edges.length || (i+1)<stack.length)
		{
			// Creates new edges if there are no edges for the values present in stack list
			//on condition failure c
			if(!edges[i])
			{
				temp=new Array();
				temp[0]=stack[Math.floor((2*i+1)/2)];
				temp[1]=stack[Math.ceil((2*i+1)/2)];
				edges.push(temp);
				i++;
			}

			else
			{
				if(edges[i][0]==stack[Math.floor((2*i+1)/2)] && edges[i][1]==stack[Math.ceil((2*i+1)/2)])
				{
					i++;
					continue;
				}
				else
				{
					edges.splice(i,1)
					i++;
				}
			}

		}
	}

}
