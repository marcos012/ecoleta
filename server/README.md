## Rotas da api

### [GET] Buscar pontos de coleta
```
/points?city={city}&uf={uf}&items=1,2
```
```JSON
[
    {
        "id": 1,
        "image": "https://images.com/imagem-do-ponto",
        "name": "nome",
        "email": "mail@gmail.com",
        "whatsapp": "numero do ponto",
        "latitude": latitude do ponto,
        "longitude": longitude do ponto,
        "city": "cidade do ponto",
        "uf": "uf do ponto"
    },
]
```

### [GET] Buscar ponto de coleta especifico
```
/points/:id
```
```JSON
{
    "point": {
        "id": 2,
        "image": "imagem",
        "name": "nome",
        "email": "email@email.com",
        "whatsapp": "whatsapp",
        "latitude": latitude,
        "longitude": longitude,
        "city": "cidade",
        "uf": "UF"
    },
    "items": [
        {
            "title": "titulo do item"
        },
        {
            "title": "titulo do item"
        }
    ]
}
```

### [GET] Buscar itens de coleta
```
/items
```
```JSON
[
     {
        "id": 1,
        "title": "Lâmpadas",
        "image_url": "http://link.com/uploads/lampadas.svg"
    },
]
```

### [POST] Cadastrar ponto de coleta
`/points`

FORM DATA:
```JSON
name: "nome",
email": "mail@mail.com", 
whatsapp: "whatsapp", 
latitude: latitude, 
longitude: longitude, 
city: "cidade",
uf: "UF", 
items: 1,2,3,4,5,6
image: selecionar tipo do campo para file

```
