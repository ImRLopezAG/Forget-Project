
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
  Post /api/v1/auth/signIn
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. email |
| `password` | `string` | **Required**. password |

#### Log out
```
  Post /api/v1/auth/logOut
```


## Products

### Get Products

```
  GET /api/v1/Products/
```


### Get Product

```
  GET /api/v1/Products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


### Add Product

```
  Post /api/v1/Product
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**.  |
| `quantity`      | `number` | **Required**.  |
| `type`      | `string` | **Required**.  |
| `gender`      | `string` | **Required**.  |

### Update Product

```
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

```
  Delete /api/v1/Product/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|


## Users

### Get Users

```
  GET /api/v1/Users/
```


### Get User

```
  GET /api/v1/User/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


### Add User

```
  Post /api/v1/User
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `First Name`      | `string` | **Required**.  |
| `Last Name`      | `string` | **Required**.  |
| `Email`      | `string` | **Required**.  |
| `Username`      | `string` | **Required**.  |

### Update User

```
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

```
  Delete /api/v1/User/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|



## Badges

[![MIT License](s://img.shields.io/badge/License-MIT-green.svg)](s://choosealicense.com/licenses/mit/)
## Authors

- [@Angel Gabriel Lopez](s://www.github.com/imrlopezag)

