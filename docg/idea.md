API clientes

Timestamps

## Cliente: (has many)

Id,
Nome,
E-mail,
Telefone,
Pets

## Pet: (Many to one)

Id,
Cliente_id,
Nome,
Espécie,
Raça

## Cliente_Serviço:

Id,
Cliente_id,
Pet_id,
Serviço_id

## Serviço: (many to many)

Id,
Título,
Preço
