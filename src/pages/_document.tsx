import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acesso ao transporte</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <nav>
        <ul>
            <li>
                <a href="sobre.html">Sobre nós</a>
            </li>

            <li>
                <a href="contato.html">Contato</a>
            </li>
        </ul>
    </nav>

    <header>
        <div class="center">
            <img src="./img/Logo Verde de Empresa de Transporte Escolar Estilo Moderno (1).png"></img>
        </div>
        
    </header>

    <div class="tela"> 
        <h1>Login</h1>
        <input class="nome" type="text" placeholder= "Digite seu nome">
        <br><br>
        <input class="senha" type="password" placeholder= "Digite sua senha">
        <br><br>
        <button class="botao">Acessar</button>
    </div>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contato</title>
    <link rel="stylesheet" href="contato.css">
</head>
<body>
<h2> Acesse nossos contatos abaixo:</h2>
<p>Telefone: (81) 99152-1967</p> 
<p>E-mail: homerobankai678@gmail.com</p> 
<h2> Muito obrigado! 🚗✨</h2>

    
<header>
    <div class="center">
        <img src="./img/Logo Verde de Empresa de Transporte Escolar Estilo Moderno (1).png">

    </div>
</header>

</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sobre nós</title>
    <link rel="stylesheet" href="sobre.css">
</head>
<body>
    <h2>Quem somos?</h2>
    <p>A Bezzs é uma plataforma criada para conectar pessoas que precisam se locomover com motoristas que oferecem esse serviço de maneira confiável e personalizada. Nosso principal objetivo é facilitar a mobilidade urbana, proporcionando conforto, praticidade e rapidez. Somos mais do que uma plataforma de transporte: somos parceiros da cidade e buscamos melhorar a vida das pessoas por meio de soluções inovadoras.</p>
    
    <h2> Nosso Propósito em Caruaru-PE </h2>
    <p> A Bezzs tem um compromisso com a cidade de Caruaru, nossa missão é garantir que os estudantes  possam se locomover com facilidade para a universidade. Valorizamos motoristas locais e incentivamos o empreendedorismo na cidade, promovendo oportunidades de geração de renda. </p>
    
    <h2>  O que Esperamos Construir em Caruaru </h2>
    <p> Nosso objetivo a longo prazo é se tornar referência em mobilidade urbana na cidade de Caruaru e ser reconhecida como uma plataforma que não apenas resolve problemas de transporte, mas também melhora a qualidade de vida dos seus habitantes. Estamos constantemente buscando formas de aprimorar nossos serviços e aumentar nossa contribuição para a cidade.</p>
   
   <header>
    <div class="center">
        <img src="./img/Logo Verde de Empresa de Transporte Escolar Estilo Moderno (1).png">

    </div>
   </header>


</body>
</html>

  );
&rbrace;