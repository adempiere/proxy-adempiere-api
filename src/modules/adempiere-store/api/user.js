import { Router } from 'express';

export default ({ config, db, service }) => {
  let userApi = Router();
  /**
   * POST create an user
   *
   * ```bash
   * curl 'https://api.erpya.com/vsbridge/user/create' -H 'content-type: application/json' -H 'accept: application/json, text/plain'--data-binary '{"customer":{"email":"pkarwatka9998@divante.pl","firstname":"Joe","lastname":"Black"},"password":"SecretPassword!@#123"}'
   * ```
   * Request body:
   *
   * {
   *    "customer": {
   *       "email": "pkarwatka9998@divante.pl",
   *       "firstname": "Joe",
   *       "lastname": "Black"
   *    },
   *    "password": "SecretPassword"
   *    }
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#post-vsbridgeusercreate
   */
  userApi.post('/create', (req, res) => {
    if (req.body) {
      service.createCustomer({
        email: req.body.customer.email,
        firstName: req.body.customer.firstname,
        lastName: req.body.customer.lastname,
        password: req.body.password
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              id: response.getId(),
              group_id: 1,
              created_at: response.getCreated(),
              updated_at: response.getUpdated(),
              created_in: response.getOrganizationName(),
              email: response.getEmail(),
              firstname: response.getFirstName(),
              lastname: response.getLastName(),
              store_id: response.getWebStoreId(),
              website_id: 1,
              addresses: response.getAddressesList().map(address => {
                return {
                  id: address.getId(),
                  customer_id: response.getId(),
                  region: {
                    region: address.getRegion().getName(),
                    region_id: address.getRegion().getId()
                  },
                  region_id: address.getRegion().getId(),
                  country_id: address.getCountryCode(),
                  street: [
                    address.getAddress1(),
                    address.getAddress2(),
                    address.getAddress3(),
                    address.getAddress4()
                  ],
                  telephone: address.getPhone(),
                  postcode: address.getPostalCode(),
                  city: address.getCity().getName(),
                  firstname: address.getFirstName(),
                  lastname: address.getLastName(),
                  default_shipping: address.getIsDefaultShipping()
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
  });

  /**
   * POST login an user
   *
   * Request body:
   *
   * {
   * "username":"pkarwatka102@divante.pl",
   * "password":"TopSecretPassword"
   * }
   *
   * ```bash
   * curl 'https://api.erpya.com/vsbridge/user/login' -H 'content-type: application/json' -H 'accept: application/json' --data-binary '"username":"pkarwatka102@divante.pl","password":"TopSecretPassword}'
   * ```
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#post-vsbridgeuserlogin
   */
  userApi.post('/login', (req, res) => {
    if (req.body) {
      service.login({
        user: req.body.username,
        password: req.body.password
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: response.getUuid()
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
   * POST refresh user token
   *
   * Request body:
   * {
   * "refreshToken"getRegion: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEzOSJ9.a4HQc2HODmOj5SRMiv-EzWuMZbyIz0CLuVRhPw_MrOM"
   * }
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#post-vsbridgeuserrefresh
   */
  userApi.post('/refresh', (req, res) => {});

  /**
   * POST reset-password
   *
   * ```bash
   * curl 'https://api.erpya.com/vsbridge/user/resetPassword' -H 'content-type: application/json' -H 'accept: application/json, text/plain' --data-binary '{"email":"pkarwatka992@divante.pl"}'
   * ```
   *
   * Request body:
   * {
   * "email": "pkarwatka992@divante.pl"
   * }
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#post-vsbridgeuserresetpassword
   */
  userApi.post('/reset-password', (req, res) => {
    if (req.body) {
      service.resetPassword({
        email: req.body.email
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: 'Ok'
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
   * GET  an user
   *
   * req.query.token - user token obtained from the `/api/user/login`
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserme
   */
  userApi.get('/me', (req, res) => {
    if (req.body) {
      service.getCustomer({
        token: req.query.token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              id: response.getId(),
              group_id: 1,
              created_at: response.getCreated(),
              updated_at: response.getUpdated(),
              created_in: response.getOrganizationName(),
              email: response.getEmail(),
              firstname: response.getFirstName(),
              lastname: response.getLastName(),
              store_id: response.getWebStoreId(),
              website_id: response.getWebsiteId(),
              addresses: response.getAddressesList().map(address => {
                let region = {}
                let city = {}
                if (address.getRegion()) {
                  region.region_id = address.getRegion().getId()
                  region.name = address.getRegion().getName()
                }
                if (address.getCity()) {
                  city.name = address.getCity().getName()
                }
                return {
                  id: address.getId(),
                  customer_id: response.getId(),
                  region: {
                    region: region.name,
                    region_id: region.region_id
                  },
                  region_id: region.region_id,
                  country_id: address.getCountryCode(),
                  street: [
                    address.getAddress1(),
                    address.getAddress2(),
                    address.getAddress3(),
                    address.getAddress4()
                  ],
                  telephone: address.getPhone(),
                  postcode: address.getPostalCode(),
                  city: city.name,
                  firstname: address.getFirstName(),
                  lastname: address.getLastName(),
                  default_shipping: address.getIsDefaultShipping(),
                  default_billing: address.getIsDefaultBilling()
                }
              }),
              //  TODO: Add addresses
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
  });

  /**
   * GET  an user order history
   *
   * req.query.token - user token
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userApi.get('/order-history', (req, res) => {
    if (req.body) {
      service.listOrders({
        token: req.query.token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              items: response.getOrdersList().map(order => {
                let billingAddress = {}
                let shippingAddress = {}
                let billingAddressId = 0
                if (order.getBillingAddress()) {
                  billingAddressId = order.getBillingAddress().getId()
                  billingAddress = {
                    address_type: 'billing',
                    city: order.getBillingAddress().getCity().getName(),
                    company: 'NA',
                    country_id: order.getBillingAddress().getCountryCode(),
                    email: 'NA',
                    entity_id: 204,
                    firstname: order.getBillingAddress().getFirstName(),
                    lastname: order.getBillingAddress().getLastName(),
                    parent_id: 102,
                    postcode: order.getBillingAddress().getPostalCode(),
                    street: [
                      order.getBillingAddress().getAddress1(),
                      order.getBillingAddress().getAddress2(),
                      order.getBillingAddress().getAddress3(),
                      order.getBillingAddress().getAddress4()
                    ],
                    telephone: order.getBillingAddress().getPhone(),
                    vat_id: 'PL8951930748'
                  }
                }
                if (order.getShippingAddress()) {
                  shippingAddress = {
                    address_type: 'billing',
                    city: order.getShippingAddress().getCity().getName(),
                    company: 'NA',
                    country_id: order.getShippingAddress().getCountryCode(),
                    email: 'NA',
                    entity_id: 204,
                    firstname: order.getShippingAddress().getFirstName(),
                    lastname: order.getShippingAddress().getLastName(),
                    parent_id: 102,
                    postcode: order.getShippingAddress().getPostalCode(),
                    street: [
                      order.getShippingAddress().getAddress1(),
                      order.getShippingAddress().getAddress2(),
                      order.getShippingAddress().getAddress3(),
                      order.getShippingAddress().getAddress4()
                    ],
                    telephone: order.getShippingAddress().getPhone(),
                    vat_id: 'PL8951930748'
                  }
                }
                return {
                  applied_rule_ids: '1,5',
                  base_currency_code: 'USD',
                  base_discount_amount: -3.3,
                  base_grand_total: 28,
                  base_discount_tax_compensation_amount: 0,
                  base_shipping_amount: 5,
                  base_shipping_discount_amount: 0,
                  base_shipping_incl_tax: 5,
                  base_shipping_tax_amount: 0,
                  base_subtotal: 22,
                  base_subtotal_incl_tax: 27.06,
                  base_tax_amount: 4.3,
                  base_total_due: 28,
                  base_to_global_rate: 1,
                  base_to_order_rate: 1,
                  billing_address_id: billingAddressId,
                  created_at: order.getCreated(),
                  customer_email: 'pkarwatka28@example.com',
                  customer_group_id: 0,
                  customer_is_guest: 1,
                  customer_note_notify: 1,
                  discount_amount: -3.3,
                  email_sent: 1,
                  entity_id: 102,
                  global_currency_code: 'USD',
                  grand_total: 28,
                  discount_tax_compensation_amount: 0,
                  increment_id: order.getDocumentNo(),
                  is_virtual: 0,
                  order_currency_code: 'USD',
                  protect_code: '3984835d33abd2423b8a47efd0f74579',
                  quote_id: 1112,
                  shipping_amount: 5,
                  shipping_description: 'Flat Rate - Fixed',
                  shipping_discount_amount: 0,
                  shipping_discount_tax_compensation_amount: 0,
                  shipping_incl_tax: 5,
                  shipping_tax_amount: 0,
                  state: 'new',
                  status: 'pending',
                  store_currency_code: 'USD',
                  store_id: 1,
                  store_name: 'Main Website\nMain Website Store\n',
                  store_to_base_rate: 0,
                  store_to_order_rate: 0,
                  subtotal: 22,
                  subtotal_incl_tax: 27.06,
                  tax_amount: 4.3,
                  total_due: 28,
                  total_item_count: 1,
                  total_qty_ordered: 1,
                  updated_at: order.getUpdated(),
                  weight: 1,
                  items: order.getOrderLinesList().map(orderLine => {
                    return {
                      amount_refunded: 0,
                      applied_rule_ids: '1,5',
                      base_amount_refunded: 0,
                      base_discount_amount: 3.3,
                      base_discount_invoiced: 0,
                      base_discount_tax_compensation_amount: 0,
                      base_original_price: 22,
                      base_price: 22,
                      base_price_incl_tax: 27.06,
                      base_row_invoiced: 0,
                      base_row_total: 22,
                      base_row_total_incl_tax: 27.06,
                      base_tax_amount: 4.3,
                      base_tax_invoiced: 0,
                      created_at: '2018-01-23 15:30:04',
                      discount_amount: 3.3,
                      discount_invoiced: 0,
                      discount_percent: 15,
                      free_shipping: 0,
                      discount_tax_compensation_amount: 0,
                      is_qty_decimal: 0,
                      is_virtual: 0,
                      item_id: 224,
                      name: orderLine.getName(),
                      no_discount: 0,
                      order_id: 102,
                      original_price: 22,
                      price: orderLine.getPrice(),
                      price_incl_tax: 27.06,
                      product_id: 1546,
                      product_type: 'simple',
                      qty_canceled: 0,
                      qty_invoiced: 0,
                      qty_ordered: orderLine.getQuantity(),
                      qty_refunded: 0,
                      qty_shipped: 0,
                      quote_item_id: 675,
                      row_invoiced: 0,
                      row_total: 22,
                      row_total_incl_tax: 27.06,
                      row_weight: 1,
                      sku: orderLine.getSku(),
                      store_id: 1,
                      tax_amount: 4.3,
                      tax_invoiced: 0,
                      tax_percent: 23,
                      updated_at: '2018-01-23 15:30:04',
                      weight: 1
                    }
                  }),
                  billing_address: billingAddress,
                  payment: {
                    account_status: null,
                    additional_information: ['Cash On Delivery', ''],
                    amount_ordered: 28,
                    base_amount_ordered: 28,
                    base_shipping_amount: 5,
                    cc_last4: null,
                    entity_id: 102,
                    method: order.getPaymentMethodCode(),
                    parent_id: 102,
                    shipping_amount: 5
                  },
                  status_histories: [],
                  extension_attributes: {
                    shipping_assignments: [
                      {
                        shipping: {
                          address: shippingAddress,
                          method: order.getMethodCode(),
                          total: {
                            base_shipping_amount: 5,
                            base_shipping_discount_amount: 0,
                            base_shipping_incl_tax: 5,
                            base_shipping_tax_amount: 0,
                            shipping_amount: 5,
                            shipping_discount_amount: 0,
                            shipping_discount_tax_compensation_amount: 0,
                            shipping_incl_tax: 5,
                            shipping_tax_amount: 0
                          }
                        },
                        items: [
                          {
                            amount_refunded: 0,
                            applied_rule_ids: '1,5',
                            base_amount_refunded: 0,
                            base_discount_amount: 3.3,
                            base_discount_invoiced: 0,
                            base_discount_tax_compensation_amount: 0,
                            base_original_price: 22,
                            base_price: 22,
                            base_price_incl_tax: 27.06,
                            base_row_invoiced: 0,
                            base_row_total: 22,
                            base_row_total_incl_tax: 27.06,
                            base_tax_amount: 4.3,
                            base_tax_invoiced: 0,
                            created_at: '2018-01-23 15:30:04',
                            discount_amount: 3.3,
                            discount_invoiced: 0,
                            discount_percent: 15,
                            free_shipping: 0,
                            discount_tax_compensation_amount: 0,
                            is_qty_decimal: 0,
                            is_virtual: 0,
                            item_id: 224,
                            name: 'Radiant Tee-XS-Blue',
                            no_discount: 0,
                            order_id: 102,
                            original_price: 22,
                            price: 22,
                            price_incl_tax: 27.06,
                            product_id: 1546,
                            product_type: 'simple',
                            qty_canceled: 0,
                            qty_invoiced: 0,
                            qty_ordered: 1,
                            qty_refunded: 0,
                            qty_shipped: 0,
                            quote_item_id: 675,
                            row_invoiced: 0,
                            row_total: 22,
                            row_total_incl_tax: 27.06,
                            row_weight: 1,
                            sku: 'WS12-XS-Blue',
                            store_id: 1,
                            tax_amount: 4.3,
                            tax_invoiced: 0,
                            tax_percent: 23,
                            updated_at: '2018-01-23 15:30:04',
                            weight: 1
                          }
                        ]
                      }
                    ]
                  }
                }
              }),
              search_criteria: {
                filter_groups: [
                  {
                    filters: [
                      {
                        field: 'customer_email',
                        value: 'NA',
                        condition_type: 'eq'
                      }
                    ]
                  }
                ]
              },
              total_count: response.getRecordCount()
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
    // res.json({
    //   code: 200,
    //   result: {
    //     items: [
    //       {
    //         applied_rule_ids: '1,5',
    //         base_currency_code: 'USD',
    //         base_discount_amount: -3.3,
    //         base_grand_total: 28,
    //         base_discount_tax_compensation_amount: 0,
    //         base_shipping_amount: 5,
    //         base_shipping_discount_amount: 0,
    //         base_shipping_incl_tax: 5,
    //         base_shipping_tax_amount: 0,
    //         base_subtotal: 22,
    //         base_subtotal_incl_tax: 27.06,
    //         base_tax_amount: 4.3,
    //         base_total_due: 28,
    //         base_to_global_rate: 1,
    //         base_to_order_rate: 1,
    //         billing_address_id: 204,
    //         created_at: '2018-01-23 15:30:04',
    //         customer_email: 'pkarwatka28@example.com',
    //         customer_group_id: 0,
    //         customer_is_guest: 1,
    //         customer_note_notify: 1,
    //         discount_amount: -3.3,
    //         email_sent: 1,
    //         entity_id: 102,
    //         global_currency_code: 'USD',
    //         grand_total: 28,
    //         discount_tax_compensation_amount: 0,
    //         increment_id: '000000102',
    //         is_virtual: 0,
    //         order_currency_code: 'USD',
    //         protect_code: '3984835d33abd2423b8a47efd0f74579',
    //         quote_id: 1112,
    //         shipping_amount: 5,
    //         shipping_description: 'Flat Rate - Fixed',
    //         shipping_discount_amount: 0,
    //         shipping_discount_tax_compensation_amount: 0,
    //         shipping_incl_tax: 5,
    //         shipping_tax_amount: 0,
    //         state: 'new',
    //         status: 'pending',
    //         store_currency_code: 'USD',
    //         store_id: 1,
    //         store_name: 'Main Website\nMain Website Store\n',
    //         store_to_base_rate: 0,
    //         store_to_order_rate: 0,
    //         subtotal: 22,
    //         subtotal_incl_tax: 27.06,
    //         tax_amount: 4.3,
    //         total_due: 28,
    //         total_item_count: 1,
    //         total_qty_ordered: 1,
    //         updated_at: '2018-01-23 15:30:05',
    //         weight: 1,
    //         items: [
    //           {
    //             amount_refunded: 0,
    //             applied_rule_ids: '1,5',
    //             base_amount_refunded: 0,
    //             base_discount_amount: 3.3,
    //             base_discount_invoiced: 0,
    //             base_discount_tax_compensation_amount: 0,
    //             base_original_price: 22,
    //             base_price: 22,
    //             base_price_incl_tax: 27.06,
    //             base_row_invoiced: 0,
    //             base_row_total: 22,
    //             base_row_total_incl_tax: 27.06,
    //             base_tax_amount: 4.3,
    //             base_tax_invoiced: 0,
    //             created_at: '2018-01-23 15:30:04',
    //             discount_amount: 3.3,
    //             discount_invoiced: 0,
    //             discount_percent: 15,
    //             free_shipping: 0,
    //             discount_tax_compensation_amount: 0,
    //             is_qty_decimal: 0,
    //             is_virtual: 0,
    //             item_id: 224,
    //             name: 'Radiant Tee-XS-Blue',
    //             no_discount: 0,
    //             order_id: 102,
    //             original_price: 22,
    //             price: 22,
    //             price_incl_tax: 27.06,
    //             product_id: 1546,
    //             product_type: 'simple',
    //             qty_canceled: 0,
    //             qty_invoiced: 0,
    //             qty_ordered: 1,
    //             qty_refunded: 0,
    //             qty_shipped: 0,
    //             quote_item_id: 675,
    //             row_invoiced: 0,
    //             row_total: 22,
    //             row_total_incl_tax: 27.06,
    //             row_weight: 1,
    //             sku: 'WS12-XS-Blue',
    //             store_id: 1,
    //             tax_amount: 4.3,
    //             tax_invoiced: 0,
    //             tax_percent: 23,
    //             updated_at: '2018-01-23 15:30:04',
    //             weight: 1
    //           }
    //         ],
    //         billing_address: {
    //           address_type: 'billing',
    //           city: 'Some city2',
    //           company: 'Divante',
    //           country_id: 'PL',
    //           email: 'pkarwatka28@example.com',
    //           entity_id: 204,
    //           firstname: 'Piotr',
    //           lastname: 'Karwatka',
    //           parent_id: 102,
    //           postcode: '50-203',
    //           street: ['XYZ', '17'],
    //           telephone: null,
    //           vat_id: 'PL8951930748'
    //         },
    //         payment: {
    //           account_status: null,
    //           additional_information: ['Cash On Delivery', ''],
    //           amount_ordered: 28,
    //           base_amount_ordered: 28,
    //           base_shipping_amount: 5,
    //           cc_last4: null,
    //           entity_id: 102,
    //           method: 'cashondelivery',
    //           parent_id: 102,
    //           shipping_amount: 5
    //         },
    //         status_histories: [],
    //         extension_attributes: {
    //           shipping_assignments: [
    //             {
    //               shipping: {
    //                 address: {
    //                   address_type: 'shipping',
    //                   city: 'Some city',
    //                   company: 'NA',
    //                   country_id: 'PL',
    //                   email: 'pkarwatka28@example.com',
    //                   entity_id: 203,
    //                   firstname: 'Piotr',
    //                   lastname: 'Karwatka',
    //                   parent_id: 102,
    //                   postcode: '51-169',
    //                   street: ['XYZ', '13'],
    //                   telephone: null
    //                 },
    //                 method: 'flatrate_flatrate',
    //                 total: {
    //                   base_shipping_amount: 5,
    //                   base_shipping_discount_amount: 0,
    //                   base_shipping_incl_tax: 5,
    //                   base_shipping_tax_amount: 0,
    //                   shipping_amount: 5,
    //                   shipping_discount_amount: 0,
    //                   shipping_discount_tax_compensation_amount: 0,
    //                   shipping_incl_tax: 5,
    //                   shipping_tax_amount: 0
    //                 }
    //               },
    //               items: [
    //                 {
    //                   amount_refunded: 0,
    //                   applied_rule_ids: '1,5',
    //                   base_amount_refunded: 0,
    //                   base_discount_amount: 3.3,
    //                   base_discount_invoiced: 0,
    //                   base_discount_tax_compensation_amount: 0,
    //                   base_original_price: 22,
    //                   base_price: 22,
    //                   base_price_incl_tax: 27.06,
    //                   base_row_invoiced: 0,
    //                   base_row_total: 22,
    //                   base_row_total_incl_tax: 27.06,
    //                   base_tax_amount: 4.3,
    //                   base_tax_invoiced: 0,
    //                   created_at: '2018-01-23 15:30:04',
    //                   discount_amount: 3.3,
    //                   discount_invoiced: 0,
    //                   discount_percent: 15,
    //                   free_shipping: 0,
    //                   discount_tax_compensation_amount: 0,
    //                   is_qty_decimal: 0,
    //                   is_virtual: 0,
    //                   item_id: 224,
    //                   name: 'Radiant Tee-XS-Blue',
    //                   no_discount: 0,
    //                   order_id: 102,
    //                   original_price: 22,
    //                   price: 22,
    //                   price_incl_tax: 27.06,
    //                   product_id: 1546,
    //                   product_type: 'simple',
    //                   qty_canceled: 0,
    //                   qty_invoiced: 0,
    //                   qty_ordered: 1,
    //                   qty_refunded: 0,
    //                   qty_shipped: 0,
    //                   quote_item_id: 675,
    //                   row_invoiced: 0,
    //                   row_total: 22,
    //                   row_total_incl_tax: 27.06,
    //                   row_weight: 1,
    //                   sku: 'WS12-XS-Blue',
    //                   store_id: 1,
    //                   tax_amount: 4.3,
    //                   tax_invoiced: 0,
    //                   tax_percent: 23,
    //                   updated_at: '2018-01-23 15:30:04',
    //                   weight: 1
    //                 }
    //               ]
    //             }
    //           ]
    //         }
    //       }
    //     ],
    //     search_criteria: {
    //       filter_groups: [
    //         {
    //           filters: [
    //             {
    //               field: 'customer_email',
    //               value: 'pkarwatka28@example.com',
    //               condition_type: 'eq'
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     total_count: 61
    //   }
    // });
  });

  /**
   * POST for updating user
   *
   * Request body:
   *
   * {
   *    "customer": {
   *       "id": 222,
   *      "group_id": 1,
   *      "default_billing": "105",
   *      "default_shipping": "105",
   *      "created_at": "2018-03-16 19:01:18",
   *      "updated_at": "2018-04-03 12:59:13",
   *      "created_in": "Default Store View",
   *      "email": "pkarwatka30@divante.pl",
   *      "firstname": "Piotr",
   *      "lastname": "Karwatka",
   *      "store_id": 1,
   *      "website_id": 1,
   *      "addresses": [
   *      {
   *         "id": 109,
   *         "customer_id": 222,
   *         "region": {
   *         "region_code": null,
   *         "region": null,
   *         "region_id": 0
   *         },
   *         "region_id": 0,
   *         "country_id": "PL",
   *         "street": [
   *         "Dmowskiego",
   *         "17"
   *         ],
   *         "company": "Divante2",
   *         "telephone": "",
   *         "postcode": "50-203",
   *         "city": "Wrocław",
   *         "firstname": "Piotr",
   *         "lastname": "Karwatka2",
   *         "vat_id": "PL8951930748"
   *      }
   *      ],
   *      "disable_auto_group_change": 0
   *   }
   *}
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#post-vsbridgeuserme
   */
  userApi.post('/me', (req, res) => {
    if (req.body) {
      service.updateCustomer({
        customerId: req.body.customer.id,
        email: req.body.customer.email,
        firstName: req.body.customer.firstname,
        lastName: req.body.customer.lastname,
        addresses: req.body.customer.addresses.map(address => {
          let street = []
          if (address.street) {
            street = address.street
          }
          return {
            id: address.id,
            phone: address.telephone,
            firstName: address.firstname,
            lastName: address.lastname,
            countryCode: address.country_id,
            cityName: address.city,
            postalCode: address.postcode,
            address1: street[0],
            address2: street[1],
            address3: street[2],
            address4: street[3]
          }
        })
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              id: response.getId(),
              group_id: 1,
              created_at: response.getCreated(),
              updated_at: response.getUpdated(),
              created_in: response.getOrganizationName(),
              email: response.getEmail(),
              firstname: response.getFirstName(),
              lastname: response.getLastName(),
              store_id: 1,
              website_id: 1,
              addresses: response.getAddressesList().map(address => {
                return {
                  id: address.getId(),
                  customer_id: response.getId(),
                  region: {
                    region: address.getRegion().getName(),
                    region_id: address.getRegion().getId()
                  },
                  region_id: address.getRegion().getId(),
                  country_id: address.getCountryCode(),
                  street: [
                    address.getAddress1(),
                    address.getAddress2(),
                    address.getAddress3(),
                    address.getAddress4()
                  ],
                  telephone: address.getPhone(),
                  postcode: address.getPostalCode(),
                  city: address.getCity().getName(),
                  firstname: address.getFirstName(),
                  lastname: address.getLastName(),
                  default_shipping: address.getIsDefaultShipping(),
                  default_billing: address.getIsDefaultBilling()
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
  });

  /**
   * POST for changing user's password
   *
   * Request body:
   *
   * {
   *  "currentPassword":"OldPassword",
   *  "newPassword":"NewPassword"
   * }
   */
  userApi.post('/change-password', (req, res) => {
    if (req.body) {
      service.changePassword({
        token: req.query.token,
        currentPassword: req.body.currentPassword,
        newPassword: req.body.newPassword
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: 'Ok'
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

  return userApi;
};
