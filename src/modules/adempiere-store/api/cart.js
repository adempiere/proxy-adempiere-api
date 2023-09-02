import { Router } from 'express';
export default ({ config, db, service }) => {
  let cartApi = Router()
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
   */
  cartApi.post('/create', (req, res) => {
    if (req.body) {
      service.createCart({
        token: req.query.token
      }, (err, response) => {
        if (response) {
          let carId = response.getUuid()
          if (req.query.token) {
            carId = response.getId()
          }
          res.json({
            code: 200,
            result: carId
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

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
  cartApi.post('/update', (req, res) => {
    if (req.body) {
      let configurableOptions
      if (req.body.cartItem.product_option) {
        configurableOptions = req.body.cartItem.product_option.extension_attributes.configurable_item_options.map(option => {
          return {
            id: option.option_id,
            value: option.option_value
          }
        })
      }
      service.updateCart({
        token: req.query.token,
        cartId: req.query.cartId,
        sku: req.body.cartItem.sku,
        quantity: req.body.cartItem.qty,
        configurableOptions
        //  TODO: support to attribute
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              item_id: response.getProductId(),
              sku: response.getSku(),
              qty: response.getQuantity(),
              name: response.getName(),
              price: response.getPrice()
              // product_type: 'simple',
              // quote_id: 81668
            }
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

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
  cartApi.post('/apply-coupon', (req, res) => {
    res.json({
      code: 200,
      result: true
    });
  });

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
  cartApi.post('/delete-coupon', (req, res) => {
    res.json({
      code: 200,
      result: true
    });
  });

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
  cartApi.get('/coupon', (req, res) => {
    res.json({
      code: 200,
      result: 'ARMANI'
    });
  });

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
  cartApi.post('/delete', (req, res) => {
    if (req.body) {
      service.deleteCartItem({
        token: req.query.token,
        cartId: req.query.cartId,
        sku: req.body.cartItem.sku,
        productId: req.body.cartItem.item_id
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: true
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

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
  cartApi.get('/pull', (req, res) => {
    if (req.body) {
      service.getCart({
        token: req.query.token,
        cartId: req.query.cartId
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: response.getItemsList().map(item => {
              return {
                item_id: item.getProductId(),
                sku: item.getSku(),
                qty: item.getQuantity(),
                name: item.getName(),
                price: item.getPrice(),
                product_option: {
                  extension_attributes: {
                    configurable_item_options: item.getConfigurableItemOptionsList().map(value => {
                      return {
                        option_id: value.getId(),
                        option_value: value.getValue()
                      }
                    })
                  }
                }
                //  TODO: Add the folows support
                // product_type:
                //  quote_id
                // "product_option": {
                //   "extension_attributes": {
                //     "configurable_item_options": [
                //       {
                //         "option_id": "93",
                //         "option_value": 49
                //       },
                //       {
                //         "option_id": "142",
                //         "option_value": 169
                //       }
                //     ]
                //   }
                // }
              }
            })
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * GET totals the cart totals
   *   req.query.token - user token
   *   req.query.cartId - cartId
   *
   * ```bash
   * curl 'http://localhost:8080/api/cart/totals?token=xu8h02nd66yq0gaayj4x3kpqwity02or&cartId=81668' -H 'content-type: application/json'
   * ```
   */
  cartApi.get('/totals', (req, res) => {
    if (req.body) {
      service.getCartTotals({
        token: req.query.token,
        cartId: req.query.cartId
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              grand_total: response.getCart().getGrandTotal(),
              subtotal: response.getCart().getSubtotal(),
              discount_amount: response.getCart().getDiscountAmount(),
              subtotal_with_discount: response.getCart().getSubtotalWithDiscount(),
              shipping_amount: response.getCart().getShippingAmount(),
              shipping_discount_amount: response.getCart().getShippingDiscountAmount(),
              tax_amount: response.getCart().getTaxAmount(),
              shipping_tax_amount: response.getCart().getShippingTaxAmount(),
              base_shipping_tax_amount: response.getCart().getBaseShippingTaxAmount(),
              subtotal_incl_tax: response.getCart().getSubtotalInclTax(),
              shipping_incl_tax: response.getCart().getShippingInclTax(),
              base_currency_code: response.getCart().getBaseCurrencyCode(),
              quote_currency_code: response.getCart().getQuoteCurrencyCode(),
              items_qty: response.getCart().getItemsQuantity(),
              items: response.getCart().getItemsList().map(item => {
                return {
                  item_id: item.getProductId(),
                  price: item.getPrice(),
                  qty: item.getQuantity(),
                  row_total: item.getRowTotal(),
                  row_total_with_discount: item.getRowTotalWithDiscount(),
                  tax_amount: item.getTaxAmount(),
                  tax_percent: item.getTaxPercent(),
                  discount_amount: item.getDiscountAmount(),
                  discount_percent: item.getDiscountPercent(),
                  price_incl_tax: item.getPriceInclTax(),
                  row_total_incl_tax: item.getRowTotalInclTax(),
                  base_row_total_incl_tax: item.getBaseRowTotalInclTax(),
                  // options: [], TODO: Support to it
                  name: item.getName()
                }
              }),
              total_segments: response.getTotalSegmentsList().map(segment => {
                return {
                  code: segment.getCode(),
                  title: segment.getName(),
                  value: segment.getValue(),
                  area: segment.getArea(),
                  extension_attributes: {
                    tax_grandtotal_details: segment.getTaxesList().map(tax => {
                      return {
                        amount: tax.getAmount(),
                        group_id: tax.getGroupId(),
                        rates: tax.getRatesList().map(rate => {
                          return {
                            percent: rate.getRate(),
                            title: rate.getName()
                          }
                        })
                      }
                    })
                  }
                }
              })
            }
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

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
  cartApi.post('/shipping-methods', (req, res) => {
    if (req.body) {
      service.getShippingMethods({
        token: req.query.token,
        cartId: req.query.cartId,
        countryCode: req.body.address.country_id,
        regionId: req.body.address.region_id,
        regionName: req.body.address.region_code,
        firstName: req.body.address.firstname,
        lastName: req.body.address.lastname,
        cityName: req.body.address.city,
        postalCode: req.body.address.postcode,
        address1: req.body.address.street[0],
        address2: req.body.address.street[1],
        address3: req.body.address.street[2],
        address4: req.body.address.street[3]
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: response.getShippingMethodsList().map(shippingMethod => {
              return {
                method_code: shippingMethod.getMethodCode(),
                method_title: shippingMethod.getMethodName(),
                carrier_code: shippingMethod.getCarrierCode(),
                carrier_title: shippingMethod.getCarrierName(),
                amount: shippingMethod.getAmount(),
                base_amount: shippingMethod.getAmount(),
                available: shippingMethod.getIsAvailable(),
                price_excl_tax: shippingMethod.getAmount(),
                price_incl_tax: shippingMethod.getAmount() * (shippingMethod.getAmount() * shippingMethod.getTaxRate())
              }
            })
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * GET /payment-methods - available payment methods
   *   req.query.token - user token
   *   req.query.cartId - cart ID if user is logged in, cart token if not
   *
   * ```bash
   * curl 'https://api.erpya.com/vsbridge/cart/payment-methods?token=xu8h02nd66yq0gaayj4x3kpqwity02or&cartId=81668' -H 'content-type: application/json'
   *
   */
  cartApi.get('/payment-methods', (req, res) => {
    if (req.body) {
      service.getPaymentMethods({
        token: req.query.token,
        cartId: req.query.cartId
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: response.getPaymentMethodsList().map(paymentMethod => {
              return {
                code: paymentMethod.getCode(),
                title: paymentMethod.getName()
              }
            })
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

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
  cartApi.post('/shipping-information', (req, res) => {
    if (req.body) {
      let shippingAddress = {}
      let billingAddress = {}
      let carrierCode = {}
      let methodCode = {}
      if (req.body.addressInformation) {
        carrierCode = req.body.addressInformation.shippingCarrierCode
        methodCode = req.body.addressInformation.shippingMethodCode
        if (req.body.addressInformation.shippingAddress) {
          let street = []
          if (req.body.addressInformation.shippingAddress.street) {
            street = req.body.addressInformation.shippingAddress.street
          }
          shippingAddress = {
            firstName: req.body.addressInformation.shippingAddress.firstname,
            lastName: req.body.addressInformation.shippingAddress.lastname,
            countryCode: req.body.addressInformation.shippingAddress.countryId,
            cityName: req.body.addressInformation.shippingAddress.city,
            postalCode: req.body.addressInformation.shippingAddress.postcode,
            address1: street[0],
            address2: street[1],
            address3: street[2],
            address4: street[3]
          }
        }
        if (req.body.addressInformation.billingAddress) {
          let street = []
          if (req.body.addressInformation.billingAddress.street) {
            street = req.body.addressInformation.billingAddress.street
          }
          billingAddress = {
            firstName: req.body.addressInformation.billingAddress.firstname,
            lastName: req.body.addressInformation.billingAddress.lastname,
            countryCode: req.body.addressInformation.billingAddress.countryId,
            cityName: req.body.addressInformation.billingAddress.city,
            postalCode: req.body.addressInformation.billingAddress.postcode,
            address1: street[0],
            address2: street[1],
            address3: street[2],
            address4: street[3]
          }
        }
      }
      service.getShippingInformation({
        token: req.query.token,
        cartId: req.query.cartId,
        shippingAddress,
        billingAddress,
        carrierCode,
        methodCode
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              payment_methods: response.getPaymentMethodsList().map(paymentMethod => {
                return {
                  code: paymentMethod.getCode(),
                  title: paymentMethod.getName()
                }
              }),
              totals: {
                grand_total: response.getCart().getGrandTotal(),
                subtotal: response.getCart().getSubtotal(),
                discount_amount: response.getCart().getDiscountAmount(),
                subtotal_with_discount: response.getCart().getSubtotalWithDiscount(),
                shipping_amount: response.getCart().getShippingAmount(),
                shipping_discount_amount: response.getCart().getShippingDiscountAmount(),
                tax_amount: response.getCart().getTaxAmount(),
                shipping_tax_amount: response.getCart().getShippingTaxAmount(),
                base_shipping_tax_amount: response.getCart().getBaseShippingTaxAmount(),
                subtotal_incl_tax: response.getCart().getSubtotalInclTax(),
                shipping_incl_tax: response.getCart().getShippingInclTax(),
                base_currency_code: response.getCart().getBaseCurrencyCode(),
                quote_currency_code: response.getCart().getQuoteCurrencyCode(),
                items_qty: response.getCart().getItemsQuantity(),
                items: response.getCart().getItemsList().map(item => {
                  return {
                    item_id: item.getProductId(),
                    price: item.getPrice(),
                    qty: item.getQuantity(),
                    row_total: item.getRowTotal(),
                    row_total_with_discount: item.getRowTotalWithDiscount(),
                    tax_amount: item.getTaxAmount(),
                    tax_percent: item.getTaxPercent(),
                    discount_amount: item.getDiscountAmount(),
                    discount_percent: item.getDiscountPercent(),
                    price_incl_tax: item.getPriceInclTax(),
                    row_total_incl_tax: item.getRowTotalInclTax(),
                    base_row_total_incl_tax: item.getBaseRowTotalInclTax(),
                    // options: [], TODO: Support to it
                    name: item.getName()
                  }
                }),
                total_segments: response.getTotalSegmentsList().map(segment => {
                  return {
                    code: segment.getCode(),
                    title: segment.getName(),
                    value: segment.getValue(),
                    area: segment.getArea(),
                    extension_attributes: {
                      tax_grandtotal_details: segment.getTaxesList().map(tax => {
                        return {
                          amount: tax.getAmount(),
                          group_id: tax.getGroupId(),
                          rates: tax.getRatesList().map(rate => {
                            return {
                              percent: rate.getRate(),
                              title: rate.getName()
                            }
                          })
                        }
                      })
                    }
                  }
                })
              }
            }
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  return cartApi;
};
