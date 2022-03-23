const data = [
    {
        titulo: 'Far Cry 5',
        descricao: 'Jogo de tiro (FPS)',
        img: './e-commerce.img/farcry5.jpg',
        tag: ['Xbox'],
        preco: 'R$90,00',
        botao: 'Adicionar ao Carrinho'
    },
    {
        titulo: 'Fifa 22',
        descricao: 'Jogo de Futebol',
        img: './e-commerce.img/fifa22.jpg',
        tag: ['PC', 'Xbox'],
        preco: 'R$70,00',
        botao: 'Adicionar ao Carrinho'
    },
    {
        titulo: 'Forza Horizon 5',
        descricao: 'Jogo de Corrida',
        img: './e-commerce.img/Forza-Horizon-5.jpg',
        tag: ['Xbox'],
        preco: 'R$60,00',
        botao: 'Adicionar ao Carrinho'
    },
    {
        titulo: 'GTA 5',
        descricao: 'Jogo de Ação',
        img: './e-commerce.img/gta5.jpg',
        tag: ['Playstation', 'PC'],
        preco: 'R$50,00',
        botao: 'Adicionar ao Carrinho'
    },
    {
        titulo: 'NBA 2k22',
        descricao: 'Jogo de Basquete',
        img: './e-commerce.img/nba 2k22.jpg',
        tag: ['Playstation'],
        preco: 'R$50,00',
        botao: 'Adicionar ao Carrinho'
    },
    {
        titulo: 'Resident Evil Village',
        descricao: 'Jogo de Terror',
        img: './e-commerce.img/resident evil village.jpg',
        tag: ['PC'],
        preco: 'R$80,00',
        botao: 'Adicionar ao Carrinho'
    }
];

function createProduct(arrayProducts){
    const list = document.querySelector('.item-container-details');
    list.innerHTML = '';

    for(let i = 0; i < arrayProducts.length; i++){
        const li = document.createElement('li');
        li.classList.add('product')

        const img = document.createElement('img');
        img.src = arrayProducts[i].img

        const h2 = document.createElement('h2');
        h2.innerText = arrayProducts[i].titulo

        const descricao = document.createElement('p');
        descricao.innerText = arrayProducts[i].descricao
       
        const preco = document.createElement('p');
        preco.innerText = arrayProducts[i].preco

        const addProduct = document.createElement('p')
        addProduct.innerText = arrayProducts[i].botao


        li.appendChild(img);
        li.appendChild(h2);
        li.appendChild(descricao);
        li.appendChild(preco);
        li.appendChild(addProduct)
        

        let arrayTag = arrayProducts[i].tag
        for(let j = 0; j < arrayTag.length; j++){
            const tags = document.createElement('span');
            tags.innerText = arrayTag[j];
            li.appendChild(tags)
        }

        list.appendChild(li);

    }

}
createProduct(data)

//criar o carrinho de compras ok
//verificar o produto clicado ok
//Se for todos, retorna todos os produtos ok
//Caso contrario, filtrar array


function filterProducts(event){
    const cart = [];
    const liProduct = event.target
    const arrayItem = document.querySelectorAll('.item-nav')
    if(liProduct.dataset.tag === 'Todos'){
        createProduct(data);
    }else{
        for(let i = 0; i < data.length; i++){
            if(data[i].tag.indexOf(liProduct.dataset.tag) !== -1){
                cart.push(data[i])
            }
    }
    createProduct(cart)

}

for(let i = 0; i < arrayItem.length; i++ ){
    arrayItem[i].classList.remove('active');
}
liProduct.classList.add('active')
}
const listProduct = document.getElementById('listProducts');
listProduct.addEventListener('click', filterProducts)
