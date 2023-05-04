
# Forget Api


This is the API of the project which is made with :

```
Framework: .Net 6
Database: SQL server
ORM: Entity Framework
Architecture: Onion
Documentation: Swagger

```


## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

### 🛠️ Tools

[![C#](https://img.shields.io/badge/C%23-239120?logo=c-sharp&logoColor=white)](https://docs.microsoft.com/en-us/dotnet/csharp/)
[![.Net](https://img.shields.io/badge/.NET-5C2D91?logo=.net&logoColor=white)](https://dotnet.microsoft.com/)
[![SQL Server](https://img.shields.io/badge/SQL%20Server-CC2927?logo=microsoft-sql-server&logoColor=white)](https://www.microsoft.com/en-us/sql-server/sql-server-2019)
[![EF](https://img.shields.io/badge/Entity%20Framework%20Core-5C2D91?logo=.net&logoColor=white)](https://docs.microsoft.com/en-us/ef/core/)
[![Swagger](https://img.shields.io/badge/Swagger-85EA2D?logo=swagger&logoColor=black)](https://swagger.io/)
[![Onion Architecture](https://img.shields.io/badge/Onion%20Architecture-0089D6?logo=microsoft-azure&logoColor=white)](https://www.youtube.com/watch?v=rtXpYpZdOzM)


# API Reference

## Authenticate with JWT

#### Log In

```
  Post /api/Auth/LogIn
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. email |
| `password` | `string` | **Required**. password |

#### Log out
```
  Post /api/Auth/LogOut
```


## Products

### Get Products

```
  GET /api/Product/List
```


### Get Product

```
  GET /api/Product/Get/${id}
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
  Put /api/Product/Update/${id}
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
  Delete /api/Product/Delete/${id}
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
  GET /api/User/Get/${id}
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
| `firstName`      | `string` | **Required**.  |
| `lastName`      | `string` | **Required**.  |
| `email`      | `string` | **Required**.  |
| `username`      | `string` | **Required**.  |
| `password`      | `string` | **Required**.  |
| `confirmPassword`      | `string` | **Required**.  |
| `image`      | `string` | **Required**.  |
| `role`      | `number` | **Required**.  |

### Update User

```
  Put /api/User/Update/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `firstName`      | `string` | **Required**.  |
| `lastName`      | `string` | **Required**.  |
| `email`      | `string` | **Required**.  |
| `username`      | `string` | **Required**.  |
| `password`      | `string` | **Required**.  |
| `confirmPassword`      | `string` | **Required**.  |
| `image`      | `string` | **Required**.  |
| `role`      | `number` | **Required**.  |

### Delete User

```
  Delete /api/User/Delete/${id}
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
  GET /api/Category/Get/${id}
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
  Put /api/Category/Update/${id}
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
  Delete /api/Category/Delete/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|

