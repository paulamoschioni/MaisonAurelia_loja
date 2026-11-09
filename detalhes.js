// BASE DE DADOS — por enquanto fica aqui no próprio JS (depois vai para o db.json)
const dados = {
  vestidos: [
    {
      id: 1,
      nome: "Aurora de Seda",
      estilista: "Valentino Garavani",
      categoria: "Gala",
      cor: "Champanhe",
      tecido: "Seda pura",
      preco: 48900,
      tamanhos: ["PP", "P", "M"],
      emEstoque: true,
      destaque: true,
      imagem: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Valentino_evening_gown_for_Audrey_Hepburn.jpg",
      descricaoCurta: "Vestido longo de seda com decote nas costas e cauda leve.",
      descricaoCompleta: "Cortado em seda pura italiana, o Aurora tem decote profundo nas costas e uma cauda de 40 cm. As alças finas são bordadas à mão com cristais. Ideal para bailes de gala e eventos black tie."
    },
    {
      id: 2,
      nome: "Véu de Pérolas",
      estilista: "Valentino Garavani",
      categoria: "Noiva",
      cor: "Off-white",
      tecido: "Renda francesa",
      preco: 95000,
      tamanhos: ["P", "M", "G"],
      emEstoque: true,
      destaque: true,
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Valentino_wedding_dress.jpg/960px-Valentino_wedding_dress.jpg",
      descricaoCurta: "Vestido de noiva em renda francesa com 2.000 pérolas bordadas.",
      descricaoCompleta: "Feito sob medida em renda francesa, o Véu de Pérolas leva cerca de 300 horas de bordado manual. A saia em camadas de tule cria volume sem peso. Acompanha véu de 3 metros."
    },
    {
      id: 3,
      nome: "Noite em Veneza",
      estilista: "Valentino Garavani",
      categoria: "Red Carpet",
      cor: "Vermelho",
      tecido: "Veludo",
      preco: 72500,
      tamanhos: ["PP", "P"],
      emEstoque: false,
      destaque: true,
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Valentino%27s_Dress_in_the_textile_museum.JPG/960px-Valentino%27s_Dress_in_the_textile_museum.JPG",
      descricaoCurta: "Veludo vermelho com fenda lateral e ombro único.",
      descricaoCompleta: "Inspirado nos bailes de máscaras de Veneza, este modelo em veludo vermelho tem ombro único e fenda até a coxa. Peça única, assinada pela estilista. Atualmente esgotado."
    },
    {
      id: 4,
      nome: "Brisa de Capri",
      estilista: "Coco Chanel",
      categoria: "Coquetel",
      cor: "Azul-celeste",
      tecido: "Crepe de seda",
      preco: 18900,
      tamanhos: ["P", "M", "G", "GG"],
      emEstoque: true,
      destaque: false,
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Evening_dress_and_underslip_02_-_Coco_Chanel_%2839006718204%29.jpg/960px-Evening_dress_and_underslip_02_-_Coco_Chanel_%2839006718204%29.jpg",
      descricaoCurta: "Midi em crepe de seda com cintura marcada.",
      descricaoCompleta: "Leve e fluido, o Brisa de Capri é um vestido midi com cintura marcada por faixa do mesmo tecido. Funciona em coquetéis de fim de tarde e eventos ao ar livre."
    },
    {
      id: 5,
      nome: "Constelação",
      estilista: "Christian Dior",
      categoria: "Gala",
      cor: "Azul-noite",
      tecido: "Tule bordado",
      preco: 61000,
      tamanhos: ["P", "M"],
      emEstoque: true,
      destaque: false,
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Christian_Dior_Dress_indianapolis.jpg/960px-Christian_Dior_Dress_indianapolis.jpg",
      descricaoCurta: "Tule azul-noite bordado com paetês que lembram estrelas.",
      descricaoCompleta: "O Constelação tem saia ampla de tule azul-noite e corpete estruturado. Os paetês prateados são aplicados à mão formando constelações reais do céu do hemisfério sul."
    },
    {
      id: 6,
      nome: "Jardim Secreto",
      estilista: "Coco Chanel",
      categoria: "Noiva",
      cor: "Marfim",
      tecido: "Organza",
      preco: 83000,
      tamanhos: ["PP", "P", "M", "G"],
      emEstoque: false,
      destaque: false,
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/1923_Coco_Chanel_wedding_dress.jpg/960px-1923_Coco_Chanel_wedding_dress.jpg",
      descricaoCurta: "Organza marfim com flores 3D aplicadas na saia.",
      descricaoCompleta: "Mais de 150 flores em organza são aplicadas à mão na saia do Jardim Secreto. O corpete tem manga longa transparente. Modelo esgotado nesta coleção."
    },
    {
      id: 7,
      nome: "Ônix",
      estilista: "Christian Dior",
      categoria: "Coquetel",
      cor: "Preto",
      tecido: "Cetim",
      preco: 22400,
      tamanhos: ["PP", "P", "M", "G"],
      emEstoque: true,
      destaque: true,
      imagem: "https://upload.wikimedia.org/wikipedia/commons/5/5d/1954_Fall-Winter_cocktail_dress%2C_Christian_Dior%2C_black_silk_satin_with_fringed_sash_01.jpg",
      descricaoCurta: "Tubinho de cetim preto com laço escultural no ombro.",
      descricaoCompleta: "Um clássico reinventado: tubinho preto de cetim com um laço escultural de 30 cm no ombro esquerdo. Comprimento logo acima do joelho."
    },
    {
      id: 8,
      nome: "Dourado Imperial",
      estilista: "Christian Dior",
      categoria: "Red Carpet",
      cor: "Dourado",
      tecido: "Lamê",
      preco: 58700,
      tamanhos: ["P", "M"],
      emEstoque: true,
      destaque: false,
      imagem: "https://upload.wikimedia.org/wikipedia/commons/2/2f/1950c_Christian_Dior_cocktail_dress%2C_jacquard-woven_silk_brocade_with_metallic_threads_01.jpg",
      descricaoCurta: "Lamê dourado com capa longa acoplada.",
      descricaoCompleta: "Feito em lamê metalizado, o Dourado Imperial tem uma capa longa presa nos ombros que se movimenta ao caminhar. Pensado para tapetes vermelhos e premiações."
    },
    {
      id: 9,
      nome: "Rosa Antigo",
      estilista: "Christian Dior",
      categoria: "Coquetel",
      cor: "Rosa antigo",
      tecido: "Chiffon",
      preco: 15600,
      tamanhos: ["M", "G", "GG"],
      emEstoque: false,
      destaque: false,
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Pink_silk_dress_by_Christian_Dior%2C_Paris%2C_Spring_1948.jpg/960px-Pink_silk_dress_by_Christian_Dior%2C_Paris%2C_Spring_1948.jpg",
      descricaoCurta: "Chiffon plissado em rosa antigo, comprimento midi.",
      descricaoCompleta: "Saia plissada em chiffon e decote em V delicado. Um vestido romântico para casamentos de dia e coquetéis. Esgotado no momento."
    },
    {
      id: 10,
      nome: "Esmeralda",
      estilista: "Christian Dior",
      categoria: "Gala",
      cor: "Verde-esmeralda",
      tecido: "Seda pura",
      preco: 67300,
      tamanhos: ["PP", "P", "M"],
      emEstoque: true,
      destaque: false,
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Christian_Dior_Dress.jpg/960px-Christian_Dior_Dress.jpg",
      descricaoCurta: "Seda verde-esmeralda com drapeado assimétrico.",
      descricaoCompleta: "O Esmeralda tem drapeado assimétrico na cintura e saia evasê longa. A cor foi tingida exclusivamente para a coleção de inverno da maison."
    }
  ]
};


 /* ----------------------------------------- */

//pegar url
const params = new URLSearchParams(window.location.search);

//pegar id
const id = params.get("id");

//achar o vestido do detalhe
const item = dados.vestidos.find(vestidos => vestidos.id === params);

//mostrar os detalhes
