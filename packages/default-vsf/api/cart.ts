import { apiStatus, apiError } from '@storefront-api/lib/util';
import { Router } from 'express';
import PlatformFactory from '@storefront-api/platform/factory';
import AbstractCartProxy from '@storefront-api/platform-abstract/cart'

export default ({ config, db }) => {
  let cartApi = Router();

  const _getProxy = (req): AbstractCartProxy => {
    const platform = config.platform
    const factory = new PlatformFactory(config, req)
    return factory.getAdapter(platform, 'cart')
  };

  /**
   * POST create a cart
   * req.query.token - user token
   *
   * For authorized user:
   *
   * ```bash
   * curl 'http://localhost:8080/api/cart/create?token=xu8h02nd66yq0gaayj4x3kpqwity02or' -X POST
   * ```
   *
   * For anonymous user:
   *
   * ```bash
   * curl 'https://localhost:8080/api/cart/create' -X POST
   * ```
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#post-vsbridgecartcreate
   *
   *
   */
  /* Successfull result:
      {
        "code":200,
        "result":
        {
            "item_id":5853,
            "sku":"MS10-XS-Black",
            "qty":2,
            "name":"Logan  HeatTec&reg; Tee-XS-Black",
            "price":24,
            "product_type":"simple",
            "quote_id":"81668"
        }
    }
  */
  cartApi.post('/create', (req, res) => {
    const cartProxy = _getProxy(req)
    cartProxy.create(req.query.token).then((result) => {
      apiStatus(res, result, 200);
    }).catch(err => {
      apiError(res, err);
    })
  })

  /**
   * POST update or add the cart item
   *
   * Request body:
   *
   * {
   *   "cartItem":{
   *      "sku":"WS12-XS-Orange",
   *      "qty":1,
   *      "product_option":{
   *         "extension_attributes":{
   *            "custom_options":[
   *
   *               ],
   *            "configurable_item_options":[
   *            {
   *               "option_id":"93",
   *               "option_value":"56"
   *            },
   *            {
   *               "option_id":"142",
   *               "option_value":"167"
   *            }
   *            ],
   *            "bundle_options":[
   *
   *               ]
   *         }
   *      },
   *      "quoteId":"0a8109552020cc80c99c54ad13ef5d5a"
   *   }
   *}
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#post-vsbridgecartupdate
   */
  /*
    #RESPONSE BODY:
    {
        "code":200,
        "result":true
    }
  */
  cartApi.post('/update', (req, res) => {
    const cartProxy = _getProxy(req)
    if (!req.body.cartItem) {
      return apiStatus(res, 'No cartItem element provided within the request body', 400)
    }
    cartProxy.update(req.query.token, req.query.cartId ? req.query.cartId : null, req.body.cartItem).then((result) => {
      apiStatus(res, result, 200);
    }).catch(err => {
      apiError(res, err);
    })
  })

  /**
   * POST apply the coupon code
   *   req.query.token - user token
   *   req.query.cartId - cart Ids
   *   req.query.coupon - coupon
   *
   * ```bash
   * curl 'http://localhost:8080/api/cart/apply-coupon?token=2q1w9oixh3bukxyj947tiordnehai4td&cartId=5effb906a97ebecd6ae96e3958d04edc&coupon=ARMANi' -X POST -H 'content-type: application/json'
   * ```
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#post-vsbridgecartapply-coupon
   */
  /*
    #RESPONSE BODY:
    {
        "code":200,
        "result":true
    }
  */
  cartApi.post('/apply-coupon', (req, res) => {
    const cartProxy = _getProxy(req)
    if (!req.query.coupon) {
      return apiStatus(res, 'No coupon code provided', 400)
    }
    cartProxy.applyCoupon(req.query.token, req.query.cartId ? req.query.cartId : null, req.query.coupon).then((result) => {
      apiStatus(res, result, 200);
    }).catch(err => {
      apiError(res, err);
    })
  })

  /**
   * POST remove the coupon code
   *   req.query.token - user token
   *   req.query.cartId - cart Ids
   *
   * ```bash
   * curl 'https://api.erpya.com/vsbridge/cart/delete-coupon?token=2q1w9oixh3bukxyj947tiordnehai4td&cartId=5effb906a97ebecd6ae96e3958d04edc' -X POST -H 'content-type: application/json'
   * ```
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#post-vsbridgecartdelete-coupon
   */
  /*
    #RESPONSE BODY:
    {
        "code":200,
        "result":"ARMANI"
    }
  */
  cartApi.post('/delete-coupon', (req, res) => {
    const cartProxy = _getProxy(req)
    cartProxy.deleteCoupon(req.query.token, req.query.cartId ? req.query.cartId : null).then((result) => {
      apiStatus(res, result, 200);
    }).catch(err => {
      apiError(res, err);
    })
  })

  /**
   * GET get the applied coupon code
   *   req.query.token - user token
   *   req.query.cartId - cart Ids
   *
   * ```bash
   * curl 'http://loccalhost:8080/api/cart/coupon?token=2q1w9oixh3bukxyj947tiordnehai4td&cartId=5effb906a97ebecd6ae96e3958d04edc' -H 'content-type: application/json'
   * ```
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgecartcoupon
   */
  /*
    #RESPONSE BODY:
    {
        "code":200,
        "result":"ARMANI"
    }
  */
  cartApi.get('/coupon', (req, res) => {
    const cartProxy = _getProxy(req)
    cartProxy.getCoupon(req.query.token, req.query.cartId ? req.query.cartId : null).then((result) => {
      apiStatus(res, result, 200);
    }).catch(err => {
      apiError(res, err);
    })
  })

  /**
   * POST delete the cart item
   *   req.query.token - user token
   *
   * Request body;
   * {
   *       "cartItem":
   *       {
   *          "sku":"MS10-XS-Black",
   *          "item_id":5853,
   *          "quoteId":"81668"
   *       }
   * }
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#post-vsbridgecartdelete
   */
  /*
    #RESPONSE BODY:
    {
        "code":200,
        "result":true
    }
  */
  cartApi.post('/delete', (req, res) => {
    const cartProxy = _getProxy(req)
    if (!req.body.cartItem) {
      return apiStatus(res, 'No cartItem element provided within the request body', 400)
    }
    cartProxy.delete(req.query.token, req.query.cartId ? req.query.cartId : null, req.body.cartItem).then((result) => {
      apiStatus(res, result, 200);
    }).catch(err => {
      apiError(res, err);
    })
  })

  /**
   * GET pull the whole cart as it's currently se server side
   *   req.query.token - user token
   *   req.query.cartId - cartId
   *
   * For authorized users;
   *
   * ```bash
   * curl http://localhost:8080/api/cart/pull?token=xu8h02nd66yq0gaqwity02or
   * ```
   *
   * Details:
   * https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgecartpull
   */
  /*
  #RESPONSE BODY:
    {
      "code": 200,
      "result": [
        {
          "item_id": 66257,
          "sku": "WS08-M-Black",
          "qty": 1,
          "name": "Minerva LumaTech&trade; V-Tee",
          "price": 32,
          "product_type": "configurable",
          "quote_id": "dceac8e2172a1ff0cfba24d757653257",
          "product_option": {
            "extension_attributes": {
              "configurable_item_options": [
                {
                  "option_id": "93",
                  "option_value": 49
                },
                {
                  "option_id": "142",
                  "option_value": 169
                }
              ]
            }
          }
        },
        {
          "item_id": 66266,
          "sku": "WS08-XS-Red",
          "qty": 1,
          "name": "Minerva LumaTech&trade; V-Tee",
          "price": 32,
          "product_type": "configurable",
          "quote_id": "dceac8e2172a1ff0cfba24d757653257",
          "product_option": {
            "extension_attributes": {
              "configurable_item_options": [
                {
                  "option_id": "93",
                  "option_value": 58
                },
                {
                  "option_id": "142",
                  "option_value": 167
                }
              ]
            }
          }
        }
      ]
    }
  */
  cartApi.get('/pull', (req, res) => {
    const cartProxy = _getProxy(req)
    res.setHeader('Cache-Control', 'no-cache, no-store');
    cartProxy.pull(req.query.token, req.query.cartId ? req.query.cartId : null, req.body).then((result) => {
      apiStatus(res, result, 200);
    }).catch(err => {
      apiError(res, err);
    })
  })

  /**
   * GET totals the cart totals
   *   req.query.token - user token
   *   req.query.cartId - cartId
   *
   * ```bash
   * curl 'http://localhost:8080/api/cart/totals?token=xu8h02nd66yq0gaayj4x3kpqwity02or&cartId=81668' -H 'content-type: application/json'
   * ```
   */
  /*
    #RESPONSE BODY:
    You have totals data for the current, synchronized quote returned:

    {
        "code":200,
        "result":
            {
                "grand_total":0,
                "base_currency_code":"USD",
                "quote_currency_code":"USD",
                "items_qty":1,
                "items":
                    [
                        {
                            "item_id":5853,
                            "price":0,
                            "qty":1,
                            "row_total":0,
                            "row_total_with_discount":0,
                            "tax_amount":0,
                            "tax_percent":0,
                            "discount_amount":0,
                            "base_discount_amount":0,
                            "discount_percent":0,
                            "name":"Logan  HeatTec&reg; Tee-XS-Black",
                            "options": "[{ \"label\": \"Color\", \"value\": \"red\" }, { \"label\": \"Size\", \"value\": \"XL\" }]",
                            "product_option":{
                              "extension_attributes":{
                                  "custom_options":[

                                  ],
                                  "configurable_item_options":[
                                    {
                                        "option_id":"93",
                                        "option_value":"56"
                                    },
                                    {
                                        "option_id":"142",
                                        "option_value":"167"
                                    }
                                  ],
                                  "bundle_options":[

                                  ]
                              }
                            }
                        }
                    ],
                "total_segments":
                    [
                        {
                            "code":"subtotal",
                            "title":"Subtotal",
                            "value":0
                        },
                        {
                            "code":"shipping",
                            "title":"Shipping & Handling",
                            "value":null
                        },
                        {
                            "code":"tax",
                            "title":"Tax",
                            "value":0,
                            "extension_attributes":
                                {
                                    "tax_grandtotal_details":[]
                                }
                        },
                        {
                            "code":"grand_total",
                            "title":"Grand Total",
                            "value":null,
                            "area":"footer"
                        }
                    ]
            }
    }
  */
  cartApi.get('/totals', (req, res) => {
    const cartProxy = _getProxy(req)
    res.setHeader('Cache-Control', 'no-cache, no-store');
    cartProxy.totals(req.query.token, req.query.cartId ? req.query.cartId : null, req.body).then((result) => {
      apiStatus(res, result, 200);
    }).catch(err => {
      apiError(res, err);
    })
  })

  /**
   * POST /shipping-methods - available shipping methods for a given address
   *   req.query.token - user token
   *   req.query.cartId - cart ID if user is logged in, cart token if not
   *   req.body.address - shipping address object
   *
   * Request body:
   * {
   *       "address":
   *       {
   *          "country_id":"PL"
   *       }
   *    }
   *
   * ```bash
   * curl 'https://api.erpya.com/vsbridge/cart/shipping-methods?token=xu8h02nd66yq0gaayj4x3kpqwity02or&cartId=81668' -H 'content-type: application/json' --data-binary '{"address":{"country_id":"PL"}}'
   *
   */
  /*
    #RESPONSE BODY:
    {
        "code":200,
        "result":
        [
            {
                "carrier_code":"flatrate",
                "method_code":"flatrate",
                "carrier_title":"Flat Rate",
                "method_title":"Fixed",
                "amount":5,
                "base_amount":5
                ,"available":true,
                "error_message":"",
                "price_excl_tax":5,
                "price_incl_tax":5
            }
        ]
    }
  */
  cartApi.post('/shipping-methods', (req, res) => {
    const cartProxy = _getProxy(req)
    res.setHeader('Cache-Control', 'no-cache, no-store');
    if (!req.body.address) {
      return apiStatus(res, 'No address element provided within the request body', 400)
    }
    cartProxy.getShippingMethods(req.query.token, req.query.cartId ? req.query.cartId : null, req.body.address).then((result) => {
      apiStatus(res, result, 200);
    }).catch(err => {
      apiError(res, err);
    })
  })

  /**
   * GET /payment-methods - available payment methods
   *   req.query.token - user token
   *   req.query.cartId - cart ID if user is logged in, cart token if not
   *
   * ```bash
   * curl 'https://api.erpya.com/vsbridge/cart/payment-methods?token=xu8h02nd66yq0gaayj4x3kpqwity02or&cartId=81668' -H 'content-type: application/json'
   *
   */
  /*
   #RESPONSE BODY:
    {
        "code":200,
        "result":
            [
                {
                    "code":"cashondelivery",
                    "title":"Cash On Delivery"
                },
                {
                    "code":"checkmo","title":
                    "Check / Money order"
                },
                {
                    "code":"free",
                    "title":"No Payment Information Required"
                }
            ]
    }
  */
  cartApi.get('/payment-methods', (req, res) => {
    const cartProxy = _getProxy(req)
    res.setHeader('Cache-Control', 'no-cache, no-store');
    cartProxy.getPaymentMethods(req.query.token, req.query.cartId ? req.query.cartId : null).then((result) => {
      apiStatus(res, result, 200);
    }).catch(err => {
      apiError(res, err);
    })
  })

  /**
   * POST /shipping-information - set shipping information for collecting cart totals after address changed
   *   req.query.token - user token
   *   req.query.cartId - cart ID if user is logged in, cart token if not
   *   req.body.addressInformation - shipping address object
   *
   * Request body:
   * {
   *        "addressInformation":
   *        {
   *             "shipping_address":
   *          {
   *              "country_id":"PL"
   *          },
   *          "shipping_method_code":"flatrate",
   *           "shipping_carrier_code":"flatrate"
   *       }
   *    }
   */
  /*
    #RESPONSE BODY:
    {
      "code": 200,
      "result": {
        "payment_methods": [
          {
            "code": "cashondelivery",
            "title": "Cash On Delivery"
          },
          {
            "code": "checkmo",
            "title": "Check / Money order"
          }
        ],
        "totals": {
          "grand_total": 45.8,
          "subtotal": 48,
          "discount_amount": -8.86,
          "subtotal_with_discount": 39.14,
          "shipping_amount": 5,
          "shipping_discount_amount": 0,
          "tax_amount": 9.38,
          "shipping_tax_amount": 0,
          "base_shipping_tax_amount": 0,
          "subtotal_incl_tax": 59.04,
          "shipping_incl_tax": 5,
          "base_currency_code": "USD",
          "quote_currency_code": "USD",
          "items_qty": 2,
          "items": [
            {
              "item_id": 5853,
              "price": 24,
              "qty": 2,
              "row_total": 48,
              "row_total_with_discount": 0,
              "tax_amount": 9.38,
              "tax_percent": 23,
              "discount_amount": 8.86,
              "discount_percent": 15,
              "price_incl_tax": 29.52,
              "row_total_incl_tax": 59.04,
              "base_row_total_incl_tax": 59.04,
              "options": "[]",
              "name": "Logan  HeatTec&reg; Tee-XS-Black"
            }
          ],
          "total_segments": [
            {
              "code": "subtotal",
              "title": "Subtotal",
              "value": 59.04
            },
            {
              "code": "shipping",
              "title": "Shipping & Handling (Flat Rate - Fixed)",
              "value": 5
            },
            {
              "code": "discount",
              "title": "Discount",
              "value": -8.86
            },
            {
              "code": "tax",
              "title": "Tax",
              "value": 9.38,
              "area": "taxes",
              "extension_attributes": {
                "tax_grandtotal_details": [
                  {
                    "amount": 9.38,
                    "rates": [
                      {
                        "percent": "23",
                        "title": "VAT23"
                      }
                    ],
                    "group_id": 1
                  }
                ]
              }
            },
            {
              "code": "grand_total",
              "title": "Grand Total",
              "value": 55.18,
              "area": "footer"
            }
          ]
        }
      }
    }
  */
  cartApi.post('/shipping-information', (req, res) => {
    const cartProxy = _getProxy(req)
    res.setHeader('Cache-Control', 'no-cache, no-store');
    if (!req.body.addressInformation) {
      return apiStatus(res, 'No address element provided within the request body', 400)
    }
    cartProxy.setShippingInformation(req.query.token, req.query.cartId ? req.query.cartId : null, req.body).then((result) => {
      apiStatus(res, result, 200);
    }).catch(err => {
      apiError(res, err);
    })
  })

  /**
   * POST totals the cart totals
   *   req.query.token - user token
   *   req.query.cartId - cartId
   *
   * ```bash
   * curl 'http://localhost:8080/api/cart/totals?token=xu8h02nd66yq0gaayj4x3kpqwity02or&cartId=81668' -H 'content-type: application/json'
   * ```
   */
  /*
    #RESPONSE BODY:
    You have totals data for the current, synchronized quote returned:

    {
        "code":200,
        "result":
            {
                "grand_total":0,
                "base_currency_code":"USD",
                "quote_currency_code":"USD",
                "items_qty":1,
                "items":
                    [
                        {
                            "item_id":5853,
                            "price":0,
                            "qty":1,
                            "row_total":0,
                            "row_total_with_discount":0,
                            "tax_amount":0,
                            "tax_percent":0,
                            "discount_amount":0,
                            "base_discount_amount":0,
                            "discount_percent":0,
                            "name":"Logan  HeatTec&reg; Tee-XS-Black",
                            "options": "[{ \"label\": \"Color\", \"value\": \"red\" }, { \"label\": \"Size\", \"value\": \"XL\" }]",
                            "product_option":{
                              "extension_attributes":{
                                  "custom_options":[

                                  ],
                                  "configurable_item_options":[
                                    {
                                        "option_id":"93",
                                        "option_value":"56"
                                    },
                                    {
                                        "option_id":"142",
                                        "option_value":"167"
                                    }
                                  ],
                                  "bundle_options":[

                                  ]
                              }
                            }
                        }
                    ],
                "total_segments":
                    [
                        {
                            "code":"subtotal",
                            "title":"Subtotal",
                            "value":0
                        },
                        {
                            "code":"shipping",
                            "title":"Shipping & Handling",
                            "value":null
                        },
                        {
                            "code":"tax",
                            "title":"Tax",
                            "value":0,
                            "extension_attributes":
                                {
                                    "tax_grandtotal_details":[]
                                }
                        },
                        {
                            "code":"grand_total",
                            "title":"Grand Total",
                            "value":null,
                            "area":"footer"
                        }
                    ]
            }
    }
  */
  cartApi.post('/collect-totals', (req, res) => {
    const cartProxy = _getProxy(req)
    res.setHeader('Cache-Control', 'no-cache, no-store');
    if (!req.body.methods) {
      return apiStatus(res, 'No shipping and payment methods element provided within the request body', 400)
    }
    cartProxy.collectTotals(req.query.token, req.query.cartId ? req.query.cartId : null, req.body.methods).then((result) => {
      apiStatus(res, result, 200);
    }).catch(err => {
      apiError(res, err);
    })
  })

  return cartApi
}
