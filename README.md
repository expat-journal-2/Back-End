# Back-End
## Schema

#### Users

| Field    | Type    | Notes                              |
| -------- | ------- | ---------------------------------- |
| id       | integer | _primary key_ and _autoincrements_ |
| email    | string  | _required_ and _unique_            |
| password | string  | _required_                         |
| username | string  | _required_                         |
| image_URL| string  |                                    |
| bio      | string  |                                    |

#### Stories

| Field     | Type    | Notes                                                                   |
| --------- | ------- | ----------------------------------------------------------------------- |
| id        | integer | _primary key_ and _autoincrements_                                      |
| name      | string  | _required_; name of the expat/story                                     |
| image_URL | string  | story image                                                             |
| location  | string  | story location                                                          |
| content   | string  | _required_; story description blog memoir                               |
| author    | string  | author of the story                                                     |
| user_id   | integer | foreign key to link stories to user                                     |
| date      | string  | date of story/experience                                                |


## API

BASE URL: https://expat-journal.herokuapp.com/

#### Table of Contents

| Type   | Path                     | Notes                                                                         | Example                                                    |
| ------ | ------------------------ | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| POST   | `/api/auth/register`     | register a new user                                                           |                                                            |
| POST   | `/api/auth/login`        | login a new user                                                              |                                                            |
| &nbsp; |                          |                                                                               |                                                            |
| GET    | `/api/users`             | get all users; requires authorization                                         |                                                            |
| &nbsp; |                          |                                                                               |                                                            |
| GET    | `/api/stories`           | get all stories                                                               |                                                            |
| POST   | `/api/stories`           | create/send a new story; requires authorization                             |                                                            |
| GET    |`/api/stories/:id/stories`       | get a user's stories                                                          |                                                            |
| PUT    | `/api/stories/:id`       | update user's story; requires authorization                                   |                                                            |
| DELETE | `/api/stories/:id`       | delete a user's story; requires authorization                                 |                                                            |


## Examples

#### POST /api/auth/register

request data:

```json
{
	"username":"new",
	"password":"new",
	"email": "new@gmail.com"
}
```

response data:

```json
{
    "id": 5,
    "email": "new@gmail.com",
    "password": "$2a$10$G7SdYMUDGUnBv1PUwScr/.L1BP9qRCoNzA58tcdU8QwPLfwmMLb0K",
    "username": "new",
    "image_URL": null,
    "bio": null
}
```

#### POST /api/auth/login

request data:

```json
{
	"username":"new",
	"password":"new"
}
```

response data:

```json
{
    "message": "Welcome new!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJ1c2VybmFtZSI6Im5ldyIsImlhdCI6MTU4MzE3MjM1NiwiZXhwIjoxNTgzMTc1OTU2fQ.eTbuJh34IQEjdsMuAEFldNu3O9EIfWxQpbKahG0Ci30"
}
```

#### GET /api/users

response data (with token in authorization header)

```json
[
    {
        "id": 3,
        "username": "testUser",
        "password": "$2a$10$nuS4THT365nI9l3tkWglf.Xd.7uK/.3Y5zSVWFyK4UtznLolobopO"
    },
    {
        "id": 4,
        "username": "one",
        "password": "$2a$10$WhItWfkuOXxoNi7I2Fw9TeRxiWLspILGoyp/OjQucG5TCZS9MhCde"
    },
    {
        "id": 5,
        "username": "new",
        "password": "$2a$10$G7SdYMUDGUnBv1PUwScr/.L1BP9qRCoNzA58tcdU8QwPLfwmMLb0K"
    }
]
```

#### GET /api/stories

response data 

```json
[
    {
        "id": 5,
        "name": "Jonathan",
        "image_URL": null,
        "location": "California",
        "content": "This is the seed content.",
        "author": "Jonathan author",
        "user_id": "1"
    },
    {
        "id": 6,
        "name": "Concert in Sacramento",
        "image_URL": null,
        "location": "California",
        "content": "This is a new story",
        "author": "Nicole",
        "user_id": "2"
    }
]
```

#### POST  /api/stories

request data

```json
{
	    "name": "Concert in Sacramento",
        "image_URL": null,
        "location": "California",
        "content": "This is a new story",
        "author": "Nicole",
        "user_id": "2"
}
```

response data

```json
{
    "message": "Success story added"
}
```

#### GET   /api/stories/:id/stories

response data (with token in authorization header)

```json
[
    {
        "author": "Nicole author",
        "name": "Nicole",
        "image_URL": null,
        "location": "Hawaii",
        "content": "This is the seed content."
    },
    {
        "author": "Nicole",
        "name": "New",
        "image_URL": null,
        "location": "New",
        "content": "This is the new content."
    },
    {
        "author": "Nicole",
        "name": "Concert in Sacramento",
        "image_URL": null,
        "location": "California",
        "content": "This is a new story"
    }
]
```


####  PUT /api/stories/:id

request data

```json
{
	"id": 3,
    "name": "Changed",
    "image_URL": null,
    "location": "Changed",
    "content": "This is the updated content.",
    "author": "Nicole",
    "user_id": "2"
}
```

response data

```json
1
```

#### DELETE /api/stories/:id

response data

```json
{
    "message": "The story has been deleted."
}
```

