# Unity Asset Store API Client

[![Build Status](https://travis-ci.com/mukaschultze/unity-asset-store-api.svg?branch=master)](https://travis-ci.com/mukaschultze/unity-asset-store-api)
[![npm version](https://badge.fury.io/js/unity-asset-store-api.svg)](http://badge.fury.io/js/unity-asset-store-api)
[![npm downloads](https://img.shields.io/npm/dm/unity-asset-store-api.svg)](http://badge.fury.io/js/unity-asset-store-api)

**THIS IS NOT AN OFFICIAL API CLIENT**, this is just a wrapper for the endpoints from the publisher panel

## How to use

### Install

- `npm i unity-asset-store-api`

### Examples

```ts
import AssetStoreClient from "unity-asset-store-api";

const token = "YOUR_TOKEN_HERE";
const publisherID = 15803;
const client = new AssetStoreClient(token, publisherID, { timeout: 60000 });

// Optionally you can leave the publisher ID undefined
// and pass them as the last argument of each function

await client.apiKey();
await client.downloads(2019, 09);
await client.packages();
await client.publisherOverview();
await client.revenue();
await client.sales(2019, 09);
await client.salesPeriods();
await client.userOverview();
await client.verifyInvoice("INVOICE NO");
await client.logout(); // This invalidates the token
```

## How to get your token

Head over to the asset store publisher panel, open the cookies and find a cookie named `kharma_session`, its value is your token.  
_Do not make your token publicly available. Logging out invalidates the token, just in case you need it._

## License

MIT
