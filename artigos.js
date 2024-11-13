var json =`[
    { "id": 1, 
     "nome": "Telescópio Refrator 70mm (Brinde incluso)", 
     "categoria": "Telescópios", 
     "preco": "R$ 930,00", 
     "link": "https://www.casadoastronomo.com.br/telescopios/telescopios-refratores/telescopio-refrator-70mm-toya-galaxy-ultraoptec-hrt-70l-c-oculares-plossl", 
     "imagem": "<img src='img/TelescopioOctansBrinde.png'>" 
     },

    { "id": 2, 
     "nome": "Binóculo SUMAX 12-45X60 BS Ventura", 
     "categoria": "Binóculos", 
     "preco": "R$ 950,00", 
     "link": "https://www.casadoastronomo.com.br/binoculos/binoculos-c-zoom/binoculo-sumax-12-45x60-bs-ventura-profissional", 
     "imagem": "<img src='img/BinoculoSumax.png'>" 
     },

    { "id": 3, 
     "nome": "Instrumento - espectrógrafo portátil", 
     "categoria": "Astrofotografia", 
     "preco": "R$ 5.709,19", 
     "link": "https://pt.aliexpress.com/i/10000034385284.html", 
     "imagem": "<img src='img/Espectógrafo.png'>" 
     },

    { "id": 4, 
     "nome": "Filtro UHC - Nebulosas e Redução De Poluição Luminosa", 
     "categoria": "Filtros", 
     "preco": "R$ 256,00", 
     "link": "https://www.bazardaastronomia.com/filtros/filtro-uhc-nebulosas-e-reducao-de-poluicao-luminosa#:~:text=O%20filtro%20perfeito%20para%20ver,maior%20qualidade%20das%20imagens%20vistas", 
     "imagem": "<img src='img/FiltroUhc.jpg'>" 
     },

    { "id": 5, 
     "nome": "Prisma Diagonal Adaptador 0.965'x1.25'", 
     "categoria": "Prismas", 
     "preco": "R$ 180,00", 
     "link": "https://www.bazardaastronomia.com/espelhos-diagonais/prisma-diagonal-adaptador-0-965-x-1-25", 
     "imagem": "<img src='img/PrismaDiagonal.webp'>" 
     },

    { "id": 6, 
      "nome": "Telescópio Skydark 70mm Refrator 70500RW", 
      "categoria": "Telescópios", 
      "preco": "R$ 770,00", 
      "link": "https://www.bazardaastronomia.com/telescopios/telescopios-novos/telescopio-skydark-70mm-refrator-70500rw", 
      "imagem": "<img src='img/TelescopioSkyDark.png'>" 
    },
    { "id": 7, 
     "nome": "Filtro Planetário Svbony SV183 IR Pass 685nm", 
     "categoria": "Filtros", 
     "preco": "R$ 170,00", 
     "link": "https://www.bazardaastronomia.com/filtros/filtro-planetario-svbony-sv183-ir-pass-685nm", 
     "imagem": "<img src='img/FiltroAzulClaro.png'>" 
     },
    { "id": 8, 
     "nome": "Colimador a Laser + Adaptador 2", 
     "categoria": "Colimadores", 
     "preco": "R$ 290,00", 
     "link": "https://www.bazardaastronomia.com/colimadores/colimador-a-laser-adaptador-2", 
     "imagem": "<img src='img/ColminadorLaser.png'>" 
     },
    { "id": 9, 
     "nome": "Binóculo SA204 10×50 Porro IPX6 à Prova D’água", 
     "categoria": "Binóculos", 
     "preco": "R$ 622,58", 
     "link": "https://www.svbonybrasil.com.br/produto/binoculo-sa204-10x50-porro-ipx6-a-prova-dagua/", 
     "imagem": "<img src='img/BinoculoSvbony.png'>" 
     },
    { "id": 10, 
     "nome": "Filtro UHC - Nebulosas e Redução De Poluição Luminosa", 
     "categoria": "Filtros", 
     "preco": "R$ 256,00", 
     "link": "https://www.bazardaastronomia.com/filtros/filtro-uhc-nebulosas-e-reducao-de-poluicao-luminosa#:~:text=O%20filtro%20perfeito%20para%20ver,maior%20qualidade%20das%20imagens%20vistas", 
     "imagem": "<img src='img/FiltroUhc.jpg'>" 
     }
]`;


// Função para filtrar e exibir produtos por categoria
function filtrarProdutos(categoria) {
    var produtos = JSON.parse(json); // Converte o JSON em um objeto JavaScript
    var produtosFiltrados = produtos.filter(function(produto) {
        return produto.categoria === categoria;
    });
    
    // Atualizar o conteúdo da página com os produtos filtrados
    var grid = document.querySelector('.grid-container4'); // Seleciona a área onde os produtos serão exibidos
    grid.innerHTML = ''; // Limpa o conteúdo atual da grid

    // Adiciona os produtos filtrados
    produtosFiltrados.forEach(function(produto) {
        var div = document.createElement('div');
        div.classList.add('grid-item4');
        div.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <div class="content">
                <h3><a href="${produto.link}">${produto.nome} <br>${produto.preco}</a></h3>
            </div>
        `;
        grid.appendChild(div);
    });
}
2