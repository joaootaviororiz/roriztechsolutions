# João Roriz · RorizTechSolutions

Portfólio pessoal de **João Otávio Mota Roriz**, engenheiro de software, analista de dados e desenvolvedor. Um espaço para apresentar minha trajetória profissional, os projetos que construo e como aplico tecnologia a problemas do dia a dia.

**[Acessar o site](https://roriztechsolutions.vercel.app/)**

## Sobre o portfólio

O site reúne experiências em suporte técnico, análise de dados, automação e desenvolvimento de sistemas, com destaque para projetos pessoais:

- **MesaFlow:** sistema de gestão de consumo e fechamentos, desenvolvido a partir das necessidades do restaurante da minha família.
- **Automação com Alexa:** projeto de integração entre comandos de voz e um sistema em Python para registros de vendas e consumos.
- **Servidor de acesso remoto:** experiência de implantação de um servidor RustDesk em uma máquina virtual Linux com Ubuntu, pensado para operação contínua 24/7.
- **[Portfólio de automação com Python](https://github.com/joaootaviororiz/automation-portfolio):** pipeline de ETL que extrai dados do Firebird, transforma com Pandas e integra ao Google Sheets para análise e visualização. Também está vinculado à experiência na Mixbrasilis.

As tecnologias citadas nos projetos descrevem esses trabalhos. O portfólio em si é um site estático em HTML, CSS e JavaScript.

## Funcionalidades

- Layout responsivo para computadores, tablets e celulares.
- Temas claro e escuro, com seleção pelo visitante.
- Tema inicial baseado na preferência do sistema e escolha salva no navegador quando o armazenamento está disponível.
- Visual de vidro com transparência, desfoque e bordas suaves.
- Seções de projetos, apresentação pessoal, trajetória profissional, serviços e contato.
- Navegação por teclado, link para pular ao conteúdo e menu móvel com fechamento pela tecla `Escape`.
- Respeito às preferências de redução de movimento e de transparência nos navegadores compatíveis.

## Tecnologias

- **HTML5:** conteúdo e estrutura da página.
- **CSS3:** layout, responsividade e efeitos visuais.
- **JavaScript:** menu móvel e controle de tema.
- **Google Fonts:** fontes DM Sans e Manrope.
- **Vercel:** hospedagem e publicação integrada ao GitHub.

Não há dependências de build, frameworks ou instalação de pacotes para executar o site.

## Estrutura

```text
.
├── index.html    # Página principal, conteúdo, estilos base e menu móvel
├── glass.css     # Estilo de vidro e ajustes dos temas claro e escuro
├── theme.js      # Seleção, persistência e sincronização do tema
├── favicon.svg   # Ícone do site
└── README.md     # Documentação do projeto
```

## Executar localmente

Clone o repositório e entre na pasta:

```bash
git clone https://github.com/joaootaviororiz/roriztechsolutions.git
cd roriztechsolutions
```

Abra o arquivo `index.html` no navegador. Para acessar por um servidor local, com Python instalado:

```bash
python -m http.server 8000
```

Acesse **http://localhost:8000**. No Windows, também é possível usar `py -m http.server 8000`.

As fontes do Google precisam de conexão com a internet; sem elas, o navegador utiliza as fontes alternativas definidas no CSS.

## Editar e publicar

1. Atualize o conteúdo em `index.html`.
2. Ajuste o visual em `glass.css` e o comportamento dos temas em `theme.js`, quando necessário.
3. Confira o resultado nos temas claro e escuro e em diferentes tamanhos de tela.
4. Faça commit e envie as alterações para a branch `main`.

O repositório está integrado ao Vercel para publicação automática a partir da branch `main`. O progresso da publicação pode ser acompanhado pelo status do commit no GitHub e pelo painel do Vercel.

## Contato

- [LinkedIn](https://linkedin.com/in/joaootaviororiz)
- [GitHub](https://github.com/joaootaviororiz)
- [Instagram](https://instagram.com/joaootaviororiz)
- [WhatsApp](https://wa.me/5564999883459)
- **E-mail:** joao.otvo.rv@hotmail.com

---

Desenvolvido por **João Otávio Mota Roriz · RorizTechSolutions**.
