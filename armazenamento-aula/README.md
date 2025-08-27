# 📱 Projeto de Estudos em Armazenamento no React Native

Bem-vindo(a) ao repositório de estudos sobre **armazenamento interno no
React Native com Expo**!\
Este projeto foi criado para demonstrar diferentes formas de salvar,
recuperar e proteger dados em aplicações mobile, utilizando recursos do
**Expo** e bibliotecas complementares.

------------------------------------------------------------------------

## 🚀 Sobre o Projeto

Este projeto inclui:

-   Uso do **AsyncStorage** para salvar notas simples (não sensíveis).
-   Uso do **SecureStore** para armazenar de forma segura um PIN de
    acesso.
-   Uso do **FileSystem** para criar backups das notas em arquivo
    `.json`.
-   Fluxo de autenticação por PIN para proteger as notas.
-   Funcionalidade para visualizar o backup salvo diretamente no app.

Ideal para iniciantes que desejam aprender como lidar com
**armazenamento no dispositivo** em React Native.

------------------------------------------------------------------------

## 🧠 Estrutura do Projeto

  -----------------------------------------------------------------------------
  Pasta/Arquivo         Descrição
  --------------------- -------------------------------------------------------
  `App.js`              Código principal do app (autenticação por PIN, CRUD de
                        notas, backup).

  `styles/styles.js`    Estilos utilizados nos componentes da aplicação.

  `notes-backup.json`   Arquivo gerado pelo app com backup das notas (criado em
                        tempo de execução).
  -----------------------------------------------------------------------------

------------------------------------------------------------------------

## 🔍 Recursos Demonstrados

### 🔹 AsyncStorage

-   Armazenamento de dados **não sensíveis**.
-   Utilizado para salvar e recuperar a lista de **notas**.

### 🔹 SecureStore

-   Armazenamento **seguro e criptografado**.
-   Utilizado para salvar o **PIN de autenticação** do usuário.

### 🔹 FileSystem

-   Manipulação de arquivos internos do app.
-   Gera e lê o arquivo `notes-backup.json` contendo as notas salvas.

------------------------------------------------------------------------

## 🛠 Tecnologias Utilizadas

-   [React Native](https://reactnative.dev/)
-   [Expo](https://expo.dev/)
-   [@react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage)
-   [expo-secure-store](https://docs.expo.dev/versions/latest/sdk/securestore/)
-   [expo-file-system](https://docs.expo.dev/versions/latest/sdk/filesystem/)

------------------------------------------------------------------------

## 📖 Funcionalidades

-   [x] Criar e listar notas\
-   [x] Persistir notas com **AsyncStorage**\
-   [x] Configurar PIN de acesso com **SecureStore**\
-   [x] Exportar backup das notas com **FileSystem**\
-   [x] Visualizar backup diretamente pelo app

------------------------------------------------------------------------

## ▶️ Como Executar

1.  Clone o repositório:

    ``` bash
    git clone https://github.com/seuusuario/react-native-storage-demo.git
    cd react-native-storage-demo
    ```

2.  Instale as dependências:

    ``` bash
    npm install
    ```

3.  Rode no emulador Android (SDK 23+):

    ``` bash
    npx expo start --android
    ```

4.  No primeiro acesso, o app pedirá para criar um **PIN de 4
    dígitos**.\

5.  Após autenticar, será possível criar notas, salvar e visualizar
    backups.

------------------------------------------------------------------------

## 🧑‍💼 Exemplos de Empresas que usam React Native

-   Facebook\
-   Instagram\
-   Discord\
-   Pinterest\
-   Uber Eats\
-   Tesla\
-   Shopify

------------------------------------------------------------------------

## 🤝 Contribuindo

Contribuições são bem-vindas! Para colaborar:

1.  Faça um fork do projeto\
2.  Crie uma branch: `git checkout -b minha-feature`\
3.  Commit suas alterações: `git commit -m 'feat: nova feature'`\
4.  Envie a branch: `git push origin minha-feature`\
5.  Abra um Pull Request 🎉

------------------------------------------------------------------------

## 📄 Licença

Este projeto está licenciado sob a **MIT License**.\
Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

------------------------------------------------------------------------

## ✍️ Autor

Douglas Lemos --- [GitHub](https://github.com/dlemos09)

------------------------------------------------------------------------

📚 **Bons estudos sobre armazenamento no React Native com Expo!**
