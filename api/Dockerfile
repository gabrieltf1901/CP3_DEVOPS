# Use uma imagem Node.js como base
FROM node:14

# Crie o diretório de trabalho
WORKDIR /usr/src/app

# Copie os arquivos de dependências para instalar as dependências
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da API para o contêiner
COPY . .

# Exponha a porta usada pela API
EXPOSE 3000

# Comando para iniciar a API
CMD ["npm", "start"]
