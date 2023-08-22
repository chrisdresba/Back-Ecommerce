# Back-Ecommerce

Puede acceder al proyecto desde el siguiente [link](https://node-mongo-ecommerce.onrender.com/).

Bienvenido a la API JSON para E-commerce, diseñada para proporcionar acceso eficiente a la información crucial de una tienda en línea desarrollada como un Desafío Front End.

Esta API permite interactuar con productos, categorías, subcategorías y usuarios, facilitando la gestión de una plataforma de comercio electrónico.

Este proyecto es utilizado en el siguiente proyecto: [link](https://ecommerce-angular-material.web.app/).


## PRODUCTOS

Los productos son los elementos que se venden en la tienda en línea.

**Listado de todos los productos**
- Método: GET
- Endpoint: `/api/productos`

Ejemplo de respuesta:
`
[
  {
    "_id": "64cd4cfea0816319d486e9d7",
    "destacado": 0,
    "nombre": "Mouse Logitech M100 Negro USB",
    "id_producto": 1912,
    "id_subcategoria": 2,
    "precio": 2140,
    "imagenes": [
      {
        "_id": "64dd7b1bf988f482ef6c5903",
        "nombre": "9291_Mouse_Logitech_M100_Negro_USB_4dc57579",
        "id_producto_imagen": 0
      }
    ],
    "orden": 0,
    "vendible": 1,
    "stock": 5,
    "garantia": 6,
    "iva": 10.5
  },
  // ... otros productos ...
]`

Obtener un producto por ID

    Método: GET
    Endpoint: /api/productos/:id

## CATEGORÍAS

Listado de todas las categorías

    Método: GET
    Endpoint: /api/categorias

Obtener una categoría por ID

    Método: GET
    Endpoint: /api/categorias/:id

## SUBCATEGORÍAS

Listado de todas las subcategorías

    Método: GET
    Endpoint: /api/subcategorias

Obtener una subcategoría por ID

    Método: GET
    Endpoint: /api/subcategorias/:id

## BUSCAR

Listado de productos que coincidan con un término en el nombre

    Método: GET
    Endpoint: /api/buscar/:nombre

## SESIÓN

Iniciar sesión ingresando correo electrónico y contraseña

    Método: POST
    Endpoint: /api/auth/login

Ejemplo de cuerpo de solicitud:
`{
  "email": "xxxxxx@xxxx.com",
  "contraseña": "xxxxxxx"
}
`
Crear una cuenta ingresando los datos solicitados

    Método: POST
    Endpoint: /api/auth/

Ejemplo de cuerpo de solicitud:
`{
  "email": "xxxxxx@xxxx.com",
  "contraseña": "xxxxxxx",
  "nombre": "xxxxxx",
  "apellido": "xxxxxx",
  "dni": 11111111,
  "telefono": "xxxxxxx"
}
`

