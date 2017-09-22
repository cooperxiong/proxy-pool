proxy-pool
=========

<b>coding... (ง๑ •̀_•́)ง </b>

proxy-pool, service based on restify.

Collecting some free proxys from the provider's website, save them to redis, and provide proxy for our crawlers.

## Flow chart

![flow chart](proxy-pool.png)

## Run

install [nodejs](https://nodejs.org) at first.

```bash
npm start
```

## API

<b>POST /collect</b>

add proxy to the pool

@req

```
{
    provider:<string>,
    proxy:<string>,
    expiration:<number>
}
```

@res

```
{
    statusCode: 200,
    message: "OK"
}
```

<b>POST /provide</b>

fetch available proxy from the pool

@req

```
{
    channel:<string>
}
```

@res

```
{
    statusCode: 200,
    proxy: <string>
}
```
or
```
{
    statusCode: 429,
    message: "Proxys for channel x are exhausted."
}
```

<b>POST /refresh</b>

```json
{

}
```

<b>GET /stats</b>

get all proxys from the pool

```json
[{"provider":"xdaili","proxy":"http://180.115.12.141:41258","expiration":"600","bugng":"true","xdaili":"true"},
{"provider":"xdaili","proxy":"http://121.205.17.36:25901","expiration":"600","xdaili":"true","bugng":"true"},
{"provider":"xdaili","proxy":"http://115.210.77.97:31463","expiration":"600","xdaili":"true","bugng":"true"},
{"provider":"xdaili","proxy":"http://115.213.246.233:47858","expiration":"600","xdaili":"true","bugng":"true"},
{"provider":"xdaili","proxy":"http://117.24.22.220:46435","expiration":"600","bugng":"true","xdaili":"true"},
{"provider":"xdaili","proxy":"http://117.86.164.45:45748","expiration":"600","bugng":"true","xdaili":"true"},
{"provider":"bugng","proxy":"HTTP://183.15.180.222:9797","expiration":"600","xdaili":"true","bugng":"false"},
{"provider":"bugng","proxy":"HTTP://180.97.235.30:80","expiration":"600","xdaili":"true","bugng":"true"}]
```

## Tests

```bash
no scripts
```

## Contributing

...
