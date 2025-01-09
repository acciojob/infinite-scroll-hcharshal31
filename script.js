//your code here!
orderedList = document.getElementById("infi-list");
for(let i = 1; i <= 10; i++){
	orderedList.innerHTML += `
		<li>Item${i}</li>
	`;
}


orderedList.onscroll = ()=>{
	let liCount = orderedList.children.length;
	if(orderedList.scrollTop + orderedList.clientHeight >= orderedList.scrollHeight){
		liCount++;
		orderedList.innerHTML += `
			<li>Item${liCount}</li>
			<li>Item${liCount+1}</li>
		`;
	}
	orderedList.innerHTML += `<li>Item${i}</li>`
}
