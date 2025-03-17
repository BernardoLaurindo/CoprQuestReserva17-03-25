<img src="../assets/logointeli.png">

# GDD - Game Design Document - Módulo 1 - Inteli

## C.Q.B.T.G (Corp Quest the Business Task Game)
👩‍💻 <a href="https://github.com/alicedevens">Alice Devens Carvalho </a> <br>
👨‍💻 <a href="https://github.com/BernardoLaurindo">Bernardo Laurindo Gonzaga </a> <br>
👩‍💻 <a href="https://github.com/deborangueira">Débora Pereira Nogueira </a> <br>
👨‍💻 <a href="https://github.com/duardoozz">Eduardo de Oliveira Lucio </a> <br>
👨‍💻 <a href="https://github.com/josephmansur9">Joseph Mansur </a> <br>
👨‍💻 <a href="https://github.com/leeunam">Leunam Sousa de Jesus </a> <br>
👨‍💻 <a href="https://github.com/FelipeAccioly633">Luiz Felipe Accioly Tavares </a> <br>
👨‍💻 <a href="https://github.com/funnyweird">Paulo Victor Batista de Souza </a> <br>

## Sumário

[1. Introdução](#c1)

[2. Visão Geral do Jogo](#c2)

[3. Game Design](#c3)

[4. Desenvolvimento do jogo](#c4)

[5. Casos de Teste](#c5)

[6. Conclusões e trabalhos futuros](#c6)

[7. Referências](#c7)

[Anexos](#c8)

<br>


# <a name="c1"></a>1. Introdução (sprints 1 a 4)

## 1.1. Plano Estratégico do Projeto

### 1.1.1. Contexto da indústria (sprint 2)

  O presente projeto foi desenvolvido por alunos do Inteli _(Instituto de Tecnologia e Liderança)_, visando criar uma solução que otimize o onboarding de analistas que ingressam na área de sistemas de fundos de investimento do BTG Pactual - um dos principais bancos de investimentos da América Latina.

  Atuando em diversas áreas como: investimentos, gestão de ativos e gestão de patrimônio, o BTG integra uma indústria ao lado de players como outros bancos, cooperativas e fundos imobiliários.

  No cenário competitivo, o mercado financeiro brasileiro conta com players como Itaú, Bradesco, XP e Nubank, que atuam no setor como banco tradicionais, digitais e até corretoras e fintechs. Enquanto os bancos tradicionais oferecem diversos serviços financeiros, os bancos digitais se destacam pela inovação e experiência do cliente. Assim, nesse cenário competitivo, o BTG equilibra sua tradição no mercado de investimentos com uma abordagem tecnológica e centrada no cliente, oferecendo soluções diferenciadas, destacando-se.

  O Banco opera sob um modelo de Partnership e estrutura administrativa horizontal, que enfatiza o valor do capital intelectual, empreendedorismo e meritocracia em todas as regiões e mercados em que opera, enquanto acompanha as tendências do mercado financeiro cada vez mais tecnológico e centrado no cliente.
  
  Com esse jogo, então, o projeto propõe guiar uma aprendizagem sobre mercado financeiro e a cultura da empresa de forma envolvente, dinâmica e eficiente para os colaboradores.

  **Fontes e referências:**
  https://ri.btgpactual.com/sobre-o-banco/setor-de-atuacao/#:~:text=Essas%20atividades%20s%C3%A3o%20divididas%20em,venda%20e%20negocia%C3%A7%C3%A3o%20de%20a%C3%A7%C3%B5es 
https://blog.toroinvestimentos.com.br/trading/players-de-mercado/
https://tiinside.com.br/28/12/2024/4-tendencias-do-mercado-financeiro-para-2025/#:~:text=As%20tend%C3%AAncias%20para%202025%20apontam,futuro%20mais%20inclusivo%20e%20din%C3%A2mico.
https://ri.btgpactual.com/sobre-o-banco/vantagens-competitivas-e-estrategia/#:~:text=O%20Banco%20BTG%20Pactual%20opera,chave%20para%20o%20seu%20sucesso.


#### 1.1.1.1. Modelo de 5 Forças de Porter (sprint 2)

1) Análise da Ameaça de Novos Entrantes

O mercado financeiro é bem consolidado, pois existem barreiras de entrada naturais do setor, como regulamentação rigorosa, necessidade de capital elevado e confiança dos usuários. Entretanto, existem fatores que influenciam na entrada mais fácil de novos negócios, sendo que, dentre eles, os mais relevantes estão relacionados ao uso da tecnologia ligado ao setor financeiro.

Por isso, as fintechs, como Nubank, Neon e Inter, tem crescido tanto nos últimos anos, já que trazem inovação para um meio que sempre foi muito tradicional. Com aplicativos focados na experiência do usuário, programas de cashback, e outros produtos que podem ser acessados de forma mais conveniente, as fintechs deixaram a ameaça do setor moderada, entretanto, o BTG tem se comportado de modo a manter a sua posição, trazendo esses diferenciais para a empresa também. Isso pode ser visto em atitudes como a #btgfaztech, na qual são reunidas diversas iniciativas tecnológicas, para garantir a excelência aos seus clientes.
  

2) Análise da Ameaça de Produtos ou Serviços Substitutos

No setor financeiro, a ameaça de produtos ou serviços substitutos refere-se à possibilidade de clientes optarem por alternativas que atendam às mesmas necessidades de maneiras diferentes. Embora a barreira de entrada seja alta, algumas tendências tecnológicas e regulatórias contribuem para criação de serviços substitutos que podem competir com os produtos oferecidos pelo BTG Pactual.

Entre essas tendências, a tokenização de ativos físicos e o crescimento das criptomoedas prometem revolucionar o acesso a investimentos, enquanto os modelos descentralizados de finanças (DeFi) eliminam intermediários e facilitam transações financeiras. Plataformas como Aave e Uniswap permitem que investidores negociem ativos e realizem empréstimos diretamente, sem a necessidade de um banco de investimento, representando uma concorrência crescente ao modelo tradicional.

Além disso, no Brasil, o PIX e a implementação do open banking são avanços regulatórios que ampliam as opções dos consumidores. O open banking, em particular, facilita o compartilhamento de dados financeiros entre diferentes instituições, reduzindo os custos de migração entre serviços e aumentando a concorrência no setor. Isso pode levar clientes a optar por fintechs e bancos digitais em vez de grandes instituições financeiras.

Para aprofundar a análise, é importante avaliar o nível de ameaça representado por esses substitutos. Soluções como plataformas de empréstimo peer-to-peer (P2P lending), como a Creditas, e o crescimento de alternativas de investimento via crowdfunding e robo-advisors, como a Magnetis e a Warren, podem impactar diretamente a receita e a base de clientes do BTG Pactual. Essas alternativas oferecem maior acessibilidade, taxas competitivas e experiências digitais personalizadas, o que pode levar à migração de clientes que buscam simplicidade e menores custos. Com a digitalização crescente e a mudança no perfil dos investidores, especialmente mais jovens, a ameaça de substituição se torna cada vez mais relevante para o modelo tradicional de negócios.

3) Análise do Poder de Barganha dos Fornecedores

O BTG depende de alguns fornecedores, de níveis de poder diferentes. Primeiramente, tem o governo, que possui um poder maior, já que atua com ações regulatórias, nas quais os bancos não tem muito poder de negociação. Segundamente, possui as fontes de capital, como investidores institucionais, mercados de capitais e credores, mas como o BTG tem acesso a crédito global, essa influência é reduzida. Além disso, também existe os fornecedores de tecnologia, que possuem um poder moderado, já que são extremamente importantes, mas o BTG ainda consegue optar por diferentes empresas, o que reduz os riscos e diminui suas influências.

O poder de barganha dos fornecedores impacta os custos, a qualidade e a inovação no BTG Pactual. No caso dos fornecedores de tecnologia, como Microsoft, Oracle e AWS, apesar da possibilidade de escolha, uma dependência excessiva pode aumentar custos e limitar a flexibilidade para inovações. Negociações desfavoráveis ou mudanças nos serviços podem afetar a eficiência operacional e o lançamento de novos produtos financeiros.

4) Análise do Poder de Barganha dos Clientes
 
O poder de barganha dos clientes, isto é, o poder de negociar o melhor preço e exigir mais diferenciais das empresas, é bem alto no setor financeiro brasileiro. Isso porque existem muitos negócios que competem com o BTG, fazendo com que os clientes possam optar pela escolha que mais os favorece. Para se diferenciar em meio a tantas empresas, o BTG tem feito diversas ações para atrair usuários novos e manter os seus atuais clientes, buscando estabelecer uma cultura de fã (clientes fiéis, que promovem o negócio). Dentre essas ações, pode-se citar: benefícios como cashbacks e pontos, personalização do cartão, e automatização da gestão financeira, fatores que podem ser decisivos na escolha por um banco.

O alto poder de barganha dos clientes impacta os preços, a qualidade e a inovação no BTG Pactual. O banco atende diferentes perfis, como pessoas físicas, empresas e investidores institucionais, cada um com necessidades e poder de negociação distintos. Para se destacar no mercado competitivo, o BTG precisa inovar constantemente, oferecendo taxas competitivas, serviços personalizados e benefícios diretos, como cashbacks e programas de fidelidade.

5) Análise da Rivalidade entre os Concorrentes Existentes <br>

A rivalidade no setor financeiro brasileiro possui diversos players competindo por participação de mercado. Dentre os principais concorrentes do BTG Pactual, destacam-se:

- Bancos Tradicionais: Instituições como Itaú Unibanco, Banco do Brasil e Bradesco possuem ampla presença e oferecem uma gama completa de serviços financeiros.

- Plataformas Digitais e Corretoras: Empresas como XP Investimentos e ModalMais competem diretamente em áreas de investimentos e gestão de patrimônio.

Além da concorrência, movimentos de mercado, como a aquisição na participações de fintechs e formação de parcerias estratégicas, impactam o mercado financeiro ampliando a oferta de serviços e atraindo novos clientes. Essa rivalidade influencia diretamente as margens de lucro, precificação e inovação.

Para se destacar, as empresas precisam investir continuamente em inovação, seja no lançamento de novos produtos e serviços, seja na adoção de melhorias tecnológicas que agreguem valor ao cliente.

A rivalidade no setor financeiro brasileiro é intensa, com bancos tradicionais e plataformas digitais competindo em preço, produtos e lucratividade. Assim, o BTG Pactual se diferencia oferecendo soluções personalizadas para investidores institucionais, produtos financeiros exclusivos, experiência digital integrada, além de investir em inovação tecnológica para atrair e fidelizar clientes.

### 1.1.2. Análise SWOT (sprint 2)

<div align="center">
    <small><strong style="font-size: 12px;">Matriz SWOT (Figura X);</strong></small><br>
  
![Image](https://github.com/user-attachments/assets/de406b60-3458-4b0a-88d1-43cf6a353fc5)

<small style="margin-top: 4px; font-size: 10px;">Fonte: autores (2025)</small>
</div>

Strength (forças):
O BTG é um banco que tem no seu core o Partnership Meritócratico, que consiste em ajudar seus clientes a gerir melhor seu patrimônio e, consequentemente, crescer junto a eles no longo prazo. Além dessa forte cultura, algumas ações  fortalecem a presença do banco do mercado, sendo elas:
- Para Pessoas Físicas: conteúdos sobre investimentos, cartão de crédito com benefícios, acesso a consultoria especializada, gestão completa de pagamentos, conta sem taxas e concierge disponível via WhatsApp (em caso de cliente Ultrablue BTG Pactual).
- Para Empresas: acesso a APIs, gestão financeira automatizada, atendimento humanizado e 
crédito de fácil acesso.

Weakness (fraquezas):
Apesar das forças acima, o BTG possui algumas fraquezas em relação ao mercado:
- Pouca atratividade para jovens trabalhadores: ainda que o BTG esteja tentando mudar sua imagem no mercado, o banco ainda é visto como um empresa tradicional, o que desfavorece a contratação de funcionários mais novos.
- O banco tem como público alvo indivíduos com elevado património e os serviços que oferece atendem principalmente as necessidades desse perfil de cliente. Nesse sentido, o banco possui poucos atrativos para pessoas mais jovens que possuem menos patrimônio tornarem-se clientes. Não contemplar esse grupo reduz a capacidade de expansão da base de clientes da empreza, o que pode deixar o banco vulnerável a longo prazo e a crises que afetem o público de alta renda.

Opportunities (oportunidades): 
O mercado de tecnologia cresceu 21% em 2024 e tende a continuar assim em 2025, de acordo com o site do Insper. Considerando isso, existem diversas oportunidades para o setor financeiro, quando se trata de inovação, que podem ser determinantes para o futuro do BTG. Dentre elas, estão: 
- A tokenização dos ativos físicos, isto é, representações digitais dos ativos em uma blockachain, que podem ajudar na democratização do acesso aos investimentos, na garantia de maior liquidez e de maior transparência, trazendo um diferencial no mercado;
- O uso da Inteligência Artificial, que permite organizar, acelerar e impulsionar os processos já existentes da empresa, e também melhorar a implementação de novos serviços e/ou produtos;
- Crescimento do varejo digital do BTG, o que é de extrema relevância para a expansão da empresa, considerando que, de acordo com o G1 (2022), 61% dos brasileiros compraram mais pela internet do que por lojas físicas. 
Outro ponto importante de se tratar, é a preferência, por parte dos consumidores, por empresas que adotem práticas ESG. Assim, o BTG pode buscar diversas maneiras de se destacar no ramo da sustentabilidade, como por meio de: 
- Educação financeira nas comunidades; 
- Otimização dos códigos e bancos de dados, de maneira a reduzir o consumo de água e energia causado pelo processamento dessas informações;
Dessa forma, conseguem garantir maior aproveitamento de seus recursos e uma maior integridade com o meio ambiente e com a sociedade.

Threats (ameaças):
Quando se tratando da tecnologia no mercado financeiro, ela também apresenta certas ameaças que podem impactar no crescimento do BTG. Dentre essas, estão: 
- Risco de vazamento de dados com ataques hackers - relacionado a cibersegurança;
- Concorrência com fintechs e bancos digitais: essas empresas e startups, como Inter e NuBank, costumam ter mais facilidade de inovar do que o BTG, uma vez que já nasceram com o propósito de digitalizar e de se resumir a tecnologia, sendo esta, grande fator de crescimento das empresas hoje em dia.
Além disso, existem os fatores macroeconômicos, no qual o BTG, como qualquer instituição financeira no Brasil, está sujeito às oscilações econômicas, incluindo flutuações de mercado e mudanças nas políticas monetárias, que podem impactar diretamente seus negócios. Ademais, as mudanças no cenário político podem alterar regras, fazendo com que o BTG tenha que se adaptar constantemente às regulamentações, que se tornam mais ou menos rígidas do que estavam anteriormente, por meio, por exemplo, da criação de novas regras para aplicações financeiras.

Em conclusão, essa análise SWOT revela uma instituição sólida, com uma forte cultura meritocrática e um portfólio de serviços atrativo para clientes com alto patrimônio. A inovação, especialmente no uso de Inteligência Artificial e tokenização, é uma grande oportunidade para o banco se destacar no mercado financeiro. Entretanto, a sua dependência de um público de alta renda e a sua imagem tradicional trazem dificuldades na atração de jovens trabalhadores e a expansão de sua base de clientes. Ademais, o BTG enfrenta ameaças de cibersegurança, concorrência com fintechs e desafios econômicos e regulatórios.

Sendo assim, para garantir um crescimento contínuo e minimizar os riscos, o BTG deve aproveitar as oportunidades de inovação, ampliar sua base de clientes com serviços inclusivos e se adaptar rapidamente às mudanças do mercado.

**Fontes e Referências:**
https://einvestidor.estadao.com.br/investimentos/fintechs-mais-rentaveis-goldman-sachs/ 
https://www.bcb.gov.br/estabilidadefinanceira/concorrenciasfn 
https://banking.btgpactual.com/
https://carreiras.btgpactual.com/tecnologia
https://exame.com/carreira/a-receita-do-btg-pactual-advisors-para-atrair-profissionais-e-clientes/amp/
https://www.tjdft.jus.br/institucional/imprensa/campanhas-e-produtos/direito-facil/edicao-semanal/consumidor-x-fornecedor 
https://itforum.com.br/noticias/tendencias-de-tecnologia-para-o-mercado-financeiro/#:~:text=Recentemente%2C%20o%20pa%C3%ADs%20implementou%20com,brasileira%2C%20e%20do%20Open%20Finance 
https://www.infomoney.com.br/guias/open-banking/#:~:text=S%C3%A3o%20elas%3A%20Banco%20do%20Brasil,ou%20n%C3%A3o%20do%20novo%20ecossistema. 
https://www.contabeis.com.br/artigos/68994/mercado-financeiro-2025-tendencias-e-oportunidades-de-investimento/ 
https://exame.com/future-of-money/defi-a-revolucao-em-curso-no-mundo-das-financas/   


### 1.1.3. Missão / Visão / Valores (sprint 2)

**Missão**  
Proporcionar excelência em serviços financeiros, com soluções inovadoras e adaptáveis.

**Visão**  
Ser uma instituição financeira líder, reconhecida pela ética e pelo compromisso com o sucesso dos seus clientes.
 
**Valores**

1. Integridade.
2. Responsabilidade.
3. Simplicidade.
4. Inconformismo.
5. Dedicação.

**Fontes e Referências:**
(https://www.btgpactual.com/nosso-dna)


### 1.1.4. Proposta de Valor (sprint 4)

*Posicione aqui o canvas de proposta de valor. Descreva os aspectos essenciais para a criação de valor da ideia do produto com o objetivo de ajudar a entender melhor a realidade do cliente e entregar uma solução que está alinhado com o que ele espera.*

### 1.1.5. Descrição da Solução Desenvolvida (sprint 4)

  *Desenvolvemos um jogo educacional interativo que combina desafios dinâmicos e quizzes para facilitar a aprendizagem de conteúdos essenciais no onboarding do BTG Pactual. Com uma interface intuitiva e acessível, o jogo é inspirado em pixelado no estilo 16-bit 2.5D, oferecendo uma experiência imersiva, divertida e  engajadora. A combinação de mecânicas de gamificação com conteúdos relevantes transforma o processo de onboarding em uma jornada de aprendizado eficiente, alinhada à realidade do BTG e às expectativas de seus novos analistas de tecnologia.*


### 1.1.6. Matriz de Riscos (sprint 4)

*Registre na matriz os riscos identificados no projeto, visando avaliar situações que possam representar ameaças e oportunidades, bem como os impactos relevantes sobre o projeto. Apresente os riscos, ressaltando, para cada um, impactos e probabilidades com plano de ação e respostas.*

### 1.1.7. Objetivos, Metas e Indicadores (sprint 4)

*Definição de metas SMART (específicas, mensuráveis, alcançáveis, relevantes e temporais) para seu projeto, com indicadores claros para mensuração*

## 1.2. Requisitos do Projeto (sprints 1 e 2)

  A lista de requisitos contém as condições que o projeto deve cumprir para atender aos pedidos do parceiro, juntamente com as inovações do grupo para alcançar o objetivo final. Para atingir o Product Goal solicitado pelo BTG, é necessário:

| # | Requisitos
| --- | --- |
| 01 | Jogo Desktop Web
| 02 | O jogo deve possuir uma tela de abertura para o jogador selecionar: "Jogar", "Controles" e "Acesso à FAQ/Q&A".
| 03 | O jogo contará com tarefas obrigatórias, que devem ser concluídas para avançar de andar, e também haverá tarefas opcionais, que podem render recompensas extras.
| 04 | O jogo deve ter embasamento em uma documentação técnica em cada fase, além de incluir simulações de casos reais durante algumas tarefas.
| 05 | Ao fim de cada nível (andar), há uma "boss fight" que consolida o aprendizado por meio de um quiz dinâmico cronometrado.
| 06 | O jogo deve conter feedback ao final de cada andar e estatísticas de acertos e erros para o usuário.
| 07 | O jogo deve possuir um item de personagem que contenha: glossário de termos e progresso do jogo.
| 08 | O jogo contará com tópicos adicionais para reforço e conteúdos extras para o usuário se aprofundar nos assuntos tratados e outros relacionados.

  Em conclusão, o projeto desenvolvido  visa otimizar o processo de onboarding de novos analistas de tecnologia na área de sistemas de fundos de investimento do BTG Pactual. A proposta consiste na criação de um jogo desktop web gamificado que, apresenta conceitos técnicos e de negócios essenciais para a atuação no setor.

  O jogo oferece um ambiente de aprendizagem prática, ao mesmo tempo que facilita a integração dos colaboradores ao contexto organizacional. Com os requisitos acima, espera-se não apenas acelerar o processo de adaptação, mas também proporcionar uma experiência de aprendizado eficiente e alinhada às necessidades estratégicas do banco.

## 1.3. Público-alvo do Projeto (sprint 2)

Compreender o público-alvo é essencial para o planejamento de design, desenvolvimento e comunicação. Isso permite criar uma experiência envolvente para o consumidor final além de garantir um melhor entendimento das mecânicas do jogo.
No caso do jogo Corp Quest, the Business Task Game, o público alvo são jovens profissionais que estão no processo de Onboarding para a área de sistemas de fundos de investimento. Esses profissionais são novos analistas de desenvolvimento que precisam aprender rapidamente os conceitos fundamentais do setor, as ferramentas e a cultura da empresa. O perfil desses profissionais nos mostra que, grande parte deles, têm experiência com jogos, mesmo que casuais.
Para atender as necessidades do nosso público-alvo, o jogo apresenta design corporativo, mecânicas simples e desafios interativos. Esses fatores foram pensados para envolver o jogador e trazer uma experiência de aprendizado dinâmica e eficaz.

# <a name="c2"></a>2. Visão Geral do Jogo (sprint 2)

## 2.1. Objetivos do Jogo (sprint 2)

O Corp Quest, the Business Task Game, tem o objetivo principal de complementar o Onboarding de novos analistas de dados financeiros. O jogo, por meio de quizzes e desafios interativos, torna a aprendizagem mais dinâmica e imersiva. Durante a jornada, o jogador deve interagir com os personagens não jogáveis e cumprir as tarefas propostas, com o objetivo de chegar ao final do jogo.

## 2.2. Características do Jogo (sprint 2)

### 2.2.1. Gênero do Jogo (sprint 2)

O jogo faz parte do gênero de trivia, no qual os jogadores precisam passar por perguntas e desafios para chegar ao final.

A dinâmica de jogo é baseado no gênero Beat 'em up, na qual é utilizado uma câmera de visão lateral e um cenário com profundidade. Além disso, o jogo traz a experiência de exploração interativa dos jogos de aventura, no qual o jogador assume o papel de protagonista, interage com o ambiente para resolver desafios para avançar na jornada. Esse elemento é combinado ao estilo educacional, que tem como objetivo ensinar uma temática específica. No Corp Quest, o foco é abordar a questão de Fundos de Investimento e a Cultura de uma Empresa.

### 2.2.2. Plataforma do Jogo (sprint 2)

O jogo foi desenvolvido para desktop e será jogado na plataforma web. O framework utilizado foi o Phaser, caracterizado por ser código aberto, o que facilita a execução do jogo sem a necessidade de extensões ou plugins.

### 2.2.3. Número de jogadores (sprint 2)

O jogo é para um jogador, proporcionando uma experiência personalizada e exclusiva, garantindo maior interação com os conteúdos e uma melhor análise do progresso individual.

### 2.2.4. Títulos semelhantes e inspirações (sprint 2)

Referência do Projeto:
- Pokemon Fire Red (boss battle); <br>
- Persona 6 (logo); <br>
- Digimon Rumble Arena 2 (tela inicial); <br>
- Sonic Adventure 2; <br>
- Scott Pilgrim vs the World: The Game; <br>
- Five Nights at Freddy’s: Into the Pit; <br>
- River City Girls; <br>
As referências utilizadas são, de grande maioria, jogos dos anos 2000, os quais têm uma jogabilidade simples e mecânicas dinamizadas.


### 2.2.5. Tempo estimado de jogo (sprint 5)

 O jogo pode ser concluído em até 25 minutos passando por todas as fases, e estimamos que cada uma das fases dure menos de 10 minutos.

# <a name="c3"></a>3. Game Design (sprints 2 e 3)

## 3.1. Enredo do Jogo (sprints 2 e 3)

"Corp Quest: The Business Task Game" se passa na virada do milênio, dentro de um prédio empresarial, capturando a estética da época em seus cenários, vestimentas e, principalmente, na tecnologia.

Nesse universo, o protagonista é um hacker profissional que é chamado pelo maior banco da cidade para resolver um grave ataque cibernetico na empresa. A missão dele é recuperar a integridade do sistema do banco, mas, para isso, ele precisará aprender sobre fundos de investimento a fim de desvendar os códigos e auxiliar a equipe do banco a restituir a integridade do seu sistema. Dessa forma, o jogador deverá controlar o personagem ao longo de uma jornada desafiadora, aliando os conhecimentos de tecnologia com os de mercado financeiro, a fim de resolver os problemas com agilidade e eficiência. Assim, cada fase do jogo trará um desafio diferente onde o jogador aprenderá sobre a cultura interna do BTG e sobre fundos de investimento conforme avança. Seu objetivo é cumprir essas tarefas para subir pelo prédio e alcançar a sala do CEO no último andar, onde o último desafio o aguarda. Para aumentar a imersão, o jogador poderá selecionar a aparência do protagonista dentre as opções dadas.

Motivado a ajudar a empresa, o jogador terá que avançar pelos seguintes desafios:
Na primeira fase, é necessário resolver conflitos entre funcionários causados pela descoberta do ataque do vírus. Escolhendo as respostas corretas em diálogos interativos, o objetivo consiste em restaurar a harmonia e acessar o elevador para seguir adiante.

Na segunda fase, o responsável pelo ataque do vírus tenta impedir o avanço do personagem e invade o sistema de elevadores do prédio, fazendo eles pararem. O jogador é obrigado a sair no meio do caminho para restituir o funcionamento normal do elevador e, para isso, deve explorar o andar e coletar informações, que serão necessárias para reativá-lo.

Na terceira fase, o jogador descobre que o vírus alterou a senha de acesso à sala do CEO e ao explorar o andar, encontra a sala de supercomputadores. Nesse local, três enigmas guardam o segredo dos três dígitos da senha. Os enigmas são resolvidos ao organizar códigos e textos acerca de fundos de investimento, afim de descobrir a senha que desbloqueia a porta final. Com a senha em mãos, o jogador se encontra com o CEO e inicia o embate final em um teste com perguntas sobre todos os temas abordados no jogo.

Cada desafio inclui um feedback sobre o desempenho do jogador, reforçando o aprendizado de forma dinâmica e intuitiva.
Dessa forma, Corp Quest: The Business Task Game combina educação e entretenimento em um ambiente corporativo retrô, proporcionando uma experiência imersiva. Seus desafios ensinam conceitos essenciais sobre fundos de investimento e a cultura do BTG, enquanto a narrativa envolvente e as mecânicas diversificadas tornam o aprendizado gamificado e acessível. Com uma estrutura bem planejada, mecânicas simples e dinâmica envolvente, o jogo facilita o onboarding de novos analistas, tornando o processo mais leve, interativo e eficaz.

## 3.2. Personagens (sprints 2 e 3)

### 3.2.1. Controláveis

Nosso jogo possui 4 opções diferentes de personagens e cada um pode ter seu nome personalizado pelo jogador, na variedade dos personagens buscamos a diversidade e  a  inclusão. Consideramos que  um dos pilares da imersão é que cada jogador se sinta representado pelo personagem de sua escolha. Nosso personagem principal é representado por alguém com prévio conhecimento no setor de fundos de investimento, sendo reconhecido no mercado por suas habilidades, levando em consideração  que o ambiente do jogo é repleto de desafios, é posto à prova suas habilidade de absorção de conhecimento e resolução de conflitos. A proatividade é uma característica essencial no desenvolvimento do ator, a interatividade com informações, quizzes, e NPC’S como requisitos para resolução de desafios; exigem uma postura ativa do personagem, sempre em busca de resolver peças do quebra cabeça geral do jogo. 

![Image](https://github.com/user-attachments/assets/908d442f-e800-483d-bb5d-037472fa2c09) 

![Image](https://github.com/user-attachments/assets/4b5baa4a-1f8d-4989-bd98-11ec69f6d45f) 

![persinagem hm aumentado](https://github.com/user-attachments/assets/ec58a3e7-8890-4346-a276-c28312d9f5bf)


### 3.2.2. Non-Playable Characters (NPC)

O NPC é essencial para o funcionamento do nosso jogo, através da interatividade entre ele e o jogador principal, cria-se uma dinâmica de colaboração, trazendo imersão e interatividade. Assim como um coadjuvante, o papel do NPC é guiar, informar, e potencializar as habilidades do jogador.

NOME DO NOSSO NPC: Daphne  

<div align="center">
    <small><strong style="font-size: 12px;">Daphne NPC;</strong></small><br>
  
![DaphneNPC](https://github.com/user-attachments/assets/62295d11-c9ba-40a9-b0b1-a0e50fb19fff)

<small style="margin-top: 4px; font-size: 10px;">Fonte: autores (2025)</small>
</div>

Objetivos: - Liberar o protagonista para entrar no prédio do banco. - Passar informações sobre o que está acontecendo e sobre o estado do prédio, aparecer ocasionalmente durante o jogo, fornecendo diálogos importantes. 

 Características: - Secretária do prédio do banco - Aflita e desesperada com a confusão ao seu redor. - Primeira personagem a interagir com o jogador no jogo. - Sabe que um hacker está vindo e está aguardando sua chegada. - Tem informações sobre a situação do banco, mas está sobrecarregada com os eventos. - Não tem controle sobre o caos, mas ainda cumpre seu papel de direcionar o protagonista.

 Habilidades: - Informante passiva: Embora não resolva problemas, pode fornecer dados relevantes ao jogador.

 Diferenciais: - Primeiro contato humano do jogador no jogo, estabelecendo a ambientação inicial. - Está lá para cumprir seu dever, mas não tem poder direto sobre os eventos acontecendo no prédio. - Pode reaparecer em momentos estratégicos, trazendo atualizações sobre a situação do banco ou reagindo ao progresso do jogador.


### 3.2.3. Diversidade e Representatividade dos Personagens

A inclusão de diversidade e representatividade na escolha de personagens de um jogo destinado a jovens profissionais do setor de fundos de investimento tem um impacto significativo na experiência do jogador e na percepção do mercado financeiro. Através de um menu de seleção permitimos a escolha de personagens de diferentes origens, etnias, gêneros e estilos, permitindo assim que os jogadores optem por um  que o façam  se sentir representados, tornando a experiência mais envolvente e autêntica.

Além de aumentar a imersão, a diversidade também influencia a forma como os jogadores tomam decisões dentro do jogo, promovendo uma visão mais ampla e reduzindo vieses inconscientes. Para profissionais iniciando no setor financeiro, esse aspecto é fundamental, pois incentiva a valorização de perspectivas diversas, algo essencial para a inovação e o sucesso no mercado.

Ao refletir um ambiente mais inclusivo, nosso jogo não apenas melhora a experiência dos jogadores, mas também contribui para mudanças culturais no setor financeiro, refletindo assim os propósitos do nosso parceiro BTG. Reforçamos a ideia de que competência e inovação são mais importantes do que estereótipos tradicionais, ajudando a construir um mercado mais acessível e representativo para diferentes perfis de profissionais.

## 3.3. Mundo do jogo (sprints 2 e 3)

### 3.3.1. Locações Principais e/ou Mapas (sprints 2 e 3)

O jogo se passa dentro de um prédio corporativo durante os anos 2000, representando a sede do BTG, mas com um toque retrô e tecnológico. O prédio está sendo invadido por vírus digitais, que se manifestam como monstros inspirados em plataformas online.

O jogo é dividido em três fases, cada uma representando um andar diferente do prédio, com desafios progressivos.

📌 Lista das Fases e Ambientes:

| **Fase** | **Ambiente** | **Descrição** |
| --- | --- | --- |
| **Fase 1** | **Lobby da entrada principal** | Um andar corporativo padrão, mas caótico, com funcionários brigando como consequência de um ataque cibernetico repentino. O jogador precisará resolver conflitos através de diálogos interativos. |
| **Mini Jogo 1** | **Fase 1** | O jogador precisa fazer as escolhas certas de resposta durante o diálogo com um grupo de NPC 's. Serão dadas duas opções para cada pergunta ou frase, tudo junto compõe o diálogo do personagem com o grupo.  O formato de jogo segue o modelo de pergunta e resposta, arrastando o card para a direita ou para a esquerda para selecionar a resposta certa. |
| **Fase 2** | **Andar de Segurança e TI** | Um ambiente técnico e cheio de terminais, onde o vírus está corrompendo os sistemas. O jogador precisa resolver **minigames financeiros** para recuperar o controle e liberar o elevador. |
| **Mini Jogo 2** | **Fase 2** | O jogador precisa organizar os departamentos de acordo com suas funções. Eles terão que arrastar os ícones de cada setor (Administração, Financeiro, RH, Comercial e Produção) para as áreas corretas.(conectar as palavras e conceitos). Assim concertando o elevador e podendo chegar ao andar desejado. |
| **Fase 3** | **Sala dos Supercomputadores** | Um andar futurista, com **servidores massivos** e terminais de alta tecnologia. O jogador enfrenta mais um tipo de ataque, que corrompe informações e bloqueia o acesso à verdade sobre a senha da porta final. |
| **Mini Jogo 3** | **Fase 3** | O minijogo funciona através de desafios interativos onde o jogador precisa arrastar, encaixar e organizar conceitos sobre fundos de investimento. Em diferentes momentos, ele associará taxas a cenários reais, conectará definições de benchmark, liquidez e risco, além de identificar a tributação correta em cada caso. As respostas corretas garantem avanço na fase, enquanto erros geram dicas e novas tentativas para aprendizado contínuo. |
| **Final** | **Sala do CEO** | Uma sala de segurança máxima, onde o protagonista finalmente se encontra com o CEO e ajuda-o a derrotar o responsável pelos ataques em um **quiz de finanças** no estilo **Pokémon**. |

### 3.3.2. Navegação pelo mundo (sprints 2 e 3)

O jogo tem **navegação linear**, mas com **exploração livre dentro de cada andar**. O jogador pode **se mover pelos corredores e entrar em salas** para interagir com terminais, NPCs e eventos importantes.

📌 **Como o jogador acessa novas áreas?**

- **Elevador**: O elevador conecta os andares, mas precisa ser liberado ao derrotar o monstro de cada fase.
- **Portas bloqueadas**: Algumas portas só podem ser abertas ao **resolver desafios financeiros e coletar informações**.
- **Interação com NPCs e Terminais**: Algumas áreas requerem **informações coletadas de NPCs** ou **resolução de minigames** para avançar.

📌 **Desbloqueio de fases:**

- O jogador **explora cada andar até reverter a situação**, absorvendo suas informações no celular.
- Quando resolve o problema da fase, **o elevador é liberado**, permitindo avançar.
- No último andar, o protagonista deve resolver os **3 enigmas na sala dos supercomputadores** e abrir a **sala secreta** para o teste final.
### 3.3.3. Condições climáticas e temporais (sprints 2 e 3)

**⏳ Tempo no jogo:**

- O tempo não é um fator limitante para exploração, mas alguns **minigames possuem um contador de tempo** para aumentar a pressão no jogador.
- O **minigame dos terminais na Fase 3** exige que o jogador complete frases corretamente antes que o tempo acabe.

**🌡️ Clima e Ambiente:**

- O prédio mantém um **visual corporativo e limpo**, mas fica mais **distópico e ameaçador conforme o jogo avança**.
- No final, **os alarmes tocam, luzes piscam em vermelho e o ambiente se torna caótico**, antecipando a fase final.
  
### 3.3.4. Concept Art (sprint 2)

<div align="center">
  
![1](https://github.com/user-attachments/assets/014ad2f6-c5e7-44dd-be7a-466d1576f2c4)
![2](https://github.com/user-attachments/assets/a27cc081-12ed-4128-b1eb-c57cadb5b924)
![cenario gdd](https://github.com/user-attachments/assets/0167dffd-c61f-4d3b-98ea-880f8c7b8ec9)

<small style="margin-top: 4px; font-size: 10px;">Fonte: autores (2025)</small>
</div>

### 3.3.5. Trilha sonora (sprint 3)

*Descreva a trilha sonora do jogo, indicando quais músicas serão utilizadas no mundo e nas fases. Utilize listas ou tabelas para organizar esta seção. Caso utilize material de terceiros em licença Creative Commons, não deixe de citar os autores/fontes.*

*Exemplo de tabela*
\# | titulo | ocorrência | autoria
--- | --- | --- | ---
1 | tema de abertura | tela de início | própria
2 | tema de combate | cena de combate com inimigos comuns | Hans Zimmer
3 | ... 

## 3.4. Inventário e Bestiário (sprint 3)

### 3.4.1. Bestiário

*\<opcional\> Caso seu jogo tenha inimigos, descreva-os aqui, indicando nomes, imagens, momentos de aparição, funções e impactos no jogo. Utilize listas ou tabelas para organizar esta seção. Caso utilize material de terceiros em licença Creative Commons, não deixe de citar os autores/fontes.* 

*Exemplo de tabela*
\# | inimigo |  | ocorrências | função | impacto | efeito sonoro
--- | --- | --- | --- | --- | --- | ---
1 | Discordia |![Boss01](https://github.com/user-attachments/assets/7ef6ff27-c7af-470d-97db-70de32014e43) |  Boss fase 1 | causar caos na primeira fase submetendo o personagem a diversos desafios | Dificultar o avanço do personagem para o próximo nivel | não contém efeitos sonoros
2 |  | <img src="../assets/inimigo1.PNG"> | Boss fase 2 |  |  | 
3 | ... 

## 3.5. Gameflow (Diagrama de cenas) (sprint 2)
O diagrama de cenas tem o objetivo de mostrar o fluxo dos eventos em uma sequência, como uma linha do tempo. Ela ajuda a coompreender melhor as etapas do jogo, como a transição de telas e botões. Segue o nosso diagrama de cenas: 

<div align="center">
  
 ![Diagrama de cenas (Sprint 3)](https://github.com/user-attachments/assets/b9a8cf22-a703-4d1f-bef6-084d1e1e0164)

<br><small style="margin-top: 4px; font-size: 10px;">Fonte: autores (2025)</small>
</div>


## 3.6. Regras do jogo (sprint 3)

  As regras do jogo estabelecidas no começo vao proporcionar uma estrutura de jogabilidade que vão ditar como o jogo vai funcionar. No nosso jogo as regras funcionam assim:

Cena de treinamento
- O jogador aprende os controles basicos de movimento, no eixo x e eixo y em um cenario fechado
- Para o jogador ir para a primeira tela de jogo ele deve chegar ao final da cena de treinamento

Primeira tela de jogo
- Na primeira tela o jogador vai interagir com um NPC
- Essa interação vai iniciar o primeiro Minigame

Primeiro Minigame

- O jogador precisa fazer as escolhas certas de resposta durante o diálogo com um grupo de NPC 's. Serão dadas duas opções para cada pergunta ou frase
- Ao acertar, o jogador acumula pontos, e ao chegar a um certo número de acertos, a discussão é resolvida e o personagem é liberado para pegar o elevador

Segundo Minigame

- Na primeira parte desse Minigame o jogador precisa organizar os departamentos de acordo com suas funções. Eles terão que arrastar os ícones de cada setor (Administração, Financeiro, RH, Comercial e Produção) para as áreas corretas.(conectar as palavras e conceitos)

Para a segunda parte dessa fase diversas caixas foram espalhadas

- Cada caixa representa um tipo de fundo de investimento e precisa ser conectada na área correta.
- Também vai ter diversos papéis com explicações de fundo espalhados no chão; o jogador precisa preencher as lacunas corretamente para restaurar as informações.
- Além disso caixas de investimento com descrições que devem ser levadas para a área correta

Na terceira fase desse minigame
- O jogador deve responder perguntas e identificar informações verdadeiras e falsas
- Após completar a terceira fase o jogador é liberado para pegar o elevador e mudar de fase


Terceiro Minigame

- O jogador recebe três cenários diferentes e precisa escolher a taxa correta que se aplicaria a cada caso.

- Depois desse Minigame ele vai para o ultimo


Ultimo Minigame

- O jogador vai enfrentar o boss com perguntas, cada pergunta correta causa dano no boss, cada pergunta errada o personagem leva dano

- Se o jogador perder ele renicia esse Minigame com perguntas diferentes

As regras do jogo foram criadas para criar um jogo coerente e funcional. As regras mostram como o jogador deve jogar o jogo, para proporcionar uma experiencia mais interessante e lógica.


## 3.7. Mecânicas do jogo (sprint 3)

As mecânicas são os controles que o jogador dispõe para explorar todo o universo do jogo. No caso do Corp-Quest, temos um jogo de plataforma 2D, assim como vistos em jogos de "Beat em up", em que os principais comandos que permitem com que o jogador se mova nos eixos X e Y são: as setas do teclado (cima, baixo, esquerda, direita) e teclas W,A,S,D. Somado a isso, nosso jogo inclui três minijogos diferentes que são do tipo trivia, cada um conta com uma mecânica específica para que nosso jogador resolva-os.

<div align="center">
<sub>Tabela - Relação mecânicas do jogo </sub>
</div>

| Mecânicas || 
|---|---|
| Subir |  "Seta para cima" ou tecla "W". Usado para alcançar elementos que permitem o jogador mudar de ambiente, como portas e elevadores, além de explorar o mapa nos eixos verticais.
| Descer  |  "Seta para baixo" ou tecla "S". Assim como o "W" é usado para o jogador se movimentar no mapa nos eixos verticais.
| Caminhar | "Seta para a direita" e "Seta para a esquerda" ou as teclas "D" e "A" são usadas para explorar o mapa nos eixos horizontais, direito e esquerdo, respectivamente.
| Interação e Ação | Tecla "E". Usada para interagir com objetos interativos do mapa e realizar ações do jogador durante a gameplay.
| Minijogo Fase 1 | A mecânica do minijogo da fase 1 foi inspirada no Tinder. Na tela do jogador, haverá um cartão com duas sentenças, uma na esquerda e outra na direita, ambas relacionadas a uma pergunta no título. Diante disso, o jogador deve arrastar o cartão para direita ou para a esquerda com a sentença que melhor responde o título. Cada rodada apresenta uma única alternativa correta e após a escolha do jogador, ele recebera um feedback instantâneo com efeitos sonoros e visuais sobre a acertividade da resposta.

<div align="center">
<sup>Fonte: Material produzido pelos autores (2025)</sup>
</div>

Portanto, essas são as principais funcionalidades do jogo Corp-Quest, que o jogador terá que entender e dominar para superar os desafios de cada fase.

## 3.8. Implementação Matemática de Animação/Movimento (sprint 3)

# Implementação da Movimentação e Animação do Personagem

## 1. Introdução
A movimentação do protagonista do jogo segue princípios básicos de cinemática, considerando velocidade constante e atualização da posição a cada frame. A anímação e o som dos passos também são ativados dependendo do estado de movimento do personagem.

```javascript
    class cena1fase1 extends Phaser.Scene {
    constructor() {
        super({ key: 'cena1fase1' });
    }

    create() {
        this.protagonista = this.physics.add.sprite(400, 700, 'breath', 0).setCollideWorldBounds(true).setScale(0.75);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys({
            W: Phaser.Input.Keyboard.KeyCodes.W,
            A: Phaser.Input.Keyboard.KeyCodes.A,
            S: Phaser.Input.Keyboard.KeyCodes.S,
            D: Phaser.Input.Keyboard.KeyCodes.D
        });
        this.footstepSound = this.sound.add('footstep');

         this.anims.create({
            key: 'breath',
            frames: this.anims.generateFrameNumbers('breath', { start: 0, end: 9 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('run', { start: 0, end: 2 }),
            frameRate: 9,
            repeat: -1
        });

        this.protagonista.play('breath');

        this.cursors = this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys({
            W: Phaser.Input.Keyboard.KeyCodes.W,
            A: Phaser.Input.Keyboard.KeyCodes.A,
            S: Phaser.Input.Keyboard.KeyCodes.S,
            D: Phaser.Input.Keyboard.KeyCodes.D
        });
        // Adiciona a tecla "E"
        this.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);

        this.physics.add.collider(this.protagonista, this.dafiniObjeto);
    }

   update() {
        let speed = 570;
        let moving = false;

        // sequência lógica para movimento:
        if (this.cursors.left.isDown || this.keys.A.isDown) {
            this.protagonista.setVelocityX(-speed);
            this.protagonista.setFlipX(true);
            moving = true;
        } else if (this.cursors.right.isDown || this.keys.D.isDown) {
            this.protagonista.setVelocityX(speed);
            this.protagonista.setFlipX(false);
            moving = true;
        } else {
            this.protagonista.setVelocityX(0);
        }
        if (this.cursors.up.isDown || this.keys.W.isDown) {
            this.protagonista.setVelocityY(-speed);
            moving = true;
        } else if (this.cursors.down.isDown || this.keys.S.isDown) {
            this.protagonista.setVelocityY(speed);
            moving = true;
        } else {
            this.protagonista.setVelocityY(0);
        }

        // sequência lógica para animação:
        if (moving == true) {
            this.protagonista.anims.play('run', true);
            if (!this.footstepSound.isPlaying) {
                this.footstepSound.play({ loop: true });
            }
        } else {
            this.protagonista.anims.play('breath', true);
            this.footstepSound.stop();
        }

        // verifica se o jogador está perto da Dafini
        let distance = Phaser.Math.Distance.Between(
            this.protagonista.x, 
            this.protagonista.y, 
            this.dafiniObjeto.x, 
            this.dafiniObjeto.y
        );

        if (distance < 200) { // define a distância para ativar o botão "E"
            this.pertoDafini = true;
            this.teclaEObjeto.setVisible(true);
            this.teclaEObjeto.setPosition(this.dafiniObjeto.x - 100, this.dafiniObjeto.y - 100);
        } else {
            this.pertoDafini = false;
            this.teclaEObjeto.setVisible(false);
        }
        

        // se pressionar "E" e estiver perto da Dafini, inicia o diálogo
        if (this.pertoDafini && Phaser.Input.Keyboard.JustDown(this.keyE)) {
            this.comecarDialogo();
        }
    }

    comecarDialogo() {
        // mostra o balão de fala e o texto
        this.caixaTextoObjeto.setVisible(true);
        this.textoObjeto.setVisible(true);
        this.textoObjeto.setText(this.arrayTextos[this.textoIndex]);

        // aumenta o índice do diálogo
        this.textoIndex++;

        // quando terminar o diálogo
        if (this.textoIndex >= this.arrayTextos.length) {
            this.terminarDialogo();
        }
    }

    terminarDialogo() {
        // esconde o balão de fala e o texto
        this.caixaTextoObjeto.setVisible(false);
        this.textoObjeto.setVisible(false);
        this.textoIndex = 0; //repetir diálogo
    }
}
```

## 2. Modelagem Matemática da Movimentação
A posição do personagem é atualizada a cada frame com base na equação do movimento uniformemente variado:

![image](https://github.com/user-attachments/assets/b8d6726c-b53a-4df1-94a4-910f7baced18)


Onde:
- ![image](https://github.com/user-attachments/assets/904a325e-2306-45d4-8dab-f9289de5fa30) é a posição do personagem no instante ![image](https://github.com/user-attachments/assets/59f93073-9a43-4303-b621-025bb7acabf1)

- ![image](https://github.com/user-attachments/assets/82c3e242-786b-490f-8611-25654a5b26a6) é a posição inicial do personagem
- ![image](https://github.com/user-attachments/assets/3da8524d-55cb-4777-aa9b-6e34224421be) é a velocidade do personagem
-  ![image](https://github.com/user-attachments/assets/59f93073-9a43-4303-b621-025bb7acabf1) é o tempo

No código, a velocidade do personagem é definida como uma constante:

![image](https://github.com/user-attachments/assets/1d051254-4790-48c9-8193-1ade1d5d11a6)


A direção do vetor velocidade é determinada pelas teclas pressionadas:

![image](https://github.com/user-attachments/assets/960ffd06-a84c-4373-810f-d69f3772bffd)


Onde:
-![image](https://github.com/user-attachments/assets/66d80391-b037-427a-a31a-c269afc7aca2) se a seta para esquerda ou a tecla "A" estiver pressionada, ![image](https://github.com/user-attachments/assets/e6a17d09-b713-4f99-bc95-1435ec941017) se a seta para direita ou a tecla "D" estiver pressionada, e ![image](https://github.com/user-attachments/assets/1488e384-78ae-4aca-9001-e032f47f6a5a) caso contrário.
- ![image](https://github.com/user-attachments/assets/cc9999f6-46ce-4c5a-9035-3e00118a100a) se a seta para cima ou "W" estiver pressionada,![image](https://github.com/user-attachments/assets/5a16ca93-5c16-48fb-bb4c-47954250f3da) se a seta para baixo ou "S" estiver pressionada, e ![image](https://github.com/user-attachments/assets/47cd9a9d-894d-42f7-af29-003789d8b207) caso contrário.

A cada frame, a posição do personagem é atualizada com:

![image](https://github.com/user-attachments/assets/6a45c3bc-1cb0-4e99-ac8d-3d8bf0ff97a0)


Onde ![image](https://github.com/user-attachments/assets/062b0ffe-7412-4129-805f-a7854212da02) é o tempo entre os frames, fornecido pelo Phaser.

## 3. Detecção de Proximidade
A detecção de proximidade com a NPC Dafini é baseada na distância euclidiana:

![image](https://github.com/user-attachments/assets/721d6d4a-3016-4b30-855c-277c3a5cbb19)


Onde:
- ![image](https://github.com/user-attachments/assets/1bf5ba17-e40f-4dcf-add3-8436ee47d581) são as coordenadas do protagonista
- ![image](https://github.com/user-attachments/assets/c550d6a7-daf8-4be4-ab74-c18d1e8db033) são as coordenadas da NPC Dafini
- _d_ é a distância entre ambos

Se _d_ _<_ _200_, o jogo exibe um ícone de interação (tecla "E").

## 4. Lógica de Animação e Som
A animação e o som dos passos seguem a lógica:

- Se ![image](https://github.com/user-attachments/assets/041b8bfc-6297-486d-9c0a-fd8ad8df14a8), então a animação "run" é ativada e o som de passos é tocado.
- Se ![image](https://github.com/user-attachments/assets/57440432-a978-4df7-be55-1202b6bfbc12), a animação "breath" é ativada e o som de passos é interrompido.

## 5. Conclusão
A implementação da movimentação segue princípios básicos da física, utilizando a equação do movimento retilíneo uniforme e a fórmula da distância euclidiana para verificação de proximidade. Isso garante uma movimentação fluida e interação precisa dentro do jogo.


# <a name="c4"></a>4. Desenvolvimento do Jogo

## 4.1. Desenvolvimento preliminar do jogo (sprint 1)

O desenvolvimento inicial do jogo **CorpQuest: The Business Task Game** focou na criação da estrutura básica, incluindo a tela inicial, a movimentação do personagem e a interação com botões no menu. Este primeiro sprint estabeleceu os fundamentos visuais e de jogabilidade que serão aprimorados nas próximas etapas.

## **Entrega Inicial**

### Primeira Versão do Jogo  
A primeira versão do jogo entregou os seguintes componentes:
<div align="center">
    <small><strong style="font-size: 12px;">Tela inicial com logotipo e música de fundo (Figura 1);</strong></small><br>
    <img width="1311" alt="Screenshot 2025-02-13 at 15 04 16" src="https://github.com/user-attachments/assets/01ee5be9-ff84-453a-97f6-1d6c111bc2e7" />
    <br><small style="margin-top: 4px; font-size: 10px;">Fonte: autores (2025)</small>
</div>

<div align="center">
    <small><strong style="font-size: 12px;">Menu interativo contendo botões para Jogar, Controles e FAQ (Figura 2);</strong></small><br>
     <img <img width="1276" alt="Screenshot 2025-03-12 at 09 17 43" src="https://github.com/user-attachments/assets/7f03d809-5f61-40d5-8921-d981ae7d080f" />
    <br><small style="margin-top: 4px; font-size: 10px;">Fonte: autores (2025)</small>
 </div>

#### **Configuração inicial do Phaser**
O jogo foi estruturado utilizando o framework **Phaser 3**, com as configurações básicas definidas no arquivo `jogo.js`:
```javascript
const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scene: [SceneIntro, SceneMenu, ScenePlay, SceneOptions, SceneControls, SceneFnQ]
};
const game = new Phaser.Game(config);
```
Essa configuração define o tamanho da tela e a ordem das cenas, garantindo um fluxo contínuo na navegação.

#### **Tela inicial e Menu interativo**
A **tela inicial** (Figura 1) apresenta o logotipo do jogo e uma música ambiente. O jogador é instruído a pressionar `ENTER` para avançar ao menu principal, onde encontram-se os botões interativos para iniciar a experiência.

Os botões do menu (Figura 2) possuem um efeito de **hover** e redirecionam para uma cena diferente, como `ScenePlay`:
```javascript
playButton.on('pointerdown', () => transitionToScene('ScenePlay'));
```
### **Dificuldades Encontradas**
Durante esse sprint, algumas dificuldades foram identificadas:
- **Carregamento de assets**: Alguns arquivos não estavam sendo carregados corretamente devido a erros nos caminhos das imagens;
- **Organização das cenas**: Ajustes foram necessários para garantir que as transições entre telas ocorressem de maneira fluida.

### **Próximos Passos**
Para os próximos sprints, os seguintes aprimoramentos serão implementados:
- Spritesheets do **protagonista** para criar movimento no jogo;
- Criação e adição do **Cenário Inicial** ao jogo

Este primeiro sprint estabeleceu a base para o desenvolvimento contínuo do jogo, garantindo que o aprendizado dos novos colaboradores ocorra de forma **imersiva, divertida e eficaz**.

## 4.2. Desenvolvimento básico do jogo (sprint 2)

#### **Menu e Botão Jogar interativo**
O botão **Jogar** do **menu** possue um efeito de **hover** e redireciona para a cena `ScenePlay`:
```javascript
playButton.on('pointerdown', () => transitionToScene('ScenePlay'));
```

### **Cena Inicial do Jogo**
A Cena Inicial do jogo começa no hall de um prédio empresarial, onde antes de entrar o personagem deve passar por um catraca para acessar um elevador que dará início a primeira fase. Sendo apresentado na cena não só o personagem, mas tambem sua spritesheet, movimentação e o som de seus passos:

<div align="center">
    <small><strong style="font-size: 12px;">Hall de entrada (Figura 3);</strong></small><br>
    <img src="https://github.com/user-attachments/assets/b51ac094-d026-41df-9bb5-c2d689f9aed4" alt="Hall de entrada">
    <br><small style="margin-top: 4px; font-size: 10px;">Fonte: autores (2025)</small>
</div>

<br><div align="center">
    <small><strong style="font-size: 12px;">Código: Carregamento das imagens e sons do personagem (Figura 4);</strong></small>
  
```javascript
class ScenePlay extends Phaser.Scene {
    constructor() {
        super({ key: 'ScenePlay' });
    }

    preload() {
        this.load.spritesheet('protagonista', 'assets/2-sheet.png', { frameWidth: 990, frameHeight: 990 });
        this.load.spritesheet('protagonista run', 'assets/Run1-Sheet-sheet.png', { frameWidth: 990, frameHeight: 990 });
        this.load.audio('footstep', 'assets/Passos.mp3'); // Caminho do som de passos

    }
```
<small style="margin-top: 4px; font-size: 10px;">Fonte: autores (2025)</small>
</div>

<div align="center">
    <small><strong style="font-size: 12px;">Código: Criação das animações do personagem (Figura 5);</strong></small>

```javascript
    create() {
        // Criação da sprite do protagonista
        this.protagonista = this.add.sprite(200, 600, 'protagonista').setScale(0.13);  // Ajuste de escala

        this.footstepSound = this.sound.add('footstep');


        // Criando animações para o protagonista (movimento)
        this.anims.create({
            key: 'breath',
            frames: this.anims.generateFrameNumbers('protagonista', { start: 0, end: 2 }), // Ajuste conforme os quadros da sua sprite sheet
            frameRate: 3,
            repeat: -1
        });

        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('protagonista run', { start: 0, end: 2 }), // Ajuste conforme os quadros da sua sprite sheet
            frameRate: 10,
            repeat: -1
        });

        // Reproduzindo a animação de respiração (padrão)
        this.protagonista.play('breath');

        // Movimentação
        this.cursors = this.input.keyboard.createCursorKeys();  // Captura as teclas de seta
        this.keys = this.input.keyboard.addKeys({ // Captura as teclas WASD
            W: Phaser.Input.Keyboard.KeyCodes.W,
            A: Phaser.Input.Keyboard.KeyCodes.A,
            S: Phaser.Input.Keyboard.KeyCodes.S,
            D: Phaser.Input.Keyboard.KeyCodes.D
        });
```
<small style="margin-top: 4px; font-size: 10px;">Fonte: autores (2025)</small>
</div>


#### **Movimentação do Personagem**
O personagem principal foi criado com arte pixelada e implementado no cenário inicial (`ScenePlay`). Sua movimentação é baseada nas teclas **W, A, S, D** ou nas **setas direcionais**, tendo limitações de movimento de acordo com a poposta do noso jogo:

<div align="center">
    <small><strong style="font-size: 12px;">Movimentação do personagem (Figura 6);</strong></small><br>
    <img src="https://github.com/user-attachments/assets/47677960-8bbb-4b7d-aaed-48826c7158da" alt="Movimentação do personagem">
    <br><small style="margin-top: 4px; font-size: 10px;">Fonte: autores (2025)</small>
</div>

<br><div align="center">
    <small><strong style="font-size: 12px;">Código: Configuração da movimentação do personagem (Figura 7);</strong></small><br>
  
```javascript
  this.cursors = this.input.keyboard.createCursorKeys();  // Captura as teclas de seta
  this.keys = this.input.keyboard.addKeys({ // Captura as teclas WASD
      W: Phaser.Input.Keyboard.KeyCodes.W,
      A: Phaser.Input.Keyboard.KeyCodes.A,
      S: Phaser.Input.Keyboard.KeyCodes.S,
      D: Phaser.Input.Keyboard.KeyCodes.D
  });

  let speed = 200;
  let velocityX = 0;
  let velocityY = 0;
    
  if (this.cursors.left.isDown || this.keys.A.isDown) {
      velocityX = -speed;
      this.protagonista.play('run', true);
      this.protagonista.setFlipX(true);
  } else if (this.cursors.right.isDown || this.keys.D.isDown) {
      velocityX = speed;
      this.protagonista.play('run', true);
      this.protagonista.setFlipX(false);
  } else if (this.cursors.up.isDown || this.keys.W.isDown) {
      velocityY = -speed;
      this.protagonista.play('run', true);
  } else if (this.cursors.down.isDown || this.keys.S.isDown) {
      velocityY = speed;
      this.protagonista.play('run', true);
  } else {
      this.protagonista.play('breath', true);
      this.footstepSound.stop();
  }
    
  if (velocityX !== 0 || velocityY !== 0) {
      if (!this.footstepSound.isPlaying) {
          this.footstepSound.play({ loop: true });
      }
  } else {
      this.footstepSound.stop();
  }
    
  let newX = this.protagonista.x + velocityX * this.game.loop.delta / 1000;
  let newY = this.protagonista.y + velocityY * this.game.loop.delta / 1000;
    
  let marginX = 15;
  let upperMarginY = 570; // Margem superior
  let lowerMarginY = 650; // Margem inferior

  newX = Phaser.Math.Clamp(newX, marginX, this.cameras.main.width - marginX);
  newY = Phaser.Math.Clamp(newY, upperMarginY, lowerMarginY);


  this.protagonista.x = newX;
  this.protagonista.y = newY;
  }
}
```
<small style="margin-top: 4px; font-size: 10px;">Fonte: autores (2025)</small>
</div>

Isso permite ao jogador explorar o cenário e interagir com futuras mecânicas do jogo.


### **Dificuldades Encontradas**
Durante esse sprint, algumas dificuldades foram identificadas:
- **Implementação da SpriteSheet no jogo**: Encontramos dificuldades para a implementação da spritesheet no jogo devido a resoluçao de pixels do personagem e a organização do código;
- **Funcionamento correto da tela da primeira fase**: Ajustes foram necessários para garantir que o funcionamento da tela fosse possivel.

### **Próximos Passos**
Para os próximos sprints, os seguintes aprimoramentos serão implementados:
- Adição de **missões e desafios** interativos dentro do Hall;
- Implementação de **diálogos com NPCs** para ensinar conceitos de onboarding do BTG;
- Implementação dos **Cenários e Interações** de cada uma das fases;

Este segundo sprint possibilitou dar continuidade para o nosso jogo, planejando ações e ferramentas que serão implementadas e utilizadas nas próximas etapas do nosso jogo, com mecânicas e cenários mais bem elaborados. 


## 4.3. Desenvolvimento intermediário do jogo (sprint 3)

### **Desenvolvimento Intermediário do Jogo (Sprint 3)**

#### **Alterações na Interface e Estrutura**

- **Atualização no Menu**: A mudança no texto do menu de "Press enter to start" para "Pressione enter para jogar" visa uma melhor acessibilidade e personalização da interface.
- **Remoção de Botão de Opções**: A tela de menu foi simplificada removendo o botão de opções, focando na jogabilidade inicial.
- **Criação de Novas Cenas**:
  1. **Controles**: Tela informativa sobre como controlar o personagem.
  2. **FAQ**: Perguntas frequentes para facilitar a compreensão do jogo.
  3. **Pause**: Funcionalidade de pausar o jogo e retornar ao menu.
  4. **Cena Tutorial**: Introdução interativa aos controles e mecânicas básicas.

#### **Melhorias na Jogabilidade**

- **Física do Personagem**: A movimentação do personagem foi refinada, incluindo colisões mais precisas e o primeiro diálogo interativo com NPCs.
- **Cena 1**: A cena inicial foi aprimorada com a implementação de uma câmera que segue o personagem de forma fluida, além da interação com objetos e obstáculos no cenário.
- **Cena Tutorial**: Foi criada uma cena que ensina os controles principais do jogo (WASD, setas, "E" para interagir). Após completar o tutorial, o jogador é redirecionado para a cena principal. A introdução ao primeiro NPC interativo foi feita com uma fala simples.
  
#### **Aprimoramentos e Correções**

- **Ajustes na Hitbox**: A precisão das colisões foi corrigida para garantir interações mais naturais.
- **Padronização do Código**: O código foi reorganizado com uma nomenclatura mais clara (CamelCase) para facilitar o entendimento e a manutenção.
- **Correção nas Transições**: Pequenos erros nas transições entre a Cena Tutorial e a primeira fase foram corrigidos.

#### **Dificuldades Encontradas**

1. **Ajuste da Hitbox**: Encontramos dificuldades para ajustar as colisões do personagem e objetos, o que gerou alguns erros de movimentação e interação.
2. **Implementação da Câmera**: A câmera foi configurada para seguir o personagem, mas havia problemas de "glitches" em alguns momentos, especialmente ao mudar de direção.
3. **Transições de Cenas**: A transição entre a Cena Tutorial e a Cena 1 estava causando atrasos e erros de carregamento.
4. **Padronização do Código**: A reorganização do código e a nomenclatura dos arquivos exigiram ajustes que atrasaram um pouco o progresso.

#### **Próximos Passos**

1. **Aprimoramento da Interatividade com NPCs**: Expandir as opções de diálogo com NPCs para incluir mais interações, ensinando conceitos essenciais do jogo.
2. **Implementação de Animações**: As animações do personagem serão ampliadas para incluir diferentes movimentos e reações ao ambiente.
3. **Desenvolvimento de Obstáculos Dinâmicos**: Será criado um sistema de obstáculos que alteram a dificuldade das fases conforme o progresso do jogador.
4. **Criação de Sistema de Missões**: Implementar missões e objetivos claros para guiar o jogador na exploração do jogo e na aprendizagem de novos conceitos.

#### **Ilustração do Desenvolvimento**

1. **Menu Atualizado**:
   - O botão **Jogar** agora apresenta uma animação de hover, destacando a interação. O código para a navegação é o seguinte:
   ```javascript
   playButton.on('pointerdown', () => transitionToScene('cena1fase1'));
   ```

2. **Cena Inicial (Hall de Entrada)**:
   
   - A cena foi enriquecida com a movimentação do personagem e animação de passos ao caminhar.
   ```javascript
   this.load.spritesheet('breath', 'src/assets/breathSheet.png', { frameWidth: 250, frameHeight: 296 });
   this.load.spritesheet('run', 'src/assets/runSheet.png', { frameWidth: 250, frameHeight: 296 });
   this.load.audio('footstep', 'assets/Passos.mp3');
   
   ```

   - **Animação do protagonista**:
    ```javascript
   this.anims.create({
            key: 'breath',
            frames: this.anims.generateFrameNumbers('breath', { start: 0, end: 9 }),
            frameRate: 10,
            repeat: -1
        });
    
    this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('run', { start: 0, end: 2 }),
            frameRate: 9,
            repeat: -1
        });
   
   ```

3. **Movimentação personagem**:

   ```javascript
    if (this.cursors.left.isDown || this.keys.A.isDown) {
              this.protagonista.setVelocityX(-speed);
              this.protagonista.setFlipX(true);
              moving = true;
          } else if (this.cursors.right.isDown || this.keys.D.isDown) {
              this.protagonista.setVelocityX(speed);
              this.protagonista.setFlipX(false);
              moving = true;
          } else {
              this.protagonista.setVelocityX(0);
          }
          if (this.cursors.up.isDown || this.keys.W.isDown) {
              this.protagonista.setVelocityY(-speed);
              moving = true;
          } else if (this.cursors.down.isDown || this.keys.S.isDown) {
              this.protagonista.setVelocityY(speed);
              moving = true;
          } else {
              this.protagonista.setVelocityY(0);
          }
   ```
4. **Interações/Transições**:
   - Agora nosso personagem tem interações com NPC'S e tambem adicionamos uma transição entre as cenas de tutorial e a cena da fase 1, assim que o personagem atinge o limite direito da tela.


   **Código transição de cena:**
     ```javascript
   // Verifica se o personagem chegou ao limite direito da tela
        if (this.protagonista.x >= 1100) {  // Ajuste conforme necessário
            this.footstepSound.stop(); // Para o som de passos
            this.scene.start('cena1fase1'); // Muda para a cena ScenePlay
        }
   ```
     
  **Código Interação com o NPC:**
   ```javascript
   let distance = Phaser.Math.Distance.Between(
            this.protagonista.x, 
            this.protagonista.y, 
            this.dafiniObjeto.x, 
            this.dafiniObjeto.y
        );

        if (distance < 200) { // define a distância para ativar o botão "E"
            this.pertoDafini = true;
            this.teclaEObjeto.setVisible(true);
            this.teclaEObjeto.setPosition(this.dafiniObjeto.x - 100, this.dafiniObjeto.y - 100);
        } else {
            this.pertoDafini = false;
            this.teclaEObjeto.setVisible(false);
        }
        

        // se pressionar "E" e estiver perto da Dafini, inicia o diálogo
        if (this.pertoDafini && Phaser.Input.Keyboard.JustDown(this.keyE)) {
            this.comecarDialogo();
        }
    }

    comecarDialogo() {
        // mostra o balão de fala e o texto
        this.caixaTextoObjeto.setVisible(true);
        this.textoObjeto.setVisible(true);
        this.textoObjeto.setText(this.arrayTextos[this.textoIndex]);

        // aumenta o índice do diálogo
        this.textoIndex++;

        // quando terminar o diálogo
        if (this.textoIndex >= this.arrayTextos.length) {
            this.terminarDialogo();
        }
    }

    terminarDialogo() {
        // esconde o balão de fala e o texto
        this.caixaTextoObjeto.setVisible(false);
        this.textoObjeto.setVisible(false);
        this.textoIndex = 0; //repetir diálogo
    }
}
   ```


   **O personagem também emite um som de passos durante o movimento**:

   ```javascript
  if (moving == true) {
            this.protagonista.anims.play('run', true);
            if (!this.footstepSound.isPlaying) {
                this.footstepSound.play({ loop: true });
            }
        } else {
            this.protagonista.anims.play('breath', true);
            this.footstepSound.stop();
        }
   ```

#### **Conclusão**
A versão intermediária do jogo apresenta progressos sólidos em várias áreas, incluindo física do personagem, interface, e estrutura de cenas. Apesar das dificuldades encontradas, como ajustes nas colisões e transições entre as cenas, o jogo já oferece uma experiência básica e interativa. Com os próximos passos, como aprimoramento das animações e adição de missões, o jogo está pronto para expandir suas mecânicas e aumentar o engajamento do jogador.

## 4.4. Desenvolvimento final do MVP (sprint 4)

*Descreva e ilustre aqui o desenvolvimento da versão final do jogo, explicando brevemente o que foi entregue em termos de MVP. Utilize prints de tela para ilustrar. Indique as eventuais dificuldades e planos futuros.*

## 4.5. Revisão do MVP (sprint 5)

*Descreva e ilustre aqui o desenvolvimento dos refinamentos e revisões da versão final do jogo, explicando brevemente o que foi entregue em termos de MVP. Utilize prints de tela para ilustrar.*

# <a name="c5"></a>5. Testes

## 5.1. Casos de Teste (sprints 2 a 4)

*Descreva nesta seção os casos de teste comuns que podem ser executados a qualquer momento para testar o funcionamento e integração das partes do jogo. Utilize tabelas para facilitar a organização.*

*Exemplo de tabela*
\# | pré-condição | descrição do teste | pós-condição 
--- | --- | --- | --- 
1 | posicionar o jogo na tela de abertura | inciar o jogo ao apertar enter | o jogo deve iniciar do menu inicial
2 | menu inicial aberto | verificar se as opções de botões são exibidas| quatro opções devem aparecer 
3 | menu inicial: o jogador deve clicar no botão "jogar" | a primeira cena do jogo deve aparecer | o jogador poderá começar a jogar 
4 | menu inicial: o jogador pode clicar no botão "controles" | o menu de controles deve aparecer | o jogador deve aprender a usar os controles do jogo
5 | menu inicial: o jogador pode clicar no botão "FAQ" | a tela de FAQ deve aparecer | o jogador poderá ver perguntas e respostas frequentes sobre o jogo
6 | cena de tutorial: aberta ao clicar "jogar" | jogador deva aprender mecanica de movimentação e interação | ele deve seguir a seta para inicil da fase 1
7 | primeira cena do jogo: aberta | o jogador poderá clicar nas setas do seu teclado | ele irá se movimentar nas direções propostas, respectivamete 
8 | cena de pause: aberta | iniciar a cena ao apertar botão "Esc" no teclado | cena de pause abre e jogador poderá usar os botões "back to game", "controles" e "FAQ", escolhendo se volta para o jogo ou acessa outras duas opções de cenas
9 | Interagir com NPC | deve-se abrir uma caixa de conversa com o NPC ao apertar "E" dentro da área do mesmo | Jogador deve entender as informações principais para dar seguimento na fase

## 5.2. Testes de jogabilidade (playtests) (sprint 4)

### 5.2.1 Registros de testes

*Descreva nesta seção as sessões de teste/entrevista com diferentes jogadores. Registre cada teste conforme o template a seguir.*

Nome | João Jonas (use nomes fictícios)
--- | ---
Já possuía experiência prévia com games? | sim, é um jogador casual
Conseguiu iniciar o jogo? | sim
Entendeu as regras e mecânicas do jogo? | entendeu as regras, mas sobre as mecânicas, apenas as essenciais, não explorou os comandos complexos
Conseguiu progredir no jogo? | sim, sem dificuldades  
Apresentou dificuldades? | Não, conseguiu jogar com facilidade e afirmou ser fácil
Que nota deu ao jogo? | 9.0
O que gostou no jogo? | Gostou  de como o jogo vai ficando mais difícil ao longo do tempo sem deixar de ser divertido
O que poderia melhorar no jogo? | A responsividade do personagem aos controles, disse que havia um pouco de atraso desde o momento do comando até a resposta do personagem

### 5.2.2 Melhorias

*Descreva nesta seção um plano de melhorias sobre o jogo, com base nos resultados dos testes de jogabilidade*

# <a name="c6"></a>6. Conclusões e trabalhos futuros (sprint 5)

*Escreva de que formas a solução do jogo atingiu os objetivos descritos na seção 1 deste documento. Indique pontos fortes e pontos a melhorar de maneira geral.*

*Relacione os pontos de melhorias evidenciados nos testes com plano de ações para serem implementadas no jogo. O grupo não precisa implementá-las, pode deixar registrado aqui o plano para futuros desenvolvimentos.*

*Relacione também quaisquer ideias que o grupo tenha para melhorias futuras*

# <a name="c7"></a>7. Referências (sprint 5)

_Incluir as principais referências de seu projeto, para que seu parceiro possa consultar caso ele se interessar em aprofundar. Um exemplo de referência de livro e de site:_<br>

LUCK, Heloisa. Liderança em gestão escolar. 4. ed. Petrópolis: Vozes, 2010. <br>
SOBRENOME, Nome. Título do livro: subtítulo do livro. Edição. Cidade de publicação: Nome da editora, Ano de publicação. <br>

INTELI. Adalove. Disponível em: https://adalove.inteli.edu.br/feed. Acesso em: 1 out. 2023 <br>
SOBRENOME, Nome. Título do site. Disponível em: link do site. Acesso em: Dia Mês Ano

# <a name="c8"></a>Anexos

*Inclua aqui quaisquer complementos para seu projeto, como diagramas, imagens, tabelas etc. Organize em sub-tópicos utilizando headings menores (use ## ou ### para isso)*
