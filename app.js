const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1661cd12demsh887855c2240e02bp1061dcjsn2cd4d24989cc',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
	.then(response => response.json())
	.then(data => {
		console.log(data)
		const list = data.d;
		list.map(item => {
			console.log(item)
			const title = item.l;
			const img = item.i.imageUrl
			const section = document.getElementById('section');
			const div = document.createElement('div');
			div.innerHTML = `
				<div class = "img">
				<img src ="${img}" alt ="${title}>
				</div>
				<div class="text">
				<h1>${title}</h1>
				<h5>${item.s}</h5>
				<p>Rank: ${item.rank}</p>
				</div>
			`
			section.appendChild(div)
		})
	})
	.catch(err => console.error(err));