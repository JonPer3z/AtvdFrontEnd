fetch('https://dummyjson.com/products')

    .then((response) => {

        if (response.ok) {

            return response.json();

        } else {

            throw new Error(`Erro HTTP! Status: ${response.status}`);

        }

    })

    .then(dados => {
        dados.products.forEach(element => {
            console.log(element.title)
        });


    })

    .catch(erro => console.error('Erro:', erro.message)); 