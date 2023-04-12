
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
```http
  Post /api/v1/auth/signIn
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. email |
| `password` | `string` | **Required**. password |

#### Log out
```http
  Post /api/v1/auth/logOut
```


## Products

### Get Products

```http
  GET /api/v1/Products/
```


### Get Product

```http
  GET /api/v1/Products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


### Add Product

```http
  Post /api/v1/Product
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**.  |
| `quantity`      | `number` | **Required**.  |
| `type`      | `string` | **Required**.  |
| `gender`      | `string` | **Required**.  |

### Update Product

```http
  Put /api/v1/Product/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**.  |
| `quantity`      | `number` | **Required**.  |
| `type`      | `string` | **Required**.  |
| `gender`      | `string` | **Required**.  |

### Delete Product

```http
  Delete /api/v1/Product/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|


## Users

### Get Users

```http
  GET /api/v1/Users/
```


### Get User

```http
  GET /api/v1/User/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


### Add User

```http
  Post /api/v1/User
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `First Name`      | `string` | **Required**.  |
| `Last Name`      | `string` | **Required**.  |
| `Email`      | `string` | **Required**.  |
| `Username`      | `string` | **Required**.  |

### Update User

```http
  Put /api/v1/User/${id}
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

```http
  Delete /api/v1/User/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|



## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
## Authors

- [@Angel Gabriel Lopez](https://www.github.com/imrlopezag)

