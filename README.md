Projeto SCOUT - API para Gerenciamento de Jogadores

Este projeto consiste em uma API básica para gerenciar jogadores, que utiliza Node.js e um banco de dados Oracle. A aplicação é executada em contêineres Docker, incluindo um serviço de API e um banco de dados Oracle XE.

Estrutura do projeto:
SCOUT/
├── docker-compose.yml      # Arquivo de configuração do Docker Compose
└── api/                    # Pasta com o código da API
    ├── Dockerfile          # Dockerfile para a construção da imagem da API
    ├── package.json        # Dependências e configurações do projeto Node.js
    ├── package-lock.json   # Versões exatas das dependências
    └── server.js           # Código principal da API em Node.js

Pré-requisitos
Para rodar este projeto, é necessário ter instalado:

Docker
Docker Compose
Git (para clonar o repositório)

Clonando o Repositório
Primeiro, clone este repositório para a sua máquina local:
git clone https://github.com/gabrieltf1901/CP3_DEVOPS.git


Configuração e Execução

Passo 1: Construir e Iniciar os Contêineres
Para rodar o projeto, utilize o Docker Compose. Este comando irá construir as imagens e iniciar os contêineres em background.
docker-compose up -d --build

Esse comando fará o seguinte:

API: Construirá a imagem da API Node.js localizada em ./api e a executará na porta 3000.
Banco de Dados Oracle: Iniciará um contêiner Oracle XE, com persistência de dados habilitada através de um volume Docker.

Passo 2: Verificar se os Serviços Estão Ativos
Após o comando acima, você pode verificar se os contêineres estão em execução com:
docker-compose ps

A saída mostrará os contêineres api e database em execução. A API estará disponível em http://localhost:3000/dados_jogador_dev

Passo 3: Testar a API
Para testar a API, você pode usar ferramentas como o Postman ou o curl.

Exemplos de endpoints disponíveis:

GET /dados_jogador_dev - Lista todos os jogadores.
GET /dados_jogador_dev/:id - Busca um jogador pelo ID.
POST /dados_jogador_dev - Adiciona um novo jogador.
PUT /dados_jogador_dev/:id - Atualiza um jogador pelo ID.
DELETE /dados_jogador_dev/:id - Remove um jogador pelo ID.


Dependências do Projeto
As dependências da API são gerenciadas pelo package.json dentro da pasta api. As principais dependências são:

express: Framework minimalista para criar servidores web com Node.js.
O Docker se encarregará de instalar essas dependências automaticamente ao construir o contêiner.

Arquitetura do Projeto
A arquitetura do projeto é composta por dois serviços principais, que são definidos no arquivo docker-compose.yml:

API (Node.js): Responsável por fornecer endpoints para gerenciar jogadores.
Banco de Dados Oracle XE: Responsável por armazenar os dados de jogadores e persistir as informações.
Cada serviço é executado em um contêiner independente, e o Docker Compose facilita o gerenciamento desses contêineres. O volume persistente para o banco de dados garante que os dados não sejam perdidos quando o contêiner for reiniciado.


Comandos Úteis
Parar todos os contêineres:
docker-compose down

Reiniciar os contêineres com build:
docker-compose up -d --build

Verificar logs dos contêineres:
docker-compose logs -f

Observação
Para modificar ou estender a aplicação, edite os arquivos na pasta api e reconstrua o contêiner da API com:
docker-compose up -d --build
