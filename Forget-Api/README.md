
# Forget Api


This is the API of the project which is made with :

```
Framework: .Net 6
Database: SQL server
ORM: Entity Framework
Architecture: Onion
```


# API Reference

## Authenticate with JWT

#### sign In
```
  Post /api/Auth/LogIn
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. email |
| `password` | `string` | **Required**. password |

#### Log out
```
  Post /api/Auth/logOut
```


## Products

### Get Products

```
  GET /api/Products/List
```


### Get Product

```
  GET /api/Products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


### Add Product

```
  Post /api/Product/Create
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**.  |
| `description`      | `string` | **Required**.  |
| `price`      | `number` | **Required**.  |
| `categoryId`      | `string` | **Required**.  |
| `portrait`      | `string` | **Optional**.  |
| `imageFile`      | `string` | **Optional**.  |

- if you want to upload an image you need to send the image uploaded in a multipart form data with the key `imageFile` and the value of the image or you can send a link of the image in the key `portrait` and the value of the link.

### Update Product

```
  Put /api/Product/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**.  |
| `description`      | `string` | **Required**.  |
| `price`      | `number` | **Required**.  |
| `categoryId`      | `string` | **Required**.  |
| `portrait`      | `string` | **Optional**.  |
| `imageFile`      | `string` | **Optional**.  |

- if you want to upload an image you need to send the image uploaded in a multipart form data with the key `imageFile` and the value of the image or you can send a link of the image in the key `portrait` and the value of the link.

### Delete Product

```
  Delete /api/Product/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|


## Users

### Get Users

```
  GET /api/User/List
```


### Get User

```
  GET /api/User/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


### Add User

```
  Post /api/User/Create
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `First Name`      | `string` | **Required**.  |
| `Last Name`      | `string` | **Required**.  |
| `Email`      | `string` | **Required**.  |
| `Username`      | `string` | **Required**.  |

### Update User

```
  Put /api/User/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `First Name`      | `string` | **Required**.  |
| `Last Name`      | `string` | **Required**.  |
| `Email`      | `string` | **Required**.  |
| `Username`      | `string` | **Required**.  |

### Delete User

```
  Delete /api/User/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|


## Categories

### Get Categories

```
  GET /api/Category/List
```

### Get Category

```
  GET /api/Category/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

### Add Category

```
  Post /api/Category/Create
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**.  |
| `description`      | `string` | **Required**.  |

### Update Category

```
  Put /api/Category/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**.  |
| `description`      | `string` | **Required**.  |


### Delete Category

```
  Delete /api/Category/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|



## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![.Net](https://img.shields.io/badge/.Net-6.0-blue.svg)](https://dotnet.microsoft.com/download/dotnet/6.0)
[![SQL Server](https://img.shields.io/badge/SQL%20Server-2019-blue.svg)](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
[![Entity Framework](https://img.shields.io/badge/Entity%20Framework-6.16.0-blue.svg)](https://docs.microsoft.com/en-us/ef/ef6/)
[![Onion Architecture](https://img.shields.io/badge/Onion%20Architecture-1.0.0-blue.svg)](https://www.codeproject.com/Articles/1154573/Onion-Architecture-in-ASP-NET-MVC)
[![Swagger](https://img.shields.io/badge/Swagger-6.1.4-blue.svg)](https://swagger.io/)
## Authors

- [@Angel Gabriel Lopez](s://www.github.com/imrlopezag)

