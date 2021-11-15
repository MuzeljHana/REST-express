# REST-express
Prepost REST API v Express.js

```bash
$ npm install

$ node app.js

$ curl http://localhost:3000/
[
    {
        "id": "3e1ed57a-6689-46db-bd0a-c468d31ec19d",
        "message": "test"
    }
]

$ curl http://localhost:3000/message/3e1ed57a-6689-46db-bd0a-c468d31ec19d
{
    "id": "3e1ed57a-6689-46db-bd0a-c468d31ec19d",
    "message": "test"
}

$ curl -X POST -H "Content-Type: application/json" -d '{"message": "test2"}' http://localhost:3000/message
{
    "id": "8f2603e6-369b-40cb-af2d-4aa366d3e833",
    "message": "test2"
}

$ curl -X PUT -H "Content-Type: application/json" -d '{"message": "test2 update"}' http://localhost:3000/message/8f2603e6-369b-40cb-af2d-4aa366d3e833
{
    "id": "8f2603e6-369b-40cb-af2d-4aa366d3e833",
    "message": "test2 update"
}

$ curl -X DELETE http://localhost:3000/message/8f2603e6-369b-40cb-af2d-4aa366d3e833
{
    "id": "8f2603e6-369b-40cb-af2d-4aa366d3e833",
    "message": "test2 update"
}
```
