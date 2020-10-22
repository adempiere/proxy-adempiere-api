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
              firstname: req.body.addressInformation.shippingAddress.firstname,
              lastname: req.body.addressInformation.shippingAddress.lastname,
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
              firstname: req.body.addressInformation.billingAddress.firstname,
              lastname: req.body.addressInformation.billingAddress.lastname,
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
        service.createOrder({
          token: req.query.token,
          cartId: req.body.cart_id,
          userId: req.body.user_id,
          shippingAddress,
          billingAddress,
          carrierCode,
          methodCode,
          paymentMethodCode,
          products: req.body.products.map(product => {
            return {
              id: product.id,
              quantity: product.qty
            }
          })
        }, function (err, response) {
          if (response) {
            res.json({
              code: 200,
              result: 'OK'
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
