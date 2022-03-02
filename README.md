# Magic Lab Case Study

## Installation

To test the application, clone repository and add the firebase file which is attached to the email.

1. Build docker:

```bash
docker build . -t magiclab
```

2. Run docker:

```bash
docker run -p 8080:8080 -d magiclab
```

#### Postman Endpoints

```http
   POST /save
```

| Parameter  | Type     |
| :--------- | :------- |
| `id`       | `Number` |
| `gold`     | `Number` |
| `diamond`  | `Number` |
| `username` | `String` |

Method: `POST`

Body:

```json
{
  "id": 1,
  "gold": 123,
  "diamond": 15,
  "username": "magic"
}
```

**Response**

Status: `200`

```json
 {
   "Saved successfully!"
 }
```

```http
   POST /read?id=1
```

**Response**

Status: `200`

```json
{
  "id": 1,
  "gold": 123,
  "diamond": 15,
  "username": "magic"
}
```
