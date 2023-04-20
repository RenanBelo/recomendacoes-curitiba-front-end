<!DOCTYPE html>
<html>

<head>
    <title>Recomendação de Restaurantes</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap">
    <style>
        /* Estilos para o cabeçalho e o título */
        header {
            background-image: linear-gradient(to bottom right, #1a1a1a, #4c4c4c);
            padding: 40px;
            text-align: center;
            color: #fff;
            font-family: 'Open Sans', sans-serif;
        }

        h1 {
            font-size: 48px;
            margin: 0;
            text-shadow: 2px 2px #333;
        }

        p {
            font-size: 20px;
            margin-top: 20px;
            font-weight: 600;
        }

        /* Estilos para o formulário */
        form {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-top: 30px;
        }

        input[type="text"] {
            font-size: 24px;
            padding: 10px;
            border-radius: 10px 0 0 10px;
            border: none;
            outline: none;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
            flex: 1;
            font-family: 'Open Sans', sans-serif;
        }

        button {
            font-size: 24px;
            background-color: #d13b3b;
            color: #fff;
            padding: 10px 20px;
            border-radius: 0 10px 10px 0;
            border: none;
            outline: none;
            cursor: pointer;
            transition: background-color 0.3s ease;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
            font-family: 'Open Sans', sans-serif;
        }

        button:hover {
            background-color: #b52d2d;
        }

        /* Estilos para a seção de resultados */
        #resultado {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 30px;
            font-family: 'Open Sans', sans-serif;
        }

        #resultado div {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
            margin: 10px;
            width: 300px;
            padding: 20px;
        }

        #resultado h3 {
            font-size: 24px;
            color: #d13b3b;
            margin: 0;
            font-weight: 600;
        }


        #resultado p {
            font-size: 16px;
            color: #555;
            margin: 0;
            margin-bottom: 10px;
            font-weight: 600;
        }

</style>
    <script>
        // Função para exibir os resultados da recomendação
        function mostrarRecomendados(recomendados) {
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    for (var i = 0; i < recomendados.length; i++) {
        var restaurante = recomendados[i][0];
        var media_sentimento = recomendados[i][1];
        var nome = restaurante.name;
        var endereco = restaurante.address;
        var pontuacao = restaurante.average_rating;
        var comentario = restaurante.reviews[0].content;
        var div = document.createElement("div");
        div.innerHTML = "<h3>" + nome + "</h3><p>" + endereco + "</p><p>Média de sentimento: " + media_sentimento + "</p>";
            resultado.appendChild(div);
            }
        }

        // Função para enviar a pesquisa para a API
        function enviarPesquisa() {
            var feedback = document.getElementById("feedback").value;
            var script = document.createElement("script");
            script.src = "http://localhost:5000/recomendar?callback=mostrarRecomendados&feedback=" + encodeURIComponent(feedback);
            document.body.appendChild(script);
        }
    </script>
</head>
<body>
    <h1>Recomendação de Restaurantes</h1>
    <p>Digite o tipo de comida que você está procurando:</p>
    <input type="text" id="feedback">
    <button onclick="enviarPesquisa()">Pesquisar</button>
    <div id="resultado"></div>
</body>
</html>
