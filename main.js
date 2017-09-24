function main()
{
	var x=document.getElementsByTagName('body')[0].textContent;
	n=x.search("Please enter second")
	var ans=0;
	if(n!==-1)
	{
		var z=x.substring(n,n+50).split(" ");
		ans=Number(z[8]);	
	}
	else
	{
		n=x.search("Please add");
		if(n!==-1)
		{
			var z=x.substring(n,n+50).split(" ");
			ans=Number(z[4])+Number(z[6]);
		}
		else
		{
			n=x.search("Please subtract");
			if(n!==-1)
			{
				var z=x.substring(n,n+50).split(" ");
				ans=Number(z[4])-Number(z[6]);
			}
			else
			{
				n=x.search("Please enter first")
				if(n!==-1)
				{
					var z=x.substring(n,n+50).split(" ");
					ans=Number(z[6]);
				}
			}
		}

	}
	
	document.getElementById('valuepkg3').value=ans;
}


main()