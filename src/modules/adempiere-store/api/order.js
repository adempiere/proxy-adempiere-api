import resource from 'resource-router-middleware';

export default ({ config, db, service }) =>
  resource({
    /** Property name to store preloaded entity on `request`. */
    id: 'order',

    /**
     * POST create an order
     *
     * Request body:
     *
     * {
     *   "user_id": "",
     *   "cart_id": "d90e9869fbfe3357281a67e3717e3524",
     *   "products": [
     *      {
     *           "sku": "WT08-XS-Yellow",
     *          "qty": 1
     *       }
     *   ],
     *   "addressInformation": {
     *       "shippingAddress": {
     *           "region": "",
     *           "region_id": 0,
     *           "country_id": "PL",
     *           "street": [
     *               "Example",
     *               "12"
     *           ],
     *           "company": "NA",
     *           "telephone": "",
     *           "postcode": "50-201",
     *           "city": "Wroclaw",
     *           "firstname": "Piotr",
     *           "lastname": "Karwatka",
     *           "email": "pkarwatka30@divante.pl",
     *           "region_code": ""
     *       },
     *       "billingAddress": {
     *           "region": "",
     *           "region_id": 0,
     *           "country_id": "PL",
     *           "street": [
     *                "Example",
     *               "12"
     *           ],
     *           "company": "Company name",
     *           "telephone": "",
     *           "postcode": "50-201",
     *           "city": "Wroclaw",
     *           "firstname": "Piotr",
     *           "lastname": "Karwatka",
     *           "email": "pkarwatka30@divante.pl",
     *           "region_code": "",
     *           "vat_id": "PL88182881112"
     *       },
     *       "shipping_method_code": "flatrate",
     *       "shipping_carrier_code": "flatrate",
     *       "payment_method_code": "cashondelivery",
     *       "payment_method_additional": {}
     *   },
     *   "order_id": "1522811662622-d3736c94-49a5-cd34-724c-87a3a57c2750",
     *   "transmited": false,
     *   "created_at": "2018-04-04T03:14:22.622Z",
     *   "updated_at": "2018-04-04T03:14:22.622Z"
     *  }
     */
    create (req, res) {
      if (req.body) {
        let shippingAddress = {}
        let billingAddress = {}
        let carrierCode = {}
        let methodCode = {}
        let paymentMethodCode = {}
        let paymentAdditionalMethod = {}
        if (req.body.addressInformation) {
          carrierCode = req.body.addressInformation.shipping_carrier_code
          methodCode = req.body.addressInformation.shipping_method_code
          paymentMethodCode = req.body.addressInformation.payment_method_code
          if (req.body.addressInformation.shippingAddress) {
            let street = []
            if (req.body.addressInformation.shippingAddress.street) {
              street = req.body.addressInformation.shippingAddress.street
            }
            shippingAddress = {
              id: req.body.addressInformation.shippingAddress.location_id,
              firstName: req.body.addressInformation.shippingAddress.firstname,
              lastName: req.body.addressInformation.shippingAddress.lastname,
              countryCode: req.body.addressInformation.shippingAddress.country_id,
              cityName: req.body.addressInformation.shippingAddress.city,
              postalCode: req.body.addressInformation.shippingAddress.postcode,
              regionId: req.body.addressInformation.shippingAddress.region_id,
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
              id: req.body.addressInformation.shippingAddress.location_id,
              firstName: req.body.addressInformation.billingAddress.firstname,
              lastName: req.body.addressInformation.billingAddress.lastname,
              countryCode: req.body.addressInformation.billingAddress.country_id,
              cityName: req.body.addressInformation.billingAddress.city,
              postalCode: req.body.addressInformation.billingAddress.postcode,
              regionId: req.body.addressInformation.billingAddress.region_id,
              address1: street[0],
              address2: street[1],
              address3: street[2],
              address4: street[3]
            }
          }
          //  Additional Payment Methods
          if (req.body.addressInformation.payment_method_additional) {
            paymentAdditionalMethod = req.body.addressInformation.payment_method_additional
          }
        }
        service.createOrder({
          token: req.query.token,
          cartId: req.body.cart_id,
          userId: req.body.user_id,
          customerId: req.body.customer_id,
          shippingAddress,
          billingAddress,
          carrierCode,
          methodCode,
          paymentMethodCode,
          paymentAdditionalMethod,
          products: req.body.products.map(product => {
            let configurableOptions
            if (product.product_option) {
              configurableOptions = product.product_option.extension_attributes.configurable_item_options.map(option => {
                return {
                  id: option.option_id,
                  value: option.option_value
                }
              })
            }
            return {
              id: product.id,
              quantity: product.qty,
              sku: product.sku,
              configurableOptions
            }
          })
        }, (err, response) => {
          if (response) {
            let shippingAddress = {}
            let billingAddress = {}
            let shipping = response.getShippingAddress()
            let billing = response.getBillingAddress()
            //  Shipping
            if (shipping) {
              shippingAddress.id = shipping.getId()
              shippingAddress.country_id = shipping.getCountryCode()
              if (shipping.getRegion()) {
                shippingAddress.region = {
                  region: shipping.getRegion().getName(),
                  region_id: shipping.getRegion().getId()
                }
                shippingAddress.region_id = shipping.getRegion().getId()
              }
              shippingAddress.country_id = shipping.getCountryCode()
              shippingAddress.street = [
                shipping.getAddress1(),
                shipping.getAddress2(),
                shipping.getAddress3(),
                shipping.getAddress4()
              ]
              if (shipping.getCity()) {
                shippingAddress.city = shipping.getCity().getName()
              }
              shippingAddress.telephone = shipping.getPhone()
              shippingAddress.postcode = shipping.getPostalCode()
              shippingAddress.firstname = shipping.getFirstName()
              shippingAddress.lastname = shipping.getLastName()
              shippingAddress.default_shipping = shipping.getIsDefaultShipping()
            }
            //  Billing
            if (billing) {
              billingAddress.id = billing.getId()
              billingAddress.country_id = billing.getCountryCode()
              if (billing.getRegion()) {
                billingAddress.region = {
                  region: billing.getRegion().getName(),
                  region_id: billing.getRegion().getId()
                }
                billingAddress.region_id = billing.getRegion().getId()
              }
              billingAddress.country_id = billing.getCountryCode()
              billingAddress.street = [
                billing.getAddress1(),
                billing.getAddress2(),
                billing.getAddress3(),
                billing.getAddress4()
              ]
              if (shipping.getCity()) {
                billingAddress.city = billing.getCity().getName()
              }
              billingAddress.telephone = billing.getPhone()
              billingAddress.postcode = billing.getPostalCode()
              billingAddress.firstname = billing.getFirstName()
              billingAddress.lastname = billing.getLastName()
              billingAddress.default_shipping = billing.getIsDefaultShipping()
            }
            res.json({
              code: 200,
              result: {
                id: response.getId(),
                group_id: 1,
                created_at: response.getCreated(),
                updated_at: response.getUpdated(),
                transmited_at: response.getTransmited(),
                method_code: response.getMethodCode(),
                carrier_code: response.getCarrierCode(),
                payment_method_code: response.getPaymentMethodCode(),
                addressInformation: {
                  shippingAddress: shippingAddress,
                  billingAddress: billingAddress
                },
                products: response.getOrderLinesList().map(orderLine => {
                  return {
                    sku: orderLine.getSku(),
                    name: orderLine.getName(),
                    quantity: orderLine.getQuantity(),
                    price: orderLine.getPrice()
                  }
                }),
                disable_auto_group_change: 0
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
    }
  });
