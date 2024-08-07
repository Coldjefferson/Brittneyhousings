const properties = [
	{
		id: 1,
		title: "Property 1",
		image: "(link unavailable)",
		price: "$500,000",
		bedrooms: 3,
		bathrooms: 2,
		squareFeet: 1500
	},
	{
		id: 2,
		title: "Property 2",
		image: "(link unavailable)",
		price: "$750,000",
		bedrooms: 4,
		bathrooms: 3,
		squareFeet: 2000
	}
];

const propertyList = document.querySelector(".property-list");
properties.forEach((property) => {
	const card = document.createElement("div");
	card.classList.add("property-card");
	card.innerHTML = `
		<h3>${property.title}</h3>
		<img src="${property.image}" alt="${property.title}">
		<p>Price: ${property.price}</p>
		<p>Bedrooms: ${property.bedrooms}</p>
		<p>Bathrooms: ${property.bathrooms}</p>
		<p>Square Feet: ${property.squareFeet}</p>
	`;
	propertyList.appendChild(card);
});
```