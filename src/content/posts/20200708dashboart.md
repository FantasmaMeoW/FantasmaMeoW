---
date    : "2020-07-08T21:00:00+08:00"
title	: "Dashboard Start"

tags    : ["k8s", "coding"]
type    : "post"
draft   : false
---

# getting-started

- https://github.com/kubernetes/dashboard/blob/master/docs/developer/getting-started.md

## Preparation
Clone the repository into ` $GOPATH/src/github.com/kubernetes/dashboard ` and install the dependencies:

```
$ npm ci
```

## Running the cluster
```
$ kubectl proxy
```

### and Start Serve
```
$ npm start
```

### check
open 

- [http://localhost:8080/#/error?namespace=default](http://localhost:8080/#/error?namespace=default)