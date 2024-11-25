//Artigos
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
     "categoria": "Astrofotografia", 
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
    },
    { "id": 21, 
     "nome": "Binóculo Astronomia Angeleyes Thor 20×80", 
     "categoria": "Binóculos", 
     "preco": "R$ 1.234,05",
     "link": "https://fotonastro.com.br/produto/binoculo-astronomia-angeleyes-thor-20x80/",
     "imagem": "img/BinoculoAngeleyes.jpeg" 
    },
    { "id": 22, 
     "nome": "Angeleyes Lente Barlow APO 1.25″ 2x", 
     "categoria": "Lente", 
     "preco": "R$ 590,00",
     "link": "https://fotonastro.com.br/produto/angeleyes-lente-barlow-apo-1-25-2x/?srsltid=AfmBOoqEAfh2bqfF7AGU3qQiF8SJOboLReHibTLm3AzXNBEexdleG9IM", 
     "imagem": "img/LenteAngeleyes.jpg" 
    },
    { "id": 23, 
     "nome": "OCAL V3 Max Colimador Digital", 
     "categoria": "Astrofotografia", 
     "preco": "R$ 1.614,05",
     "link": "https://fotonastro.com.br/produto/ocal-v3-max-colimador-digital/", 
     "imagem": "img/ColimadorDigital.jpg" 
    },
    {"id": 24, 
     "nome": "Optolong Filtro conjunto LRGB para Câmera Mono", 
     "categoria": "Filtros", 
     "preco": "R$ 1.099,00",
     "link": "https://fotonastro.com.br/produto/optolong-filtro-conjunto-lrgb-para-camera-mono/", 
     "imagem": "img/FiltrosOptolong.png"
    },
    {"id": 25, 
     "nome": "Adaptador Lente Canon ZWO EFW2-EOS Camera M54", 
     "categoria": "Lente", 
     "preco": "R$ 287,04",
     "link": "https://fotonastro.com.br/produto/adaptador-lente-canon-zwo-efw2-eos-camera-m54/", 
     "imagem": "img/AdaptadorLenteCanon.jpg"
    },
    {"id": 26, 
     "nome": "Prolongador ajustavel para DSLR", 
     "categoria": "Binóculos", 
     "preco": "R$ 260,00",
     "link": "https://www.bazardaastronomia.com/astrofotografia/prolongador-ajustavel-para-dslr", 
     "imagem": "img/ProlongadorBinoculos"
    },
    {"id": 27, 
     "nome": "Sky-Watcher Star Adventure GTi Montagem Equatorial GOTO", 
     "categoria": "Astrofotografia", 
     "preco": "R$ 6.699,00",
     "link": "https://fotonastro.com.br/produto/sky-watcher-star-adventure-gti-montagem-equatorial-goto/", 
     "imagem": "img/AstrofotogGoto.jpg"
    },
    {"id": 28, 
     "nome": "Focalizador 2″ CYCK para Newt/SCT", 
     "categoria": "Astrofotografia", 
     "preco": "R$ 1.399,00",
     "link": "https://fotonastro.com.br/produto/focalizador-2-cyck-para-newt-sct/", 
     "imagem": "img/FocalizadorAstrofotos.jpg"
    },
    {"id": 29, 
     "nome": "Mapa de Lua 260 por Meade", 
     "categoria": "Binóculos", 
     "preco": "R$ 89,00",
     "link": "https://fotonastro.com.br/produto/mapa-de-lua-260-por-meade/", 
     "imagem": "img/MapaDaLua.jpg" 
    },
    {"id": 30, 
     "nome": "Angeleyes Conjunto Ocular Plosso+Barlow+Filtro+Caixa", 
     "categoria": "Filtros", 
     "preco": "R$ 949,00",
     "link": "https://fotonastro.com.br/produto/angeleyes-conjunto-ocular-plossobarlowfiltrocaixa/", 
     "imagem": "img/ConjuntoBarlowAngel.jpg"
    },
    {"id": 31, 
     "nome": "GSO Lente Barlow ED 1.25″ 3x", 
     "categoria": "Lentes", 
     "preco": "R$ 199,00",
     "link": "https://fotonastro.com.br/produto/gso-lente-barlow-ed-1-25-3x/", 
     "imagem": "img/LenteBarlow.jpg"
    },
    { "id": 32, 
     "nome": "BRESSER Wave 12×50 Monóculo à Prova D’Água", 
     "categoria": "Lentes", 
     "preco": "R$ 680,00",
     "link": "https://fotonastro.com.br/produto/bresser-wave-12x50-monoculo-a-prova-dagua/", 
     "imagem": "img/MonóculoBresser.jpg"
    }
]`;
//-------------------------------------------------------------------//
// ---FUNÇÃO PARA FILTRAR E FAZER GET DOS PRODUTOS POR CATEGORIA--- //
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
                <button class="botaoCarrinho" onclick="colocarNoCarrinho('${produto.id}')">
                    <svg viewBox="0 0 16 16" class="bi bi-cart2" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" stroke="currentColor" stroke-width="1.0"></path>
                    </svg>
                    <span>Adicionar ao Meu Carrinho</span>
                </button>
                </div>
        `;
        grid.appendChild(div);
    });
}
//------------------------------------------------------------------//
// ---FAZER SOMA DO VALOR TOTAL DO CARRINHO---
var totalCarrinho = 0
function somaPrecoCarrinho(preco) {
    // Converte o preço para número, removendo "R$" e ajustando formato
    var valor = parseFloat(preco.replace('R$', '').replace(/\./g, '').replace(',', '.'));

    // Adiciona ao total somente se a conversão for válida
    if (valor) {
        totalCarrinho += valor;

        // Atualiza o total no carrinho
        document.getElementById('total').textContent = totalCarrinho.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });

    }
}
//------------------------------------------------------------------//
// ---COLOCAR PRODUTO NO CARRINHO--- //
   function colocarNoCarrinho(id){
    var produtos = JSON.parse(json); // Converte o JSON em um objeto JavaScript
    var ul = document.getElementById("itensCarrinho")

    // Verifica se o item já está no carrinho
    if(document.getElementById(`item${id}`) != null){
        alert("Este produto já está no carrinho")
        return
    }
    // Itera por cada produto do json, e coloca no carrinho se não estiver
    produtos.forEach(p =>{
        if(p.id == id){
            ul.innerHTML += `<li id="item${id}" background-color:#212632;><img src='${p.imagem}' width='75' style='float:left;'><p>Produto: <span>${p.nome}</span> <br> Preço: <span>${p.preco}</span></p></li><br><br>`
            somaPrecoCarrinho(p.preco)
            return
        }
    })
}
 //-------------------------------------------------------------------//
// ---LIMPA O CARRINHO--- //
    function EsvaziarCarrinho() {
        const itensCarrinho = document.getElementById("itensCarrinho");
        const somaPrecoCarrinho = document.getElementById("total")
        itensCarrinho.innerHTML = ""; 
        somaPrecoCarrinho.innerHTML = "";
    }
//-------------------------------------------------------------------//
// ---COMPRAR TODOS OS PRODUTOS DO CARRINHO--- //
    function RealizarCompra() {
        const itensCarrinho = document.getElementById("itensCarrinho");


        if (itensCarrinho.children.length === 0) {
            alert("Seu carrinho está vazio!");
            return;
        } else {
            alert(`Compra realizada com sucesso!`);
        }
    
        // Limpa o carrinho após a compra
        EsvaziarCarrinho();
    }
    


