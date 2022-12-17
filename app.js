const container = document.getElementById("container");

for (let i = 1; i <= 905; i++) {
	let srcImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
	const newImg = document.createElement("img");
	const span = document.createElement("span");
	const containerDiv = document.createElement("div");
	containerDiv.setAttribute("id", "containerDiv");
	span.innerText = `#${i}`;
	newImg.setAttribute("src", srcImg);

	containerDiv.appendChild(newImg);
	containerDiv.appendChild(span);
	container.appendChild(containerDiv);
}

container.c;
