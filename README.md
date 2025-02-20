# Sistema de Gerenciamento de Equipamentos de TI  

> "Educação nunca foi despesa. Sempre foi investimento com retorno garantido." — Arthur Lewis

![java](https://badgen.net/badge/Java/17/red?scale=1.2) ![kotlin](https://badgen.net/badge/Kotlin/1.9.25/green?scale=1.2) ![spring-boot](https://badgen.net/badge/Spring%20Boot/3.3.3/blue?scale=1.2) ![react](https://badgen.net/badge/React/18.2.0/blue?scale=1.2) ![node](https://badgen.net/badge/Node.js/18.x/orange?scale=1.2)

**Olá, Dev!**  

Este é um projeto full stack com arquitetura API RESTful no backend, desenvolvido em **Kotlin** com o framework **Spring Boot**, e um frontend criado em **React**.  

O sistema tem como objetivo simplificar o gerenciamento dos equipamentos de TI, facilitando o cadastro, atualização e visualização dos dados de forma organizada.  

---

## Pré-Requisitos  

### Backend  

- IntelliJ IDEA  
    - Como instalar?  
        - Instalação manual: [baixar](https://www.jetbrains.com/idea/download/)  
- Java JDK 17  
    - Como instalar?  
        - Instalação manual: [baixar](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)  
- Docker Desktop  
    - Como instalar?  
        - Instalação manual: [baixar](https://www.docker.com/products/docker-desktop/)  

### Frontend  

- Node.js (versão 18.x)  
    - Como instalar?  
        - Instalação manual: [baixar](https://nodejs.org/)  
- Um editor de código, como **VSCode**  
    - Como instalar?  
        - Instalação manual: [baixar](https://code.visualstudio.com/)  

---

## Ambiente de Desenvolvimento  

### Configuração do Backend  

1. **Importe o Projeto no IntelliJ IDEA**  
    - Abra o IntelliJ IDEA.  
    - Selecione `File -> Open` e navegue até a pasta `backend`.  
    - Selecione a pasta e clique em `Open`.  

2. **Configuração do Gradle**  
    - Após a importação, o Gradle será configurado automaticamente.  
    - Caso necessário, force a sincronização clicando em `Build -> Build Project`.  

3. **Configuração do Docker**  
    - Para testar a aplicação com o banco de dados PostgreSQL, inicie o Docker Desktop.  
    - No terminal, execute o comando abaixo na pasta `backend`:  

    ```bash  
    docker compose up
    ```  

4. **Execute o Backend**  
    - No IntelliJ IDEA, localize a classe `EquipmentsApplication` (marcada com `@SpringBootApplication`).  
    - Clique com o botão direito na classe e selecione `Run EquipmentsApplication.main()`.  

5. **Acesse o Swagger**  
    - Após a aplicação iniciar, acesse o Swagger em: [localhost:8080](http://localhost:8080/swagger-ui/index.html).  

### Configuração do Frontend  

1. **Instale as Dependências**  
    - Navegue até a pasta `frontend` pelo terminal:  

    ```bash  
    cd frontend  
    ```  
    - Instale as dependências do projeto:  

    ```bash  
    npm install  
    ```  

2. **Inicie o Frontend**  
    - Ainda na pasta `frontend`, inicie o servidor de desenvolvimento:  

    ```bash  
    npm start  
    ```  

    - O front-end estará disponível em [localhost:3000](http://localhost:3000).  

---

### Onde obter ajuda?

Para sanar quaisquer dúvidas, procure o Engenheiro de Software responsável pelo projeto.