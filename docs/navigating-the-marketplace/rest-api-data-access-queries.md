---
sidebar_position: 7
---

# REST API Data Access and Queries

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

By setting up your API key on the Nuklai marketplace, you will be able to query your data through our REST API. Once setting up your Nuklai REST API the applications that you are building will have direct access to your data.

In this user guide, we will show you how to set up your API and query your first dataset.

To use Nuklai's REST API, you should have:

- Knowledge of programming languages and the query language SQL
- A code editor or Jupyter Notebook set up on your device.

When you arrive on the Nuklai marketplace, in the sidebar there will be a menu item called Settings. When you click on Settings, you will see a tab called API keys. Here you will find your API key.

If you don't yet have an API key, you can generate a new one by clicking on the Generate API key button.

<div class="center-docs-images">
    <img src="https://docs.nukl.ai/~gitbook/image?url=https%3A%2F%2F1650794651-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F5mLVwg0hqGUPrzYtPSy9%252Fuploads%252F5aM1DyrJ61twCu83dTJs%252F659c26acbe45672b92e61a5a_Screenshot%25202024-01-08%2520at%252017.05.01.png%3Falt%3Dmedia%26token%3Dc226ac59-0b9d-4bf6-ad18-f23f6468d84d&width=768&dpr=4&quality=100&sign=fe72f11e&sv=1" alt="Generating an API key" width="700" />
</div>

The API key you see in the image is not a real API key. Your API key should be connected to the Nuklai marketplace and the user can query all datasets that have an active subscription.

You will be asked to select a name for your API key and the days until the API key expires. This is done for security purposes – we suggest renewing your API keys every 90 days, but you can select a time between 7 days and 365 days.

Once you have generated your API key, you will see it in the list of API keys. You can generate up to 5 different keys.

Now click the Settings button. In the API Key field, you will see a long string. This string is your API key. You will need to store this key in a secure place – if you lose this key, you will need to generate a new one. Click the Copy button to copy your API key to your clipboard.

<div class="center-docs-images">
    <img src="https://docs.nukl.ai/~gitbook/image?url=https%3A%2F%2F1650794651-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F5mLVwg0hqGUPrzYtPSy9%252Fuploads%252FsGJCanBLi6LAlECPRrV6%252F659c26dc085c359db378e815_APIKEYcreate.png%3Falt%3Dmedia%26token%3D0463caac-7a9b-420f-b654-930e4ce32dd3&width=768&dpr=4&quality=100&sign=60bd67d0&sv=1" alt="Accessing your API key" width="700" />
</div>

## Send a query via the API

You can now open up your preferred code editor, if you have not set up any code editor and if you are familiar with Jupyter Notebooks, we recommend to set up a Jupyter Notebook. We recommend using Python to query the API, but you can use any programming language that can make HTTP requests.

To set up your API in your code editor you should set up three variables. The API url, the API key, and the Dataset ID.

HTTP Method: `POST`

API url: https://api.nuklai.io/api/production/v1/datasets/{datasetId}/queries

Response format: JSON

The Dataset ID can be found in the url of the dataset you want to query. It is a 36-character hexadecimal string and it's split into 5 parts.

For example: https://app.nuklai.io/datasets/07fe4d76-205e-43a0-8eb3-69bbae3b7f9e is the Dataset ID.

Where 07fe4d76-205e-43a0-8eb3-69bbae3b7f9e is the Dataset ID.

JAVASCRIPT:
```js
// Setting up the variables

const ApiUrl = "https://api.nukl.ai/api/public/v1/datasets/:datasetId/queries";
const ApiKey = "[API_KEY]";
const DatasetId = "[DATASET_ID]";
```
PYTHON:
```py
# Setting up the variables

ApiUrl = "https://api.nukl.ai/api/public/v1/datasets/:datasetId/queries"
ApiKey = "[API_KEY]"
DatasetId = "[DATASET_ID]"
```
PHP:
```PHP
// Setting up the variables

$ApiUrl = "https://api.nukl.ai/api/public/v1/datasets/:datasetId/queries";
$ApiKey = "[API_KEY]";
$DatasetId = "[DATASET_ID]";
```

We will now set up the headers. The headers are used to authenticate the request. The first one is for the content type and the second is for the authentication.

JAVASCRIPT
```js
// Setting up the header
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {api_key}"
}
```
PYTHON:
```py
# Setting up the header

headers = {
  "Content-Type": "application/json",
  "authentication": ApiKey
}
```
PHP:
```PHP
// Setting up the header

$headers = [
  "Content-Type: application/json",
  "authentication: $ApiKey"
];
```

You are now able to add an SQL query to the body of the dataset. In this example, we will query all columns and the first 5 records of the dataset by writing the following SQL query:

```sql
select * from @dataset limit 5  
```

This query is added to the body in the following way:

JAVASCRIPT:
```js
// @dataset represents your dataset rows as a table

const body = {
  sqlQuery: "select * from @dataset limit 5",
}
```

PYTHON:
```py
# @dataset represents your dataset rows as a table

body = {
  "sqlQuery": "select * from @dataset limit 5"
}
```

PHP:
```PHP
// @dataset represents your dataset rows as a table

$body = [
  "sqlQuery" => "select * from @dataset limit 5"
];
```

Your code should now look like this to make the query:

JAVASCRIPT:
```js
// variables
const ApiUrl = "https://api.nukl.ai/api/public/v1/datasets/:datasetId/queries";
const ApiKey = "[API_KEY]";
const DatasetId = "[DATASET_ID]";

// header
const headers = {
  "Content-Type": "application/json",
  'authentication': ApiKey
}

// body with sql query
const body = {
  sqlQuery: "select * from @dataset limit 5",
}

// make a request
fetch(ApiUrl.replace(':datasetId', DatasetId), {
  method: "POST",
  headers: headers,
  body: JSON.stringify(body), // convert to json object
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

PYTHON:
```py
# pip install requests
# pip install json

import requests
import json

# variables
ApiUrl = "https://api.nukl.ai/api/public/v1/datasets/:datasetId/queries"
ApiKey = "[API_KEY]"
DatasetId = "[DATASET_ID]"

# header 
headers = {
  "Content-Type": "application/json",
  "authentication": ApiKey
}

# body with sql query
body = {
  "sqlQuery": "select * from @dataset limit 5"
}

# make a request
url = ApiUrl.replace(':datasetId', DatasetId)
try:
  response = requests.post(url, headers=headers, data=json.dumps(body))
  data = response.json()
  print(data)
except requests.RequestException as error:
  print(f"Error: {error}")
```

PHP:
```PHP
// variables
$ApiUrl = "https://api.nukl.ai/api/public/v1/datasets/:datasetId/queries";
$ApiKey = "[API_KEY]";
$DatasetId = "[DATASET_ID]";

// header
$headers = [
  "Content-Type: application/json",
  "authentication: $ApiKey"
];

// body with sql query
$body = [
  "sqlQuery" => "select * from @dataset limit 5"
];

// make a request
$ch = curl_init(str_replace(':datasetId', $DatasetId, $ApiUrl));

curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($body)); // convert to json object
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

$result = curl_exec($ch);
curl_close($ch);

echo $result;
```

CURL:
```cURL
curl -X POST 'https://api.nukl.ai/api/public/v1/datasets/[DATASET_ID]/queries' \
  -H 'Content-Type: application/json' \
  -H 'authentication: [API_KEY]' \
  -d '{"sqlQuery":"select * from @dataset limit 5"}'
```

Once you run the code, you will get a response. This response is a job-ID. 

**For example:** 061e6d78-205e-43e0-b9c1-499cea3b759c

This job-ID can have three responses:

**Pending**

- Your query is still running, wait until the job is finished.

**Failed**

- There might be a problem with your SQL query. We suggest first writing the correct SQL query within the UI.

**Completed**

- Your query has been completed, you will now be able to see the result as an object.

## Retrieving your data

**HTTP Method:** GET

**API Url:** https://api.nukl.ai/api/public/v1/datasets/:datasetId/queries 

**Response format:** JSON

Your code should now look like something like this to fetch the response of the query:


JAVASCRIPT:
```js
// variables
const ApiUrl = "https://api.nukl.ai/api/public/v1/datasets/:datasetId/queries/:jobId";
const ApiKey = "[API_KEY]";
const DatasetId = "[DATASET_ID]";
const JobId = "[JOB_ID]"; // retrieved from /queries request

// header
const headers = {
  "Content-Type": "application/json",
  'authentication': ApiKey
}

// make a request
fetch(ApiUrl.replace(':datasetId', DatasetId).replace(':jobId', JobId), {
  method: "GET",
  headers: headers
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

PYTHON:
```py
# pip install requests

import requests

# variables
ApiUrl = "https://api.nukl.ai/api/public/v1/datasets/:datasetId/queries/:jobId"
ApiKey = "[API_KEY]"
DatasetId = "[DATASET_ID]"
JobId = "[JOB_ID]"  # retrieved from /queries request

# header
headers = {
  "Content-Type": "application/json",
  "authentication": ApiKey
}

# make a request
url = ApiUrl.replace(':datasetId', DatasetId).replace(':jobId', JobId)
try:
  response = requests.get(url, headers=headers)
  data = response.json()
  print(data)
except requests.RequestException as error:
  print(f"Error: {error}")
```

PHP:
```PHP
// variables
$ApiUrl = "https://api.nukl.ai/api/public/v1/datasets/:datasetId/queries/:jobId";
$ApiKey = "[API_KEY]";
$DatasetId = "[DATASET_ID]";
$JobId = "[JOB_ID]"; // retrieved from /queries request

// header
$headers = [
  "Content-Type: application/json",
  "authentication: $ApiKey"
];

// make a request
$ch = curl_init(str_replace(array(':datasetId', ':jobId'), array($DatasetId, $JobId), $ApiUrl));

curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

$result = curl_exec($ch);
curl_close($ch);

echo $result;
```

CURL:
```cURL
curl 'https://api.nukl.ai/api/public/v1/datasets/[DATASET_ID]/queries/[JOB_ID]' \
  -H 'Content-Type: application/json' \
  -H 'authentication: [API_KEY]'
```

Congratulations you have now set up your API key and queried your first dataset through the REST API!