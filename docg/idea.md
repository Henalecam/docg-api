API clientes

## Cliente: (has many)

Id,
Nome,
E-mail,
Telefone,
Pets

## Pet: (belongs to)

Id,
Cliente_id,
Nome,
Espécie,
Raça

## Cliente_Serviço:

Id,
Cliente_id,
Pet_id,
Tech_id

## Serviço: (many to many)

Id,
Título,
Preço
