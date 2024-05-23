<!DOCTYPE html>
<html lang="Pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Gestão Comercial</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Sistema de Gestão Comercial</h1>
        <div class="form-container">
            <input type="text" id="item-name" placeholder="Nome do Item">
            <input type="number" id="item-quantity" placeholder="Quantidade">
            <button onclick="addItem()">Adicionar Item</button>
        </div>
        <div class="list-container">
            <h2>Inventário</h2>
            <ul id="item-list"></ul>
        </div>
    </div>
    <script src="scripts.js"></script>
</body>
</html>
