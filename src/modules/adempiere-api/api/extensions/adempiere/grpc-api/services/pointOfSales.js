/*************************************************************************************
 * Product: ADempiere gRPC Point Of Sales Client                                     *
 * Copyright (C) 2018-present E.R.P. Consultores y Asociados, C.A.                   *
 * Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                      *
 * This program is free software: you can redistribute it and/or modify              *
 * it under the terms of the GNU General Public License as published by              *
 * the Free Software Foundation, either version 3 of the License, or                 *
 * (at your option) any later version.                                               *
 * This program is distributed in the hope that it will be useful,                   *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of                    *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the                      *
 * GNU General Public License for more details.                                      *
 * You should have received a copy of the GNU General Public License                 *
 * along with this program. If not, see <https://www.gnu.org/licenses/>.             *
 ************************************************************************************/

const { getMetadata } = require('.././utils/metadata.js');
const { getValidInteger } = require('.././utils/valueUtils.js');
const { getDecimalToGRPC } = require('.././utils/baseDataTypeToGRPC');

class PointOfSales {
  /**
   * File on generated stub
   */
  stubFile = require('.././grpc/proto/point_of_sales_pb.js');

  /**
   * Constructor, No authentication required
   * @param {string} host
   * @param {string} version
   * @param {string} language
   */
  constructor (config) {
    if (config) {
      const adempiereConfig = config.adempiereApi.api;
      this.businessHost = adempiereConfig.businessHost;
      this.version = adempiereConfig.version;
      this.language = adempiereConfig.language;
      this.token = adempiereConfig.token;
    }

    this.initPointOfSalesService();
    console.log('ADempiere Point Of Sales Client Started');
  }

  // Init connection
  initPointOfSalesService () {
    const grpc = require('@grpc/grpc-js');
    const services = require('.././grpc/proto/point_of_sales_grpc_pb');
    this.pointOfSales = new services.StoreClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get PointOfSales Service
  getPointOfSalesService () {
    return this.pointOfSales;
  }

  //  List Point of Sales
  listPointOfSales ({
    token,
    userUuid,
    //  Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListPointOfSalesRequest } = this.stubFile;
    const request = new ListPointOfSalesRequest()

    request.setUserUuid(userUuid)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().listPointOfSales(
      request,
      metadata,
      callback
    );
  }

  //  Get Point of Sales
  getPointOfSales ({
    token,
    posUuid
  }, callback) {
    const { PointOfSalesRequest } = this.stubFile;
    const request = new PointOfSalesRequest()
    request.setPosUuid(posUuid)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().getPointOfSales(
      request,
      metadata,
      callback
    );
  }

  //  Get Product Price
  getProductPrice ({
    token,
    searchValue,
    upc,
    value,
    name,
    posUuid,
    businessPartnerUuid,
    validFrom,
    priceListUuid,
    warehouseUuid
  }, callback) {
    const { GetProductPriceRequest } = this.stubFile;
    const request = new GetProductPriceRequest()
    request.setSearchValue(searchValue)
    request.setUpc(upc)
    request.setValue(value)
    request.setName(name)
    request.setPosUuid(posUuid)
    request.setBusinessPartnerUuid(businessPartnerUuid)
    request.setPriceListUuid(priceListUuid)
    request.setWarehouseUuid(warehouseUuid)
    request.setValidFrom(validFrom)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().getProductPrice(
      request,
      metadata,
      callback
    );
  }

  //  List Product Price
  listProductPrice ({
    token,
    searchValue,
    posUuid,
    businessPartnerUuid,
    priceListUuid,
    warehouseUuid,
    validFrom,
    tableName,
    //  DSL
    filters,
    //  Custom Query
    query,
    whereClause,
    orderByClause,
    limit,
    pageSize,
    pageToken
  }, callback) {
    const { ListProductPriceRequest } = this.stubFile;
    const request = new ListProductPriceRequest();

    request.setSearchValue(searchValue)
    request.setPosUuid(posUuid)
    request.setBusinessPartnerUuid(businessPartnerUuid)
    request.setPriceListUuid(priceListUuid)
    request.setWarehouseUuid(warehouseUuid)
    request.setValidFrom(validFrom)
    //
    const { getCriteriaToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
    //  TODO: Add support to all parameters
    request.setCriteria(
      getCriteriaToGRPC({
        tableName,
        filters,
        query,
        whereClause,
        orderByClause,
        limit
      })
    );
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().listProductPrice(
      request,
      metadata,
      callback
    );
  }

  //  Create Sales Order
  createOrder ({
    token,
    posUuid,
    customerUuid,
    documentTypeUuid,
    warehouseUuid,
    priceListUuid,
    salesRepresentativeUuid,
    campaignUuid
  }, callback) {
    const { CreateOrderRequest } = this.stubFile;
    const request = new CreateOrderRequest()
    request.setPosUuid(posUuid)
    request.setCampaignUuid(campaignUuid)
    request.setCustomerUuid(customerUuid)
    request.setDocumentTypeUuid(documentTypeUuid)
    request.setSalesRepresentativeUuid(salesRepresentativeUuid)
    if (warehouseUuid) {
      request.setWarehouseUuid(warehouseUuid)
    }
    if (priceListUuid) {
      request.setPriceListUuid(priceListUuid)
    }

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().createOrder(
      request,
      metadata,
      callback
    );
  }

  //  Release Sales Order
  releaseOrder ({
    token,
    posUuid,
    orderUuid,
    salesRepresentativeUuid
  }, callback) {
    const { ReleaseOrderRequest } = this.stubFile;
    const request = new ReleaseOrderRequest()
    request.setPosUuid(posUuid)
    request.setOrderUuid(orderUuid)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().releaseOrder(
      request,
      metadata,
      callback
    );
  }

  //  Hold Sales Order
  holdOrder ({
    token,
    posUuid,
    orderUuid,
    salesRepresentativeUuid
  }, callback) {
    const { HoldOrderRequest } = this.stubFile;
    const request = new HoldOrderRequest()
    request.setPosUuid(posUuid)
    request.setOrderUuid(orderUuid)
    request.setSalesRepresentativeUuid(salesRepresentativeUuid)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().holdOrder(
      request,
      metadata,
      callback
    );
  }

  //  Delete Sales Order
  deleteOrder ({
    token,
    posUuid,
    orderUuid
  }, callback) {
    const { DeleteOrderRequest } = this.stubFile;
    const request = new DeleteOrderRequest()

    request.setPosUuid(posUuid);
    request.setOrderUuid(orderUuid)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().deleteOrder(
      request,
      metadata,
      callback
    );
  }

  //  Create Sales Order Line
  createOrderLine ({
    token,
    posUuid,
    orderUuid,
    productUuid,
    chargeUuid,
    resourceAssignmentUuid,
    description,
    quantity,
    price,
    discountRate,
    warehouseUuid
  }, callback) {
    const { CreateOrderLineRequest } = this.stubFile;
    const request = new CreateOrderLineRequest();

    request.setPosUuid(posUuid);
    request.setOrderUuid(orderUuid)
    request.setProductUuid(productUuid)
    request.setChargeUuid(chargeUuid)
    request.setResourceAssignmentUuid(resourceAssignmentUuid);
    request.setDescription(description)

    const { getDecimalToGRPC } = require('.././utils/baseDataTypeToGRPC');
    if (quantity) {
      request.setQuantity(getDecimalToGRPC(quantity))
    }
    if (price) {
      request.setPrice(getDecimalToGRPC(price))
    }
    if (discountRate) {
      request.setDiscountRate(getDecimalToGRPC(discountRate))
    }
    if (warehouseUuid) {
      request.setWarehouseUuid(warehouseUuid)
    }

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().createOrderLine(
      request,
      metadata,
      callback
    );
  }

  //  Delete Sales Order Line
  deleteOrderLine ({
    token,
    posUuid,
    orderLineUuid
  }, callback) {
    const { DeleteOrderLineRequest } = this.stubFile;
    const request = new DeleteOrderLineRequest()

    request.setPosUuid(posUuid);
    request.setOrderLineUuid(orderLineUuid)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().deleteOrderLine(
      request,
      metadata,
      callback
    );
  }

  //  Update Sales Order
  updateOrder ({
    token,
    orderUuid,
    posUuid,
    customerUuid,
    documentTypeUuid,
    warehouseUuid,
    priceListUuid,
    description,
    campaignUuid,
    discountRate,
    discountRateOff,
    discountAmountOff,
    salesRepresentativeUuid
  }, callback) {
    const { UpdateOrderRequest } = this.stubFile;
    const request = new UpdateOrderRequest();
    request.setOrderUuid(orderUuid)
    request.setCampaignUuid(campaignUuid)
    request.setPosUuid(posUuid)
    request.setCustomerUuid(customerUuid)
    request.setDocumentTypeUuid(documentTypeUuid)
    request.setDescription(description)

    const { getDecimalToGRPC } = require('.././utils/baseDataTypeToGRPC');
    request.setDiscountRate(
      getDecimalToGRPC(discountRate)
    );
    request.setDiscountRateOff(
      getDecimalToGRPC(discountRateOff)
    );
    request.setDiscountAmountOff(
      getDecimalToGRPC(discountAmountOff)
    );
    request.setSalesRepresentativeUuid(salesRepresentativeUuid);

    if (warehouseUuid) {
      request.setWarehouseUuid(warehouseUuid)
    }
    if (priceListUuid) {
      request.setPriceListUuid(priceListUuid)
    }

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().updateOrder(
      request,
      metadata,
      callback
    );
  }

  //  Update Sales Order Line
  updateOrderLine ({
    token,
    posUuid,
    orderLineUuid,
    description,
    quantity,
    uomUuid,
    price,
    discountRate,
    isAddQuantity,
    warehouseUuid
  }, callback) {
    const { UpdateOrderLineRequest } = this.stubFile;
    const request = new UpdateOrderLineRequest();

    request.setPosUuid(posUuid);
    request.setOrderLineUuid(orderLineUuid)
    request.setDescription(description)

    const { getDecimalToGRPC } = require('.././utils/baseDataTypeToGRPC');
    request.setQuantity(
      getDecimalToGRPC(quantity)
    );
    request.setPrice(
      getDecimalToGRPC(price)
    );
    request.setDiscountRate(
      getDecimalToGRPC(discountRate)
    );

    request.setWarehouseUuid(warehouseUuid)
    request.setIsAddQuantity(isAddQuantity)
    request.setUomUuid(uomUuid);

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().updateOrderLine(
      request,
      metadata,
      callback
    );
  }

  //  Get Sales Order
  getOrder ({
    token,
    posUuid,
    orderUuid
  }, callback) {
    const { GetOrderRequest } = this.stubFile;
    const request = new GetOrderRequest()

    request.setPosUuid(posUuid);
    request.setOrderUuid(orderUuid)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().getOrder(
      request,
      metadata,
      callback
    );
  }

  //  List Orders
  listOrders ({
    token,
    posUuid,
    documentNo,
    businessPartnerUuid,
    grandTotal,
    openAmount,
    isWaitingForPay,
    isOnlyProcessed,
    isOnlyAisleSeller,
    isWaitingForInvoice,
    isWaitingForShipment,
    isBindingOffer,
    isClosed,
    isNullified,
    dateOrderedFrom,
    dateOrderedTo,
    salesRepresentativeUuid,
    tableName,
    //  DSL
    filters,
    //  Custom Query
    query,
    whereClause,
    orderByClause,
    limit,
    pageSize,
    pageToken
  }, callback) {
    const { ListOrdersRequest } = this.stubFile;
    const request = new ListOrdersRequest();

    const { getCriteriaToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
    request.setCriteria(
      getCriteriaToGRPC({
        tableName,
        filters,
        query,
        whereClause,
        orderByClause,
        limit
      })
    );
    request.setPosUuid(posUuid)
    request.setDocumentNo(documentNo)
    request.setBusinessPartnerUuid(businessPartnerUuid)

    const { getDecimalToGRPC } = require('.././utils/baseDataTypeToGRPC');
    if (grandTotal) {
      request.setGrandTotal(
        getDecimalToGRPC(grandTotal)
      );
    }
    if (openAmount) {
      request.setOpenAmount(
        getDecimalToGRPC(openAmount)
      );
    }
    //  Date Order From
    if (dateOrderedFrom) {
      request.setDateOrderedFrom(dateOrderedFrom)
    }
    //  Date Order To
    if (dateOrderedTo) {
      request.setDateOrderedTo(dateOrderedTo)
    }
    request.setIsWaitingForPay(isWaitingForPay)
    request.setIsOnlyProcessed(isOnlyProcessed)
    request.setIsOnlyAisleSeller(isOnlyAisleSeller)
    request.setIsWaitingForInvoice(isWaitingForInvoice)
    request.setIsWaitingForShipment(isWaitingForShipment)
    request.setIsBindingOffer(isBindingOffer);
    request.setIsClosed(isClosed);
    request.setIsNullified(isNullified);
    request.setSalesRepresentativeUuid(salesRepresentativeUuid)
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().listOrders(
      request,
      metadata,
      callback
    );
  }

  //  List Sales Order Lines
  listOrderLines ({
    token,
    posUuid,
    orderUuid,
    pageSize,
    pageToken
  }, callback) {
    const { ListOrderLinesRequest } = this.stubFile;
    const request = new ListOrderLinesRequest()

    request.setPosUuid(posUuid);
    request.setOrderUuid(orderUuid)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().listOrderLines(
      request,
      metadata,
      callback
    );
  }

  //  Create Shipment
  createShipment ({
    token,
    posUuid,
    orderUuid,
    salesRepresentativeUuid,
    isCreateLinesFromOrder
  }, callback) {
    const { CreateShipmentRequest } = this.stubFile;
    const request = new CreateShipmentRequest();

    request.setPosUuid(posUuid);
    request.setOrderUuid(orderUuid);
    request.setIsCreateLinesFromOrder(isCreateLinesFromOrder);
    request.setSalesRepresentativeUuid(salesRepresentativeUuid);

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().createShipment(
      request,
      metadata,
      callback
    );
  }

  //  Create Shipment Line
  createShipmentLine ({
    token,
    posUuid,
    shipmentUuid,
    orderLineUuid,
    description,
    quantity
  }, callback) {
    const { CreateShipmentLineRequest } = this.stubFile;
    const request = new CreateShipmentLineRequest();

    request.setPosUuid(posUuid);
    request.setShipmentUuid(shipmentUuid)
    request.setOrderLineUuid(orderLineUuid)
    request.setDescription(description)
    if (quantity) {
      const { getDecimalToGRPC } = require('.././utils/baseDataTypeToGRPC');
      request.setQuantity(
        getDecimalToGRPC(quantity)
      );
    }

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().createShipmentLine(
      request,
      metadata,
      callback
    );
  }

  //  Delete Shipment Line
  deleteShipmentLine ({
    token,
    posUuid,
    shipmentLineUuid
  }, callback) {
    const { DeleteShipmentLineRequest } = this.stubFile;
    const request = new DeleteShipmentLineRequest()

    request.setPosUuid(posUuid);
    request.setShipmentLineUuid(shipmentLineUuid)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().deleteShipmentLine(
      request,
      metadata,
      callback
    );
  }

  //  List Shipment Lines
  listShipmentLines ({
    token,
    posUuid,
    shipmentUuid,
    pageSize,
    pageToken
  }, callback) {
    const { ListShipmentLinesRequest } = this.stubFile;
    const request = new ListShipmentLinesRequest()

    request.setPosUuid(posUuid);
    request.setShipmentUuid(shipmentUuid)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().listShipmentLines(
      request,
      metadata,
      callback
    );
  }

  //  Process Shipment
  processShipment ({
    token,
    posUuid,
    shipmentUuid,
    description,
    documentAction
  }, callback) {
    const { ProcessShipmentRequest } = this.stubFile;
    const request = new ProcessShipmentRequest()

    request.setPosUuid(posUuid);
    request.setShipmentUuid(shipmentUuid)
    request.setDescription(description)
    request.setDocumentAction(documentAction)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().processShipment(
      request,
      metadata,
      callback
    );
  }

  //  Reverse Sales transaction
  reverseSales ({
    token,
    posUuid,
    orderUuid,
    description
  }, callback) {
    const { ReverseSalesRequest } = this.stubFile;
    const request = new ReverseSalesRequest()
    request.setOrderUuid(orderUuid)
    request.setPosUuid(posUuid)
    request.setDescription(description)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().reverseSales(
      request,
      metadata,
      callback
    );
  }

  //  Payments
  //  Create Payment
  createPayment ({
    token,
    posUuid,
    orderUuid,
    chargeUuid,
    collectingAgentUuid,
    invoiceUuid,
    bankUuid,
    referenceNo,
    description,
    amount,
    paymentDate,
    paymentAccountDate,
    tenderTypeCode,
    currencyUuid,
    paymentMethodUuid,
    isRefund,
    referenceBankAccountUuid,
    customerBankAccountUuid,
    invoiceReferenceId
  }, callback) {
    const { CreatePaymentRequest } = this.stubFile;
    const request = new CreatePaymentRequest();

    request.setPosUuid(posUuid)
    if (orderUuid) {
      request.setOrderUuid(orderUuid)
    }
    if (chargeUuid) {
      request.setChargeUuid(chargeUuid)
    }
    if (collectingAgentUuid) {
      request.setCollectingAgentUuid(collectingAgentUuid)
    }
    if (bankUuid) {
      request.setBankUuid(bankUuid)
    }
    if (invoiceUuid) {
      request.setInvoiceUuid(invoiceUuid)
    }
    if (referenceNo) {
      request.setReferenceNo(referenceNo)
    }
    if (description) {
      request.setDescription(description)
    }
    if (tenderTypeCode) {
      request.setTenderTypeCode(tenderTypeCode)
    }
    if (paymentMethodUuid) {
      request.setPaymentMethodUuid(paymentMethodUuid)
    }
    if (customerBankAccountUuid) {
      request.setCustomerBankAccountUuid(customerBankAccountUuid)
    }
    if (currencyUuid) {
      request.setCurrencyUuid(currencyUuid)
    }
    if (amount) {
      const { getDecimalToGRPC } = require('.././utils/baseDataTypeToGRPC');
      request.setAmount(
        getDecimalToGRPC(amount)
      );
    }
    //  Date of Payment
    if (paymentDate) {
      request.setPaymentDate(paymentDate)
    }
    request.setIsRefund(isRefund)
    if (paymentAccountDate) {
      request.setPaymentAccountDate(paymentAccountDate)
    }
    request.setReferenceBankAccountUuid(referenceBankAccountUuid);
    request.setInvoiceReferenceId(
      getValidInteger(invoiceReferenceId)
    );

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().createPayment(
      request,
      metadata,
      callback
    );
  }

  //  Create Payment Refund Reference
  createPaymentReference ({
    token,
    posUuid,
    orderUuid,
    salesRepresentativeUuid,
    customerBankAccountUuid,
    customerUuid,
    description,
    amount,
    sourceAmount,
    isReceipt,
    paymentDate,
    paymentAccountDate,
    tenderTypeCode,
    currencyUuid,
    conversionTypeUuid,
    paymentMethodUuid,
    invoiceReferenceId
  }, callback) {
    const { CreatePaymentReferenceRequest } = this.stubFile;
    const request = new CreatePaymentReferenceRequest();

    request.setPosUuid(posUuid)
    request.setOrderUuid(orderUuid)
    if (salesRepresentativeUuid) {
      request.setSalesRepresentativeUuid(salesRepresentativeUuid)
    }
    if (customerBankAccountUuid) {
      request.setCustomerBankAccountUuid(customerBankAccountUuid)
    }
    request.setCustomerUuid(customerUuid)
    if (description) {
      request.setDescription(description)
    }
    if (tenderTypeCode) {
      request.setTenderTypeCode(tenderTypeCode)
    }
    if (paymentMethodUuid) {
      request.setPaymentMethodUuid(paymentMethodUuid)
    }
    if (conversionTypeUuid) {
      request.setConversionTypeUuid(conversionTypeUuid)
    }
    if (currencyUuid) {
      request.setCurrencyUuid(currencyUuid)
    }

    const { getDecimalToGRPC } = require('.././utils/baseDataTypeToGRPC');
    if (amount) {
      request.setAmount(
        getDecimalToGRPC(amount)
      );
    }
    if (sourceAmount) {
      request.setSourceAmount(
        getDecimalToGRPC(sourceAmount)
      );
    }
    request.setIsReceipt(isReceipt)
    //  Date of Payment
    if (paymentDate) {
      request.setPaymentDate(paymentDate)
    }
    if (paymentAccountDate) {
      request.setPaymentAccountDate(paymentAccountDate)
    }
    request.setInvoiceReferenceId(
      getValidInteger(invoiceReferenceId)
    );

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().createPaymentReference(
      request,
      metadata,
      callback
    );
  }

  //  Update Payment
  updatePayment ({
    token,
    posUuid,
    paymentUuid,
    bankUuid,
    referenceNo,
    description,
    amount,
    paymentDate,
    tenderTypeCode,
    paymentMethodUuid,
    paymentAccountDate,
    referenceBankAccountUuid,
    invoiceReferenceId
  }, callback) {
    const { UpdatePaymentRequest } = this.stubFile;
    const request = new UpdatePaymentRequest();

    request.setPosUuid(posUuid);
    request.setPaymentUuid(paymentUuid)
    if (bankUuid) {
      request.setBankUuid(bankUuid)
    }
    if (referenceNo) {
      request.setReferenceNo(referenceNo)
    }
    if (description) {
      request.setDescription(description)
    }
    if (tenderTypeCode) {
      request.setTenderTypeCode(tenderTypeCode)
    }
    if (paymentMethodUuid) {
      request.setPaymentMethodUuid(paymentMethodUuid)
    }
    if (amount) {
      const { getDecimalToGRPC } = require('.././utils/baseDataTypeToGRPC');
      request.setAmount(
        getDecimalToGRPC(amount)
      );
    }
    //  Date of Payment
    if (paymentDate) {
      request.setPaymentDate(paymentDate)
    }
    if (paymentAccountDate) {
      request.setPaymentAccountDate(paymentAccountDate)
    }
    request.setReferenceBankAccountUuid(referenceBankAccountUuid);
    request.setInvoiceReferenceId(
      getValidInteger(invoiceReferenceId)
    );

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().updatePayment(
      request,
      metadata,
      callback
    );
  }

  //  List Cash summary movements
  listCashSummaryMovements ({
    token,
    posUuid,
    pageSize,
    pageToken
  }, callback) {
    const { ListCashSummaryMovementsRequest } = this.stubFile;
    const request = new ListCashSummaryMovementsRequest()
    if (posUuid) {
      request.setPosUuid(posUuid)
    }
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().listCashSummaryMovements(
      request,
      metadata,
      callback
    );
  }

  //  List Cash movements
  listCashMovements ({
    token,
    posUuid,
    customerUuid,
    salesRepresentativeUuid,
    pageSize,
    pageToken
  }, callback) {
    const { ListCashMovementsRequest } = this.stubFile;
    const request = new ListCashMovementsRequest()
    if (posUuid) {
      request.setPosUuid(posUuid)
    }
    if (customerUuid) {
      request.setBusinessPartnerUuid(customerUuid)
    }
    if (salesRepresentativeUuid) {
      request.setSalesRepresentativeUuid(salesRepresentativeUuid)
    }
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().listCashMovements(
      request,
      metadata,
      callback
    );
  }

  //  Cash Closing
  processCashClosing ({
    token,
    posUuid,
    uuid,
    id
  }, callback) {
    const { CashClosingRequest } = this.stubFile;
    const request = new CashClosingRequest()
    if (posUuid) {
      request.setPosUuid(posUuid)
    }
    if (uuid) {
      request.setUuid(uuid)
    }
    request.setId(id)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().processCashClosing(
      request,
      metadata,
      callback
    );
  }

  //  Cash Opening service
  processCashOpening ({
    token,
    posUuid,
    collectingAgentUuid,
    description,
    payments
  }, callback) {
    const { CashOpeningRequest, CreatePaymentRequest } = this.stubFile;
    const request = new CashOpeningRequest();

    request.setPosUuid(posUuid)
    request.setCollectingAgentUuid(collectingAgentUuid)
    request.setDescription(description)
    //  Set payment data
    payments.forEach(payment => {
      const paymentRequest = new CreatePaymentRequest()
      if (payment.uuid) {
        paymentRequest.setUuid(payment.uuid)
      }
      paymentRequest.setId(payment.id)
      if (payment.chargeUuid) {
        paymentRequest.setChargeUuid(payment.chargeUuid)
      }
      if (payment.bankUuid) {
        paymentRequest.setBankUuid(payment.bankUuid)
      }
      if (payment.collectingAgentUuid) {
        paymentRequest.setCollectingAgentUuid(payment.collectingAgentUuid)
      }
      paymentRequest.setIsRefund(false)
      if (payment.invoiceUuid) {
        paymentRequest.setInvoiceUuid(payment.invoiceUuid)
      }
      if (payment.referenceNo) {
        paymentRequest.setReferenceNo(payment.referenceNo)
      }
      if (payment.description) {
        paymentRequest.setDescription(payment.description)
      }
      if (payment.tenderTypeCode) {
        paymentRequest.setTenderTypeCode(payment.tenderTypeCode)
      }
      if (payment.currencyUuid) {
        paymentRequest.setCurrencyUuid(payment.currencyUuid)
      }
      if (payment.amount) {
        const { getDecimalToGRPC } = require('.././utils/baseDataTypeToGRPC');
        paymentRequest.setAmount(
          getDecimalToGRPC(payment.amount)
        );
      }
      if (payment.paymentDate) {
        const { getValueToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
        paymentRequest.setPaymentDate(
          getValueToGRPC({
            value: payment.paymentDate
          })
        );
      }
      paymentRequest.setInvoiceReferenceId(
        getValidInteger(payment.invoiceReferenceId)
      );
      request.addPayments(paymentRequest)
    })

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().processCashOpening(
      request,
      metadata,
      callback
    );
  }

  //  Cash Withdrawal service
  processCashWithdrawal ({
    token,
    posUuid,
    collectingAgentUuid,
    description,
    payments
  }, callback) {
    const { CashWithdrawalRequest, CreatePaymentRequest } = this.stubFile;
    const request = new CashWithdrawalRequest();

    request.setPosUuid(posUuid)
    request.setCollectingAgentUuid(collectingAgentUuid)
    request.setDescription(description)
    //  Set payment data
    payments.forEach(payment => {
      const paymentRequest = new CreatePaymentRequest()
      if (payment.uuid) {
        paymentRequest.setUuid(payment.uuid)
      }
      paymentRequest.setId(payment.id)
      if (payment.chargeUuid) {
        paymentRequest.setChargeUuid(payment.chargeUuid)
      }
      if (payment.bankUuid) {
        paymentRequest.setBankUuid(payment.bankUuid)
      }
      if (payment.collectingAgentUuid) {
        paymentRequest.setCollectingAgentUuid(payment.collectingAgentUuid)
      }
      paymentRequest.setIsRefund(true)
      if (payment.invoiceUuid) {
        paymentRequest.setInvoiceUuid(payment.invoiceUuid)
      }
      if (payment.referenceNo) {
        paymentRequest.setReferenceNo(payment.referenceNo)
      }
      if (payment.description) {
        paymentRequest.setDescription(payment.description)
      }
      if (payment.tenderTypeCode) {
        paymentRequest.setTenderTypeCode(payment.tenderTypeCode)
      }
      if (payment.currencyUuid) {
        paymentRequest.setCurrencyUuid(payment.currencyUuid)
      }
      if (payment.amount) {
        const { getDecimalToGRPC } = require('.././utils/baseDataTypeToGRPC');
        paymentRequest.setAmount(
          getDecimalToGRPC(payment.amount)
        );
      }
      if (payment.paymentDate) {
        const { getValueToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
        paymentRequest.setPaymentDate(
          getValueToGRPC({
            value: payment.paymentDate
          })
        );
      }
      paymentRequest.setInvoiceReferenceId(
        getValidInteger(payment.invoiceReferenceId)
      );
      request.addPayments(paymentRequest)
    })

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().processCashWithdrawal(
      request,
      metadata,
      callback
    );
  }

  //  allocate Seller
  allocateSeller ({
    token,
    posUuid,
    salesRepresentativeUuid
  }, callback) {
    const { AllocateSellerRequest } = this.stubFile;
    const request = new AllocateSellerRequest()
    request.setPosUuid(posUuid)
    request.setSalesRepresentativeUuid(salesRepresentativeUuid)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().allocateSeller(
      request,
      metadata,
      callback
    );
  }

  //  deallocate Seller
  deallocateSeller ({
    token,
    posUuid,
    salesRepresentativeUuid
  }, callback) {
    const { DeallocateSellerRequest } = this.stubFile;
    const request = new DeallocateSellerRequest()
    request.setPosUuid(posUuid)
    request.setSalesRepresentativeUuid(salesRepresentativeUuid)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().allocateSeller(
      request,
      metadata,
      callback
    );
  }

  //  Delete Payment
  deletePayment ({
    token,
    posUuid,
    paymentUuid
  }, callback) {
    const { DeletePaymentRequest } = this.stubFile;
    const request = new DeletePaymentRequest()

    request.setPosUuid(posUuid);
    request.setPaymentUuid(paymentUuid)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().deletePayment(
      request,
      metadata,
      callback
    );
  }

  //  Delete Refund Reference
  deletePaymentReference ({
    token,
    posUuid,
    uuid,
    id
  }, callback) {
    const { DeletePaymentReferenceRequest } = this.stubFile;
    const request = new DeletePaymentReferenceRequest()

    request.setPosUuid(posUuid);
    request.setUuid(uuid)
    request.setId(id)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().deletePaymentReference(
      request,
      metadata,
      callback
    );
  }

  //  List Payments
  listPayments ({
    token,
    posUuid,
    orderUuid,
    isOnlyRefund,
    isOnlyReceipt,
    tableName,
    //  DSL
    filters,
    //  Custom Query
    query,
    whereClause,
    orderByClause,
    limit,
    pageSize,
    pageToken
  }, callback) {
    const { ListPaymentsRequest } = this.stubFile;
    const request = new ListPaymentsRequest();

    const { getCriteriaToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
    request.setCriteria(
      getCriteriaToGRPC({
        tableName,
        filters,
        query,
        whereClause,
        orderByClause,
        limit
      })
    );
    if (posUuid) {
      request.setPosUuid(posUuid)
    }
    if (orderUuid) {
      request.setOrderUuid(orderUuid)
    }
    request.setIsOnlyRefund(isOnlyRefund)
    request.setIsOnlyReceipt(isOnlyReceipt)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().listPayments(
      request,
      metadata,
      callback
    );
  }

  //  Create Payment
  processOrder ({
    token,
    posUuid,
    orderUuid,
    isOpenRefund,
    payments
  }, callback) {
    const { CreatePaymentRequest, ProcessOrderRequest } = this.stubFile;
    const request = new ProcessOrderRequest();

    request.setPosUuid(posUuid)
    request.setOrderUuid(orderUuid)
    request.setIsOpenRefund(isOpenRefund)
    //  Set payment data
    payments.forEach(payment => {
      const paymentRequest = new CreatePaymentRequest()
      if (payment.uuid) {
        paymentRequest.setUuid(payment.uuid)
      }
      paymentRequest.setId(payment.id)
      if (payment.orderUuid) {
        paymentRequest.setOrderUuid(payment.orderUuid)
      }
      if (payment.bankUuid) {
        paymentRequest.setBankUuid(payment.bankUuid)
      }
      paymentRequest.setIsRefund(payment.isRefund)
      if (payment.collectingAgentUuid) {
        paymentRequest.setCollectingAgentUuid(payment.collectingAgentUuid)
      }
      if (payment.invoiceUuid) {
        paymentRequest.setInvoiceUuid(payment.invoiceUuid)
      }
      if (payment.referenceNo) {
        paymentRequest.setReferenceNo(payment.referenceNo)
      }
      if (payment.description) {
        paymentRequest.setDescription(payment.description)
      }
      if (payment.tenderTypeCode) {
        paymentRequest.setTenderTypeCode(payment.tenderTypeCode)
      }
      if (payment.currencyUuid) {
        paymentRequest.setCurrencyUuid(payment.currencyUuid)
      }
      if (payment.amount) {
        const { getDecimalToGRPC } = require('.././utils/baseDataTypeToGRPC');
        paymentRequest.setAmount(
          getDecimalToGRPC(payment.amount)
        );
      }
      if (payment.paymentDate) {
        const { getValueToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
        paymentRequest.setPaymentDate(
          getValueToGRPC({
            value: payment.paymentDate
          })
        );
      }
      paymentRequest.setInvoiceReferenceId(
        getValidInteger(payment.invoiceReferenceId)
      );
      request.addPayments(paymentRequest)
    })

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().processOrder(
      request,
      metadata,
      callback
    );
  }

  //  Get Sales Order
  getKeyLayout ({
    token,
    posUuid,
    keyLayoutUuid
  }, callback) {
    const { GetKeyLayoutRequest } = this.stubFile;
    const request = new GetKeyLayoutRequest()

    request.setPosUuid(posUuid);
    request.setKeyLayoutUuid(keyLayoutUuid)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().getKeyLayout(
      request,
      metadata,
      callback
    );
  }

  //  Validate User PIN
  validatePIN ({
    token,
    posId,
    posUuid,
    pin,
    requestedAccess,
    requestedAmount,
    orderId
  }, callback) {
    const { ValidatePINRequest } = this.stubFile;
    const request = new ValidatePINRequest();

    request.setRequestedAccess(requestedAccess);
    if (requestedAmount) {
      const { getDecimalToGRPC } = require('.././utils/baseDataTypeToGRPC');
      request.setRequestedAmount(
        getDecimalToGRPC(requestedAmount)
      );
    }
    request.setPin(pin)
    request.setPosId(
      getValidInteger(posId)
    );
    request.setPosUuid(posUuid)
    request.setOrderId(
      getValidInteger(orderId)
    );

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().validatePIN(
      request,
      metadata,
      callback
    );
  }

  //  List Available Warehouses
  listAvailableWarehouses ({
    token,
    posUuid,
    pageSize,
    pageToken
  }, callback) {
    const { ListAvailableWarehousesRequest } = this.stubFile;
    const request = new ListAvailableWarehousesRequest()
    if (posUuid) {
      request.setPosUuid(posUuid)
    }
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().listAvailableWarehouses(
      request,
      metadata,
      callback
    );
  }

  //  List Available Tender Types
  listAvailablePaymentMethods ({
    token,
    posUuid,
    pageSize,
    pageToken
  }, callback) {
    const { ListAvailablePaymentMethodsRequest } = this.stubFile;
    const request = new ListAvailablePaymentMethodsRequest()
    if (posUuid) {
      request.setPosUuid(posUuid)
    }
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().listAvailablePaymentMethods(
      request,
      metadata,
      callback
    );
  }

  //  List Available Price List
  listAvailablePriceList ({
    token,
    posUuid,
    pageSize,
    pageToken
  }, callback) {
    const { ListAvailablePriceListRequest } = this.stubFile;
    const request = new ListAvailablePriceListRequest()
    if (posUuid) {
      request.setPosUuid(posUuid)
    }
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().listAvailablePriceList(
      request,
      metadata,
      callback
    );
  }

  //  List Available Price List
  listAvailableCurrencies ({
    token,
    posUuid,
    pageSize,
    pageToken
  }, callback) {
    const { ListAvailableCurrenciesRequest } = this.stubFile;
    const request = new ListAvailableCurrenciesRequest()
    if (posUuid) {
      request.setPosUuid(posUuid)
    }
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().listAvailableCurrencies(
      request,
      metadata,
      callback
    );
  }

  //  List Available Document Types
  listAvailableDocumentTypes ({
    token,
    posUuid,
    pageSize,
    pageToken
  }, callback) {
    const { ListAvailableDocumentTypesRequest } = this.stubFile;
    const request = new ListAvailableDocumentTypesRequest()
    if (posUuid) {
      request.setPosUuid(posUuid)
    }
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().listAvailableDocumentTypes(
      request,
      metadata,
      callback
    );
  }

  //  Create Customer from POS
  createCustomer ({
    token,
    value,
    taxId,
    duns,
    naics,
    name,
    lastName,
    description,
    posUuid,
    businessPartnerGroupUuid,
    addresses,
    additionalAttributes
  }, callback) {
    const { CreateCustomerRequest, AddressRequest } = this.stubFile;
    const { getKeyValueToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
    const request = new CreateCustomerRequest();

    request.setValue(value)
    request.setTaxId(taxId)
    request.setDuns(duns)
    request.setNaics(naics)
    request.setName(name)
    request.setLastName(lastName)
    request.setDescription(description)
    request.setPosUuid(posUuid)
    request.setBusinessPartnerGroupUuid(businessPartnerGroupUuid)
    if (additionalAttributes) {
      additionalAttributes.forEach(attribute => {
        request.addAdditionalAttributes(
          getKeyValueToGRPC({
            columnName: attribute.key,
            value: attribute.value
          })
        );
      });
    }
    if (addresses) {
      addresses.forEach(address => {
        const addressRequest = new AddressRequest()
        addressRequest.setFirstName(address.firstName)
        addressRequest.setLastName(address.lastName)
        addressRequest.setDescription(address.description)
        addressRequest.setContactName(address.contactName)
        addressRequest.setEmail(address.email)
        addressRequest.setPhone(address.phone)
        addressRequest.setAddress1(address.address1)
        addressRequest.setAddress2(address.address2)
        addressRequest.setAddress3(address.address3)
        addressRequest.setAddress4(address.address4)
        addressRequest.setCityUuid(address.cityUuid)
        addressRequest.setCityName(address.cityName)
        addressRequest.setPostalCode(address.postalCode)
        addressRequest.setRegionUuid(address.regionUuid)
        addressRequest.setRegionName(address.regionName)
        addressRequest.setCountryUuid(address.countryUuid)
        addressRequest.setIsDefaultBilling(address.isDefaultBilling)
        addressRequest.setIsDefaultShipping(address.isDefaultShipping)

        if (address.additionalAttributes) {
          address.additionalAttributes.forEach(attribute => {
            addressRequest.addAdditionalAttributes(
              getKeyValueToGRPC({
                columnName: attribute.key,
                value: attribute.value
              })
            );
          });
        }
        request.addAddresses(addressRequest)
      })
    }

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().createCustomer(
      request,
      metadata,
      callback
    );
  }

  //  Update Customer from POS
  updateCustomer ({
    token,
    posUuid,
    uuid,
    value,
    taxId,
    duns,
    naics,
    name,
    lastName,
    description,
    addresses,
    additionalAttributes
  }, callback) {
    const { UpdateCustomerRequest, AddressRequest } = this.stubFile;
    const { getKeyValueToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
    const request = new UpdateCustomerRequest();

    request.setPosUuid(posUuid);
    request.setUuid(uuid)
    request.setValue(value)
    request.setTaxId(taxId)
    request.setDuns(duns)
    request.setNaics(naics)
    request.setName(name)
    request.setLastName(lastName)
    request.setDescription(description)
    if (additionalAttributes) {
      additionalAttributes.forEach(attribute => {
        request.addAdditionalAttributes(
          getKeyValueToGRPC({
            columnName: attribute.key,
            value: attribute.value
          })
        );
      });
    }
    if (addresses) {
      addresses.forEach(address => {
        const addressRequest = new AddressRequest()
        addressRequest.setFirstName(address.firstName)
        addressRequest.setLastName(address.lastName)
        addressRequest.setDescription(address.description)
        addressRequest.setContactName(address.contactName)
        addressRequest.setEmail(address.email)
        addressRequest.setPhone(address.phone)
        addressRequest.setAddress1(address.address1)
        addressRequest.setAddress2(address.address2)
        addressRequest.setAddress3(address.address3)
        addressRequest.setAddress4(address.address4)
        addressRequest.setCityUuid(address.cityUuid)
        addressRequest.setCityName(address.cityName)
        addressRequest.setPostalCode(address.postalCode)
        addressRequest.setRegionUuid(address.regionUuid)
        addressRequest.setRegionName(address.regionName)
        addressRequest.setCountryUuid(address.countryUuid)
        addressRequest.setIsDefaultBilling(address.isDefaultBilling)
        addressRequest.setIsDefaultShipping(address.isDefaultShipping)
        addressRequest.setUuid(address.uuid)
        if (address.additionalAttributes) {
          address.additionalAttributes.forEach(attribute => {
            addressRequest.addAdditionalAttributes(
              getKeyValueToGRPC({
                columnName: attribute.key,
                value: attribute.value
              })
            );
          })
        }
        request.addAddresses(addressRequest)
      })
    }

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().updateCustomer(
      request,
      metadata,
      callback
    );
  }

  //  Get Customer
  getCustomer ({
    token,
    posUuid,
    searchValue,
    value,
    name,
    contactName,
    email,
    postalCode,
    phone
  }, callback) {
    const { GetCustomerRequest } = this.stubFile;
    const request = new GetCustomerRequest()

    request.setPosUuid(posUuid);
    request.setSearchValue(searchValue)
    request.setValue(value)
    request.setName(name)
    request.setContactName(contactName)
    request.setEmail(email)
    request.setPostalCode(postalCode)
    request.setPhone(phone)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().getCustomer(
      request,
      metadata,
      callback
    );
  }

  //  Create Customer Bank Account
  createCustomerBankAccount ({
    token,
    customerUuid,
    posUuid,
    city,
    country,
    email,
    driverLicense,
    socialSecurityNumber,
    name,
    state,
    street,
    zip,
    bankAccountType,
    bankUuid,
    isAch,
    addressVerified,
    zipVerified,
    routingNo,
    iban,
    isPayrollAccount,
    accountNo
  }, callback) {
    const { CreateCustomerBankAccountRequest } = this.stubFile;
    const request = new CreateCustomerBankAccountRequest()
    request.setCustomerUuid(customerUuid)
    request.setPosUuid(posUuid)
    request.setCity(city)
    request.setCountry(country)
    request.setDriverLicense(driverLicense)
    request.setSocialSecurityNumber(socialSecurityNumber)
    request.setName(name)
    request.setState(state)
    request.setStreet(street)
    request.setZip(zip)
    request.setBankAccountType(bankAccountType)
    request.setBankUuid(bankUuid)
    request.setIsAch(isAch)
    request.setAddressVerified(addressVerified)
    request.setZipVerified(zipVerified)
    request.setRoutingNo(routingNo)
    request.setIban(iban)
    request.setIsPayrollAccount(isPayrollAccount)
    request.setEmail(email)
    request.setAccountNo(accountNo)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().createCustomerBankAccount(
      request,
      metadata,
      callback
    );
  }

  //  Update Customer Bank Account
  updateCustomerBankAccount ({
    token,
    customerBankAccountUuid,
    posUuid,
    city,
    country,
    email,
    driverLicense,
    socialSecurityNumber,
    name,
    state,
    street,
    zip,
    bankAccountType,
    bankUuid,
    isAch,
    addressVerified,
    zipVerified,
    routingNo,
    iban,
    isPayrollAccount,
    accountNo
  }, callback) {
    const { UpdateCustomerBankAccountRequest } = this.stubFile;
    const request = new UpdateCustomerBankAccountRequest()
    request.setCustomerBankAccountUuid(customerBankAccountUuid)
    request.setPosUuid(posUuid)
    request.setCity(city)
    request.setCountry(country)
    request.setDriverLicense(driverLicense)
    request.setSocialSecurityNumber(socialSecurityNumber)
    request.setName(name)
    request.setState(state)
    request.setStreet(street)
    request.setZip(zip)
    request.setBankAccountType(bankAccountType)
    request.setBankUuid(bankUuid)
    request.setIsAch(isAch)
    request.setAddressVerified(addressVerified)
    request.setZipVerified(zipVerified)
    request.setRoutingNo(routingNo)
    request.setIban(iban)
    request.setIsPayrollAccount(isPayrollAccount)
    request.setEmail(email)
    request.setAccountNo(accountNo)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().updateCustomerBankAccount(
      request,
      metadata,
      callback
    );
  }

  //  Get Customer Bank Account
  getCustomerBankAccount ({
    token,
    posUuid,
    customerBankAccountUuid
  }, callback) {
    const { GetCustomerBankAccountRequest } = this.stubFile;
    const request = new GetCustomerBankAccountRequest()

    request.setPosUuid(posUuid);
    request.setCustomerBankAccountUuid(customerBankAccountUuid)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().getCustomerBankAccount(
      request,
      metadata,
      callback
    );
  }

  //  Delete Customer Bank Accoount
  deleteCustomerBankAccount ({
    token,
    posUuid,
    customerBankAccountUuid
  }, callback) {
    const { DeleteCustomerBankAccountRequest } = this.stubFile;
    const request = new DeleteCustomerBankAccountRequest()

    request.setPosUuid(posUuid);
    request.setCustomerBankAccountUuid(customerBankAccountUuid)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().deleteCustomerBankAccount(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Banks
   * @param {string} posUuid
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listBanks ({
    token,
    // DSL
    posUuid,
    searchValue,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListBanksRequest } = this.stubFile;
    const request = new ListBanksRequest();

    request.setPosUuid(posUuid);
    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().listBanks(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Bank Accounts
   * @param {string} posUuid
   * @param {number} bankId,
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listBankAccounts ({
    token,
    // DSL
    posUuid,
    bankId,
    searchValue,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListBankAccountsRequest } = this.stubFile;
    const request = new ListBankAccountsRequest();

    request.setPosUuid(posUuid);
    request.setBankId(
      getValidInteger(bankId)
    );
    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().listBankAccounts(
      request,
      metadata,
      callback
    );
  }

  //  List Customer Bank Accounts
  listCustomerBankAccounts ({
    token,
    posUuid,
    customerUuid,
    pageSize,
    pageToken
  }, callback) {
    const { ListCustomerBankAccountsRequest } = this.stubFile;
    const request = new ListCustomerBankAccountsRequest()

    request.setPosUuid(posUuid);
    request.setCustomerUuid(customerUuid)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().listCustomerBankAccounts(
      request,
      metadata,
      callback
    );
  }

  //  List Customer Refund References
  listPaymentReferences ({
    token,
    posUuid,
    orderUuid,
    customerUuid,
    pageSize,
    pageToken
  }, callback) {
    const { ListPaymentReferencesRequest } = this.stubFile;
    const request = new ListPaymentReferencesRequest()
    request.setCustomerUuid(customerUuid)
    request.setPosUuid(posUuid)
    request.setOrderUuid(orderUuid)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().listPaymentReferences(
      request,
      metadata,
      callback
    );
  }

  //  Get Available Refund
  getAvailableRefund ({
    token,
    posUuid,
    date
  }, callback) {
    const { GetAvailableRefundRequest } = this.stubFile;
    const request = new GetAvailableRefundRequest()
    if (date) {
      request.setDate(date)
    }
    request.setPosUuid(posUuid)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().getAvailableRefund(
      request,
      metadata,
      callback
    );
  }

  //  List Available Sellers
  listAvailableSellers ({
    token,
    posUuid,
    isOnlyAllocated,
    pageSize,
    pageToken
  }, callback) {
    const { ListAvailableSellersRequest } = this.stubFile;
    const request = new ListAvailableSellersRequest()
    if (posUuid) {
      request.setPosUuid(posUuid)
    }
    if (isOnlyAllocated) {
      request.setIsOnlyAllocated(isOnlyAllocated)
    }
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().listAvailableSellers(
      request,
      metadata,
      callback
    );
  }

  //  Print Ticket
  printTicket ({
    token,
    posId,
    orderId,
    invoiceId,
    shipmentId,
    tableName,
    recordId
  }, callback) {
    const { PrintTicketRequest } = this.stubFile;
    const request = new PrintTicketRequest();

    request.setPosId(
      getValidInteger(posId)
    );
    request.setOrderId(
      getValidInteger(orderId)
    );
    request.setInvoiceId(
      getValidInteger(invoiceId)
    );
    request.setShipmentId(
      getValidInteger(shipmentId)
    );
    request.setTableName(tableName);
    request.setRecordId(
      getValidInteger(recordId)
    );

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().printTicket(
      request,
      metadata,
      callback
    );
  }

  //  Print Ticket Preview
  printPreview ({
    token,
    posUuid,
    orderUuid,
    reportType
  }, callback) {
    const { PrintPreviewRequest } = this.stubFile;
    const request = new PrintPreviewRequest();

    request.setPosUuid(posUuid);
    request.setOrderUuid(orderUuid);
    request.setReportType(reportType);

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().printPreview(
      request,
      metadata,
      callback
    );
  }

  //  Print Ticket shipment Preview
  printShipmentPreview ({
    token,
    posUuid,
    shipmentUuid,
    reportType
  }, callback) {
    const { PrintShipmentPreviewRequest } = this.stubFile;
    const request = new PrintShipmentPreviewRequest();

    request.setPosUuid(posUuid);
    request.setShipmentUuid(shipmentUuid);
    request.setReportType(reportType);

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().printShipmentPreview(
      request,
      metadata,
      callback
    );
  }

  //  Print Ticket
  listStocks ({
    token,
    posUuid,
    sku,
    value,
    pageSize,
    pageToken
  }, callback) {
    const { ListStocksRequest } = this.stubFile;
    const request = new ListStocksRequest();

    request.setPosUuid(posUuid);
    request.setSku(sku);
    request.setValue(value);
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().listStocks(
      request,
      metadata,
      callback
    );
  }

  // List Available Warehouses
  listAvailableCash ({
    token,
    posUuid,
    pageSize,
    pageToken
  }, callback) {
    const { ListAvailableCashRequest } = this.stubFile;
    const request = new ListAvailableCashRequest();

    request.setPosUuid(posUuid);
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().listAvailableCash(
      request,
      metadata,
      callback
    );
  }

  /**
   * Save Command Shortcut
   * @param {string} token
   * @param {string} posUuid
   * @param {string} command
   * @param {string} shortcut
   */
  saveCommandShortcut ({
    token,
    posUuid,
    command,
    shortcut
  }, callback) {
    const { SaveCommandShortcutRequest } = this.stubFile;
    const request = new SaveCommandShortcutRequest();

    request.setPosUuid(posUuid);
    request.setCommand(command);
    request.setShortcut(shortcut);

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().saveCommandShortcut(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Command Shortcuts
   * @param {string} token
   * @param {string} posUuid
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listCommandShortcuts ({
    token,
    posUuid,
    searchValue,
    pageSize,
    pageToken
  }, callback) {
    const { ListCommandShortcutsRequest } = this.stubFile;
    const request = new ListCommandShortcutsRequest();

    request.setPosUuid(posUuid);
    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().listCommandShortcuts(
      request,
      metadata,
      callback
    );
  }

  /**
   * Delete Command Shortcut
   * @param {string} token
   * @param {string} posUuid
   * @param {number} id
   * @param {string} uuid
   */
  deleteCommandShortcut ({
    token,
    posUuid,
    id,
    uuid
  }, callback) {
    const { DeleteCommandShortcutRequest } = this.stubFile;
    const request = new DeleteCommandShortcutRequest();

    request.setPosUuid(posUuid);
    request.setId(
      getValidInteger(id)
    );
    request.setUuid(uuid);

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().deleteCommandShortcut(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Campaigns
   * @param {string} posUuid
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listCampaigns ({
    token,
    // DSL
    posUuid,
    searchValue,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListCampaignsRequest } = this.stubFile;
    const request = new ListCampaignsRequest();

    request.setPosUuid(posUuid);
    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().listCampaigns(
      request,
      metadata,
      callback
    );
  }

  /**
   * Copy Order
   * @param {string} token
   * @param {number} posId
   * @param {number} sourceOrderId
   */
  copyOrder ({
    token,
    // DSL
    posId,
    sourceOrderId,
    salesRepresentativeId
  }, callback) {
    const { CopyOrderRequest } = this.stubFile;
    const request = new CopyOrderRequest();

    request.setPosId(
      getValidInteger(posId)
    );
    request.setSourceOrderId(
      getValidInteger(sourceOrderId)
    );
    request.setSalesRepresentativeId(
      getValidInteger(salesRepresentativeId)
    );
    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().copyOrder(
      request,
      metadata,
      callback
    );
  }

  /**
   * Open RMA
   * @param {string} token
   * @param {number} posId
   * @param {number} sourceOrderId
   */
  getOpenRMA ({
    token,
    // DSL
    posId,
    sourceOrderId
  }, callback) {
    const { GetOpenRMARequest } = this.stubFile;
    const request = new GetOpenRMARequest();

    request.setPosId(
      getValidInteger(posId)
    );
    request.setSourceOrderId(
      getValidInteger(sourceOrderId)
    );

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().getOpenRMA(
      request,
      metadata,
      callback
    );
  }

  /**
   * Create RMA
   * @param {string} token
   * @param {number} posId
   * @param {number} sourceOrderId
   * @param {number} salesRepresentativeId
   * @param {boolean} isCreateLinesFromOrder
   */
  createRMA ({
    token,
    // DSL
    posId,
    sourceOrderId,
    salesRepresentativeId,
    isCreateLinesFromOrder
  }, callback) {
    const { CreateRMARequest } = this.stubFile;
    const request = new CreateRMARequest();

    request.setPosId(
      getValidInteger(posId)
    );
    request.setSourceOrderId(
      getValidInteger(sourceOrderId)
    );
    request.setSalesRepresentativeId(
      salesRepresentativeId
    );
    request.setIsCreateLinesFromOrder(isCreateLinesFromOrder);

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().createRMA(
      request,
      metadata,
      callback
    );
  }

  /**
   * Delete RMA
   * @param {string} token
   * @param {number} posId
   * @param {number} id
   */
  deleteRMA ({
    token,
    // DSL
    posId,
    id
  }, callback) {
    const { DeleteRMARequest } = this.stubFile;
    const request = new DeleteRMARequest();

    request.setPosId(
      getValidInteger(posId)
    );
    request.setRmaId(
      getValidInteger(id)
    );

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().deleteRMA(
      request,
      metadata,
      callback
    );
  }

  /**
   * Process RMA
   * @param {string} token
   * @param {number} posId
   * @param {number} id
   * @param {string} description
   * @param {string} documentAction
   */
  processRMA ({
    token,
    // DSL
    posId,
    id,
    description,
    documentAction
  }, callback) {
    const { ProcessRMARequest } = this.stubFile;
    const request = new ProcessRMARequest();

    request.setPosId(
      getValidInteger(posId)
    );
    request.setRmaId(
      getValidInteger(id)
    );
    request.setDescription(description);
    request.setDocumentAction(documentAction);

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().processRMA(
      request,
      metadata,
      callback
    );
  }

  /**
   * List RMA Lines
   * @param {string} token
   * @param {number} posId
   * @param {number} rmaId
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listRMALines ({
    token,
    // DSL
    posId,
    rmaId,
    pageSize,
    pageToken
  }, callback) {
    const { ListRMALinesRequest } = this.stubFile;
    const request = new ListRMALinesRequest();

    request.setPosId(
      getValidInteger(posId)
    );
    request.setRmaId(
      getValidInteger(rmaId)
    );
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().listRMALines(
      request,
      metadata,
      callback
    );
  }

  /**
   * Create RMA Line
   * @param {string} token
   * @param {number} posId
   * @param {number} rmaId
   * @param {number} sourceOrderLineId
   * @param {string} description
   * @param {number} quantity
   */
  createRMALine ({
    token,
    // DSL
    posId,
    rmaId,
    sourceOrderLineId,
    description,
    quantity
  }, callback) {
    const { CreateRMALineRequest } = this.stubFile;
    const request = new CreateRMALineRequest();

    request.setPosId(
      getValidInteger(posId)
    );
    request.setRmaId(
      getValidInteger(rmaId)
    );
    request.setSourceOrderLineId(
      getValidInteger(sourceOrderLineId)
    );
    request.setDescription(description);
    request.setQuantity(
      getDecimalToGRPC(quantity)
    );

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().createRMALine(
      request,
      metadata,
      callback
    );
  }

  /**
   * Update RMA Line
   * @param {string} token
   * @param {number} posId
   * @param {number} id
   * @param {string} description
   * @param {number} quantity
   */
  updateRMALine ({
    token,
    // DSL
    posId,
    id,
    description,
    quantity
  }, callback) {
    const { UpdateRMALineRequest } = this.stubFile;
    const request = new UpdateRMALineRequest();

    request.setPosId(
      getValidInteger(posId)
    );
    request.setRmaLineId(
      getValidInteger(id)
    );
    request.setDescription(description);
    request.setQuantity(
      getDecimalToGRPC(quantity)
    );

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().updateRMALine(
      request,
      metadata,
      callback
    );
  }

  /**
   * Delete RMA Line
   * @param {string} token
   * @param {number} posId
   * @param {number} id
   */
  deleteRMALine ({
    token,
    // DSL
    posId,
    id
  }, callback) {
    const { DeleteRMALineRequest } = this.stubFile;
    const request = new DeleteRMALineRequest();

    request.setPosId(
      getValidInteger(posId)
    );
    request.setRmaLineId(
      getValidInteger(id)
    );

    const metadata = getMetadata({
      token
    });

    this.getPointOfSalesService().deleteRMALine(
      request,
      metadata,
      callback
    );
  }
}

module.exports = PointOfSales;
