# getData Service for Mongodb
# (c) Frugal Scientific Ltd.
# 2018 December

## Overview

### Dynamic Data Service API

This package provides a flexible, customizable, and low-dependency Representational State Transfer (REST) Application Programming Interface (API) for mongodb using express

### GET Method
Given the route /api/:collection/:method:

localhost:3000/api/collection/find?q={"field":"value"} with a web browser to use the API, where:

> collection is the name of the collection in your MongoDB database
> find is the MongoDB collection method for querying
> field is a field or key name in the collection
> value is the value in field to query for
