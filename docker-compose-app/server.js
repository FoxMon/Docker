const express = require("express");
const redis = require("redis");

// create redis client
// docker환경과 docker가 아닐 때 host 넣어주는게 다름. 그냥 -> "https://redis-server.com"
// docker환경 -> "redis-server"로 작성 (도커 Compose를 사용할 때) docker-compose.yml파일에 명시한 컨테이너 이름으로 작성
const client = redis.createClient({
    host : "redis-server",
    port : 6379
});

// App
const app = express();

// number start -> 0
client.set("number", 0);

app.get('/', (req, res) => {
    client.get("number", (err, number) => {
        // get current number and number++
        res.send("숫자가 1씩 올라갑니다. 숫자 : " + number);
        client.set("number", parseInt(number) + 1);
    });
});

app.listen(8080); // port
console.log("Server is running!");