// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ***********************************************************************************
// Copyright (C) 2012-2018 E.R.P. Consultores y Asociados, C.A.                     *
// Contributor(s): Yamel Senih ysenih@erpya.com                                     *
// This program is free software: you can redistribute it and/or modify             *
// it under the terms of the GNU General Public License as published by             *
// the Free Software Foundation, either version 2 of the License, or                *
// (at your option) any later version.                                              *
// This program is distributed in the hope that it will be useful,                  *
// but WITHOUT ANY WARRANTY; without even the implied warranty of                   *
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the                     *
// GNU General Public License for more details.                                     *
// You should have received a copy of the GNU General Public License                *
// along with this program. If not, see <https://www.gnu.org/licenses/>.            *
// **********************************************************************************
'use strict';
var grpc = require('@grpc/grpc-js');
var proto_core_functionality_pb = require('../proto/core_functionality_pb.js');
var proto_base_data_type_pb = require('../proto/base_data_type_pb.js');

function serialize_data_BusinessPartner (arg) {
  if (!(arg instanceof proto_core_functionality_pb.BusinessPartner)) {
    throw new Error('Expected argument of type data.BusinessPartner');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_BusinessPartner (buffer_arg) {
  return proto_core_functionality_pb.BusinessPartner.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ConversionRate (arg) {
  if (!(arg instanceof proto_core_functionality_pb.ConversionRate)) {
    throw new Error('Expected argument of type data.ConversionRate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ConversionRate (buffer_arg) {
  return proto_core_functionality_pb.ConversionRate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_Country (arg) {
  if (!(arg instanceof proto_core_functionality_pb.Country)) {
    throw new Error('Expected argument of type data.Country');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_Country (buffer_arg) {
  return proto_core_functionality_pb.Country.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_CreateBusinessPartnerRequest (arg) {
  if (!(arg instanceof proto_core_functionality_pb.CreateBusinessPartnerRequest)) {
    throw new Error('Expected argument of type data.CreateBusinessPartnerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CreateBusinessPartnerRequest (buffer_arg) {
  return proto_core_functionality_pb.CreateBusinessPartnerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_GetBusinessPartnerRequest (arg) {
  if (!(arg instanceof proto_core_functionality_pb.GetBusinessPartnerRequest)) {
    throw new Error('Expected argument of type data.GetBusinessPartnerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetBusinessPartnerRequest (buffer_arg) {
  return proto_core_functionality_pb.GetBusinessPartnerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_GetConversionRateRequest (arg) {
  if (!(arg instanceof proto_core_functionality_pb.GetConversionRateRequest)) {
    throw new Error('Expected argument of type data.GetConversionRateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetConversionRateRequest (buffer_arg) {
  return proto_core_functionality_pb.GetConversionRateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_GetCountryRequest (arg) {
  if (!(arg instanceof proto_core_functionality_pb.GetCountryRequest)) {
    throw new Error('Expected argument of type data.GetCountryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetCountryRequest (buffer_arg) {
  return proto_core_functionality_pb.GetCountryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListBusinessPartnersRequest (arg) {
  if (!(arg instanceof proto_core_functionality_pb.ListBusinessPartnersRequest)) {
    throw new Error('Expected argument of type data.ListBusinessPartnersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListBusinessPartnersRequest (buffer_arg) {
  return proto_core_functionality_pb.ListBusinessPartnersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListBusinessPartnersResponse (arg) {
  if (!(arg instanceof proto_core_functionality_pb.ListBusinessPartnersResponse)) {
    throw new Error('Expected argument of type data.ListBusinessPartnersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListBusinessPartnersResponse (buffer_arg) {
  return proto_core_functionality_pb.ListBusinessPartnersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListLanguagesRequest (arg) {
  if (!(arg instanceof proto_core_functionality_pb.ListLanguagesRequest)) {
    throw new Error('Expected argument of type data.ListLanguagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListLanguagesRequest (buffer_arg) {
  return proto_core_functionality_pb.ListLanguagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListLanguagesResponse (arg) {
  if (!(arg instanceof proto_core_functionality_pb.ListLanguagesResponse)) {
    throw new Error('Expected argument of type data.ListLanguagesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListLanguagesResponse (buffer_arg) {
  return proto_core_functionality_pb.ListLanguagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListOrganizationsRequest (arg) {
  if (!(arg instanceof proto_core_functionality_pb.ListOrganizationsRequest)) {
    throw new Error('Expected argument of type data.ListOrganizationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListOrganizationsRequest (buffer_arg) {
  return proto_core_functionality_pb.ListOrganizationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListOrganizationsResponse (arg) {
  if (!(arg instanceof proto_core_functionality_pb.ListOrganizationsResponse)) {
    throw new Error('Expected argument of type data.ListOrganizationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListOrganizationsResponse (buffer_arg) {
  return proto_core_functionality_pb.ListOrganizationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListProductConversionRequest (arg) {
  if (!(arg instanceof proto_core_functionality_pb.ListProductConversionRequest)) {
    throw new Error('Expected argument of type data.ListProductConversionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListProductConversionRequest (buffer_arg) {
  return proto_core_functionality_pb.ListProductConversionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListProductConversionResponse (arg) {
  if (!(arg instanceof proto_core_functionality_pb.ListProductConversionResponse)) {
    throw new Error('Expected argument of type data.ListProductConversionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListProductConversionResponse (buffer_arg) {
  return proto_core_functionality_pb.ListProductConversionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListWarehousesRequest (arg) {
  if (!(arg instanceof proto_core_functionality_pb.ListWarehousesRequest)) {
    throw new Error('Expected argument of type data.ListWarehousesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListWarehousesRequest (buffer_arg) {
  return proto_core_functionality_pb.ListWarehousesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListWarehousesResponse (arg) {
  if (!(arg instanceof proto_core_functionality_pb.ListWarehousesResponse)) {
    throw new Error('Expected argument of type data.ListWarehousesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListWarehousesResponse (buffer_arg) {
  return proto_core_functionality_pb.ListWarehousesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

var CoreFunctionalityService = exports.CoreFunctionalityService = {
  // 	Get Country Information
  getCountry: {
    path: '/data.CoreFunctionality/GetCountry',
    requestStream: false,
    responseStream: false,
    requestType: proto_core_functionality_pb.GetCountryRequest,
    responseType: proto_core_functionality_pb.Country,
    requestSerialize: serialize_data_GetCountryRequest,
    requestDeserialize: deserialize_data_GetCountryRequest,
    responseSerialize: serialize_data_Country,
    responseDeserialize: deserialize_data_Country
  },
  // 	List Organizations
  listOrganizations: {
    path: '/data.CoreFunctionality/ListOrganizations',
    requestStream: false,
    responseStream: false,
    requestType: proto_core_functionality_pb.ListOrganizationsRequest,
    responseType: proto_core_functionality_pb.ListOrganizationsResponse,
    requestSerialize: serialize_data_ListOrganizationsRequest,
    requestDeserialize: deserialize_data_ListOrganizationsRequest,
    responseSerialize: serialize_data_ListOrganizationsResponse,
    responseDeserialize: deserialize_data_ListOrganizationsResponse
  },
  // 	Warehouses
  listWarehouses: {
    path: '/data.CoreFunctionality/ListWarehouses',
    requestStream: false,
    responseStream: false,
    requestType: proto_core_functionality_pb.ListWarehousesRequest,
    responseType: proto_core_functionality_pb.ListWarehousesResponse,
    requestSerialize: serialize_data_ListWarehousesRequest,
    requestDeserialize: deserialize_data_ListWarehousesRequest,
    responseSerialize: serialize_data_ListWarehousesResponse,
    responseDeserialize: deserialize_data_ListWarehousesResponse
  },
  // 	Request Language List
  listLanguages: {
    path: '/data.CoreFunctionality/ListLanguages',
    requestStream: false,
    responseStream: false,
    requestType: proto_core_functionality_pb.ListLanguagesRequest,
    responseType: proto_core_functionality_pb.ListLanguagesResponse,
    requestSerialize: serialize_data_ListLanguagesRequest,
    requestDeserialize: deserialize_data_ListLanguagesRequest,
    responseSerialize: serialize_data_ListLanguagesResponse,
    responseDeserialize: deserialize_data_ListLanguagesResponse
  },
  // 	Get Business Partner from search
  getBusinessPartner: {
    path: '/data.CoreFunctionality/GetBusinessPartner',
    requestStream: false,
    responseStream: false,
    requestType: proto_core_functionality_pb.GetBusinessPartnerRequest,
    responseType: proto_core_functionality_pb.BusinessPartner,
    requestSerialize: serialize_data_GetBusinessPartnerRequest,
    requestDeserialize: deserialize_data_GetBusinessPartnerRequest,
    responseSerialize: serialize_data_BusinessPartner,
    responseDeserialize: deserialize_data_BusinessPartner
  },
  // 	Create Business Partner
  createBusinessPartner: {
    path: '/data.CoreFunctionality/CreateBusinessPartner',
    requestStream: false,
    responseStream: false,
    requestType: proto_core_functionality_pb.CreateBusinessPartnerRequest,
    responseType: proto_core_functionality_pb.BusinessPartner,
    requestSerialize: serialize_data_CreateBusinessPartnerRequest,
    requestDeserialize: deserialize_data_CreateBusinessPartnerRequest,
    responseSerialize: serialize_data_BusinessPartner,
    responseDeserialize: deserialize_data_BusinessPartner
  },
  // 	List Business Partner
  listBusinessPartners: {
    path: '/data.CoreFunctionality/ListBusinessPartners',
    requestStream: false,
    responseStream: false,
    requestType: proto_core_functionality_pb.ListBusinessPartnersRequest,
    responseType: proto_core_functionality_pb.ListBusinessPartnersResponse,
    requestSerialize: serialize_data_ListBusinessPartnersRequest,
    requestDeserialize: deserialize_data_ListBusinessPartnersRequest,
    responseSerialize: serialize_data_ListBusinessPartnersResponse,
    responseDeserialize: deserialize_data_ListBusinessPartnersResponse
  },
  // 	Get Currency Rate
  getConversionRate: {
    path: '/data.CoreFunctionality/GetConversionRate',
    requestStream: false,
    responseStream: false,
    requestType: proto_core_functionality_pb.GetConversionRateRequest,
    responseType: proto_core_functionality_pb.ConversionRate,
    requestSerialize: serialize_data_GetConversionRateRequest,
    requestDeserialize: deserialize_data_GetConversionRateRequest,
    responseSerialize: serialize_data_ConversionRate,
    responseDeserialize: deserialize_data_ConversionRate
  },
  // 	List Product Conversion UOM
  listProductConversion: {
    path: '/data.CoreFunctionality/ListProductConversion',
    requestStream: false,
    responseStream: false,
    requestType: proto_core_functionality_pb.ListProductConversionRequest,
    responseType: proto_core_functionality_pb.ListProductConversionResponse,
    requestSerialize: serialize_data_ListProductConversionRequest,
    requestDeserialize: deserialize_data_ListProductConversionRequest,
    responseSerialize: serialize_data_ListProductConversionResponse,
    responseDeserialize: deserialize_data_ListProductConversionResponse
  }
};

exports.CoreFunctionalityClient = grpc.makeGenericClientConstructor(CoreFunctionalityService);
