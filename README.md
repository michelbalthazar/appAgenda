# appAgenda
Desafio: Criar um app Agenda de contatos em 2 dias. Regra: Usar uma plataforma que não conheça.

Descrição: 
Este foi um aplicativo desenvolvido no total de 24h. 
Requisitos:
Usar uma plataforma de desenvolvimento que não conhecesse.
Deveria cadastrar, editar e excluir.

Como executar:
1º 
Baixe o https://nodejs.org/en/download/.
Na instalação é necessário o NPM, não o remova.
2º
Com o Node instalado, agora vamos abrir o terminal e instalar o Ionic e o Cordova.
Execute o comando
npm install -g cordova ionic.
3º 
Instale e configure o Java JDK.
4º
Com o Java configurado, agora precisamos do Apache Ant, o responsável por fazer o build de nosso aplicativo. Faça o download no link http://ant.apache.org/bindownload.cgi. (e configure)
5º
O próximo passo é a instalação do Android SDK, a API que fornece as bibliotecas e ferramentas necessárias para build, teste e debug para Android.
6º
Vamos fazer o teste. Voltando ao nosso aplicativo, abra o diretório do aplicativo pelo terminal e adicione a plataforma android.
Execute
ionic platform add android
7º
vamos dar o build no nosso .apk. Execute
ionic build android
8º
Podemos também debugar o aplicativo direto no dispositivo. Plugue o dispositivo via cabo USB, certifique de ter habilitado o USB debugging, e execute
ionic run android

PS: Para executar no desktop, execute o comando --> ionic serve   (com ionic devidamente instalado) 

Não foi implementado:
Listagem ordem alfabética.
Update.
Cadastro com foto. 



