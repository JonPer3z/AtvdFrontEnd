document.addEventListener('DOMContentLoaded', () => {
    const URL = 'https://api.thecatapi.com/v1/breeds';
    requisicao(URL);
    const selected = document.querySelector('#selectForm');
    if (selected) selected.addEventListener('change', () => { getId(selected) })
});

function getId(selected) {
    let selectedIndex;
    if (selected) selectedIndex = selected.value;
    filter(selectedIndex);
}

async function filter(item) {
    try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${item}&limit=1`)
        if (!response.ok) throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
        const data = await response.json();
        showImage(data);

    } catch (err) {
        console.error('Erro: ', err);
    }
}

function showImage(data) {
    const div = document.querySelector('#output');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    let p = document.createElement('p');
    let img = document.createElement('img');
    img.src = data[0].url;
    img.style.maxWidth = '30%';
    div.appendChild(p);
    div.appendChild(img);
}

async function requisicao(URL) {
    try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
        const breeds = await response.json();
        breeds.forEach(race => {
            appendSelect(race);
        });
    } catch (error) {
        console.error('Erro ao buscar raças:', error);
        throw error;
    }
}

function appendSelect(r, selected = document.querySelector('#selectForm')) {
    if (!selected) return;
    let option = document.createElement('option');
    option.textContent = r.name;
    option.value = r.id;
    selected.appendChild(option)
}
