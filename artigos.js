var json =`[
    { "id": 1, 
     "nome": "Telescópio Refrator 70mm (Brinde incluso)", 
     "categoria": "Telescópios", 
     "preco": "R$ 930,00", 
     "link": "https://www.casadoastronomo.com.br/telescopios/telescopios-refratores/telescopio-refrator-70mm-toya-galaxy-ultraoptec-hrt-70l-c-oculares-plossl", 
     "imagem": "img/TelescopioOctansBrinde.png" 
     },

    { "id": 2, 
     "nome": "Binóculo SUMAX 12-45X60 BS Ventura", 
     "categoria": "Binóculos", 
     "preco": "R$ 950,00", 
     "link": "https://www.casadoastronomo.com.br/binoculos/binoculos-c-zoom/binoculo-sumax-12-45x60-bs-ventura-profissional", 
     "imagem": "img/BinoculoSumax.png" 
     },

    { "id": 3, 
     "nome": "Instrumento - espectrógrafo portátil", 
     "categoria": "Astrofotografia", 
     "preco": "R$ 5.709,19", 
     "link": "https://pt.aliexpress.com/i/10000034385284.html", 
     "imagem": "img/Espectógrafo.png" 
     },

    { "id": 4, 
     "nome": "Filtro UHC - Nebulosas e Redução De Poluição Luminosa", 
     "categoria": "Filtros", 
     "preco": "R$ 256,00", 
     "link": "https://www.bazardaastronomia.com/filtros/filtro-uhc-nebulosas-e-reducao-de-poluicao-luminosa#:~:text=O%20filtro%20perfeito%20para%20ver,maior%20qualidade%20das%20imagens%20vistas", 
     "imagem": "img/FiltroUhc.jpg" 
     },

    { "id": 5, 
     "nome": "Prisma Diagonal Adaptador 0.965'x1.25'", 
     "categoria": "Telescópios", 
     "preco": "R$ 180,00", 
     "link": "https://www.bazardaastronomia.com/espelhos-diagonais/prisma-diagonal-adaptador-0-965-x-1-25", 
     "imagem": "img/PrismaDiagonal.webp" 
     },

    { "id": 6, 
      "nome": "Telescópio Skydark 70mm Refrator 70500RW", 
      "categoria": "Telescópios", 
      "preco": "R$ 770,00", 
      "link": "https://www.bazardaastronomia.com/telescopios/telescopios-novos/telescopio-skydark-70mm-refrator-70500rw", 
      "imagem": "img/TelescopioSkyDark.png" 
    },
    { "id": 7, 
     "nome": "Filtro Planetário Svbony SV183 IR Pass 685nm", 
     "categoria": "Filtros", 
     "preco": "R$ 170,00", 
     "link": "https://www.bazardaastronomia.com/filtros/filtro-planetario-svbony-sv183-ir-pass-685nm", 
     "imagem": "img/FiltroAzulClaro.png" 
     },
    { "id": 8, 
     "nome": "Colimador a Laser + Adaptador 2", 
     "categoria": "Telescópios", 
     "preco": "R$ 290,00", 
     "link": "https://www.bazardaastronomia.com/colimadores/colimador-a-laser-adaptador-2", 
     "imagem": "img/ColminadorLaser.png" 
     },
    { "id": 9, 
     "nome": "Binóculo SA204 10×50 Porro IPX6 à Prova D’água", 
     "categoria": "Binóculos", 
     "preco": "R$ 622,58", 
     "link": "https://www.svbonybrasil.com.br/produto/binoculo-sa204-10x50-porro-ipx6-a-prova-dagua/", 
     "imagem": "img/BinoculoSvbony.png" 
     },
    { "id": 10, 
     "nome": "Filtro UHC - Nebulosas e Redução De Poluição Luminosa", 
     "categoria": "Filtros", 
     "preco": "R$ 256,00", 
     "link": "https://www.bazardaastronomia.com/filtros/filtro-uhc-nebulosas-e-reducao-de-poluicao-luminosa#:~:text=O%20filtro%20perfeito%20para%20ver,maior%20qualidade%20das%20imagens%20vistas", 
     "imagem": "img/FiltroUhc.jpg" 
     },
    { "id": 11, 
     "nome": "Buscadora Red Dot", 
     "categoria": "Telescópios", 
     "preco": "R$ 195,00", 
     "link": "https://fotonastro.com.br/produto/buscador-red-dot-metallica-com-ajuste-de-reticulo/?srsltid=AfmBOorVH44qDRfrobzjuCdXs-rLPBUIw9UusZ8HXThe3Li2GFEP_Bju", 
     "imagem": "img/BuscadoraRedDot.jpg" 
    },
    { "id": 12, 
     "nome": "Suporte Buscadora Triplo", 
     "categoria": "Telescópios", 
     "preco": "R$ 180,00", 
     "link": "https://www.bazardaastronomia.com/adaptadores/suporte-buscadora-triplo", 
     "imagem": "img/BuscadoraTriplo.jpg" 
    },
    { "id": 13, 
     "nome": "Máscara Baltinov de Metal - Focalização", 
     "categoria": "Astrofotografia", 
     "preco": "R$ 150,00", 
     "link": "https://fotonastro.com.br/produto/mascara-baltinov-de-metal-para-focalizacao/?srsltid=AfmBOoqgn9ux5TSli4ceNFQIV2OadeJaIavnDwaal-oogIGZRDuXmvFc", 
     "imagem": "img/MascaraBaltinov.jpg" 
    },
    { "id": 14, 
     "nome": "Suporte Para Buscadora Laser", 
     "categoria": "Telescópios", 
     "preco": "R$ 210,00", 
     "link": "https://www.bazardaastronomia.com/buscadoras/kit-suporte-laser-caneta-laser-mod-303-c-chave-seguranca-", 
     "imagem": "img/SuporteBuscadora.png" 
    },
    { "id": 15, 
     "nome": "Pochetes Oculares", 
     "categoria": "Lentes", 
     "preco": "R$ 250,00", 
     "link": "https://www.bazardaastronomia.com/lentes-oculares/pochete-oculares", 
     "imagem": "img/PocheteOcular.png" 
    },
    { "id": 16, 
     "nome": "Óculos para Eclipse Solar", 
     "categoria": "Lentes", 
     "preco": "R$ 15,00", 
     "link": "https://www.bazardaastronomia.com/filtro-solar/oculos-para-eclipse-solar", 
     "imagem": "img/OculosPEclipse.png" 
    },
    { "id": 17, 
     "nome": "Câmera Planetária 1/3″ 2MP", 
     "categoria": "Telescópios", 
     "preco": "R$ 1.699,00", 
     "link": "https://fotonastro.com.br/produto/zwo-asi662mc-camera-planetaria-1-3-2mp/?srsltid=AfmBOorOKNyzXSIhfL5BhtHFUpzQli1_Zo3Yjwl0uWwkxIMuZVXNyQsY", 
     "imagem": "img/TelescopioMaskutov.jpg" 
    },
    { "id": 18, 
     "nome": "Câmera Planetária 1/3″ 2MP", 
     "categoria": "Astrofotografia", 
     "preco": "R$ 1.699,00", 
     "link": "https://fotonastro.com.br/produto/zwo-asi662mc-camera-planetaria-1-3-2mp/?srsltid=AfmBOorOKNyzXSIhfL5BhtHFUpzQli1_Zo3Yjwl0uWwkxIMuZVXNyQsY", 
     "imagem": "img/CameraPlanetaria.jpg" 
    },
    { "id": 19, 
     "nome": "Telescópio APO Flat-Field 80mm, f/7.5", 
     "categoria": "Telescópios", 
     "preco": "R$ 10.999,00", 
     "link": "https://fotonastro.com.br/produto/askar-80phq-telescopio-apo-flat-field-80mm-f-7-5/?gad_source=1&gclid=Cj0KCQiA57G5BhDUARIsACgCYnx1avG10cVktdBLqBKIq2aYXX3XukC6P19u2RcfAADeBPnL9VPVC60aAgNvEALw_wcB", 
     "imagem": "img/TelescopioFlatField.jpg" 
    },
    { "id": 20, 
     "nome": "Kit Filtros Coloridos", 
     "categoria": "Filtros", 
     "preco": "R$ 295,00", 
     "link": "https://www.bazardaastronomia.com/filtros/kit-filtros-coloridos-lua-e-skyglow-filtro-para-telescopio", 
     "imagem": "img/FiltrosColoridos.png" 
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