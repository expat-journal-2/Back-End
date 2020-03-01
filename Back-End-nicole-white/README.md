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

BASE URL: FORTHCOMING

#### Table of Contents

| Type   | Path                     | Notes                                                                         | Example                                                    |
| ------ | ------------------------ | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| POST   | `/api/auth/register`     | register a new user                                                           |                                                            |
| POST   | `/api/auth/login`        | login a new user                                                              |                                                            |
| &nbsp; |                          |                                                                               |                                                            |
| GET    | `/api/auth/users`        | get all users; requires authorization                                         |                                                            |
| &nbsp; |                          |                                                                               |                                                            |
| GET    | `/api/stories`           | get all stories                                                               |                                                            |
| POST   | `/api/:id/stories`       | create/send a new story; requirements forthcoming                             |                                                            |
| GET    | `/api/:id/stories`       | get a user's stories                                                          |                                                            |
| PUT    | `/api/:id/stories/:id`   | update user's story; requires authorization                                   |                                                            |
| DELETE | `/api/:id/stories/:id`   | delete a user's story; requires authorization                                 |                                                            |