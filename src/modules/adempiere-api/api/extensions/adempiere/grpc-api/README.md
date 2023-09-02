ADempiere gRPC-API library to Node.js
==============

<div align="center">
	<img src="https://camo.githubusercontent.com/911c5d54ded447403e56de3f96f332c06bceb8bd/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f622f62312f4164656d70696572652d6c6f676f2e706e67" style="text-align:center;" width="400" />
</div>

![node version](https://img.shields.io/badge/node-v14.x-blue.svg)
[![npm version](https://img.shields.io/npm/v/@adempiere/grpc-api.svg)](https://www.npmjs.com/package/@adempiere/grpc-api)
[![License](https://img.shields.io/npm/l/@adempiere/grpc-api.svg)](https://github.com/adempiere/gRPC-API/blob/master/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/@adempiere/grpc-api.svg)](https://www.npmjs.com/package/@adempiere/grpc-api)

ADempiere node.js write in JavaScript for gRPC service, currently is used as library of proxy ADempiere service and is published as NPM

- [ADempiere-gRPC-Server](https://github.com/adempiere/adempiere-gRPC-Server), docker image [erpya/adempiere-grpc-all-in-one](https://hub.docker.com/r/erpya/adempiere-grpc-all-in-one).

See also:
- [ADempiere-Vue](https://github.com/adempiere/adempiere-vue), docker image [erpya/adempiere-vue](https://hub.docker.com/r/erpya/adempiere-vue).
 service, use it for connect with:
- [Proxy-Adempiere-API](https://github.com/adempiere/proxy-adempiere-api), docker image [erpya/proxy-adempiere-api](https://hub.docker.com/r/erpya/proxy-adempiere-api).


## Using it

```shell
# installing via NPM
npm install @adempiere/grpc-api --save
```
```shell
# installing via Yarn
yarn add @adempiere/grpc-api
```

### A Example
Here a example for it using from Proxy of ADempiere API: https://github.com/adempiere/proxy-adempiere-api/blob/master/src/modules/adempiere-api/index.ts#L17


## Recreate proto stub class (only for contribute to project)
For recreate stub class you must have follow:
- [protobuf](https://github.com/protocolbuffers/protobuf/releases)
- [protoc](https://github.com/grpc/grpc-web/releases)
- Also you can see it: [gRPC-web](https://github.com/grpc/grpc-web)
- [gRPC](https://grpc.io/docs/tutorials/basic/web.html)
- [gRPC-Node](https://github.com/grpc/grpc-node)


## Generate Proto Stub:

### Generate with npm (Recommended):
Via npm:
```shell
# install dependecies and dev dependencies
npm ci

# generate all stub
npm run stub
```

Via yarn:
```shell
# install dependecies and dev dependencies
yarn ci

# generate all stub
yarn stub
```

Note to generate specific proto definition:
* To base bank statement match: `npm run stub:bank_statement_match`
* To base data type: `npm run stub:base_data_type`
* To business: `npm run stub:business`
* To business partner: `npm run stub:business_partner`
* To core functionality: `npm run stub:core_functionality`
* To dashboarding: `npm run stub:dashboarding`
* To dictionary: `npm run stub:dictionary`
* To enrollment: `npm run stub:enrollment`
* To express movement: `npm run stub:express_movement`
* To express receipt: `npm run stub:express_receipt`
* To express shipment: `npm run stub:express_shipment`
* To file management: `npm run stub:file_management`
* To general ledger: `npm run stub:general_ledger`
* To import file loader: `npm run stub:import_file_loader`
* To in-out: `npm run stub:in_out`
* To invoice: `npm run stub:invoice`
* To issue management: `npm run stub:issue_management`
* To logs: `npm run stub:logs`
* To match po receipt invoice: `npm run stub:match_po_receipt_invoice`
* To material management: `npm run stub:material_management`
* To order: `npm run stub:order`
* To payment: `npm run stub:payment`
* To payment allocation: `npm run stub:payment_allocation`
* To payment print export: `npm run stub:payment_print_export`
* To payroll action notice: `npm run stub:payroll_action_notice`
* To point of sales: `npm run stub:point_of_sales`
* To product: `npm run stub:product`
* To security: `npm run stub:security`
* To time control: `npm run stub:time_control`
* To time record: `npm run stub:time_record`
* To user customization: `npm run stub:user_customization`
* To workflow: `npm run stub:workflow`

### Generate directly with grpc-tools:

Generate all stub:
```shell
grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:src/grpc \
    --grpc_out=src/grpc \
    proto/access.proto proto/base_data_type.proto proto/business.proto proto/client.proto proto/core_functionality.proto proto/dictionary.proto proto/enrollment.proto proto/point_of_sales.proto
    # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR
```

* To access:
```shell
# Generate stub to access.proto file
grpc_tools_node_protoc \
    proto/access.proto \
    --js_out=import_style=commonjs,binary:src/grpc/ \
    --grpc_out=grpc_js:src/grpc/
    # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR
```

* To base data type:
```shell
# Generate stub to base_data_type.proto file
grpc_tools_node_protoc \
    proto/base_data_type.proto \
    --js_out=import_style=commonjs,binary:src/grpc/ \
    --grpc_out=grpc_js:src/grpc/
    # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR
```

* To dictionary:
```shell
# Generate stub to access.proto file
grpc_tools_node_protoc \
    proto/dictionary.proto \
    --js_out=import_style=commonjs,binary:src/grpc/ \
    --grpc_out=grpc_js:src/grpc/
    # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR
```

### Output proto stub
The result is generated on: `src/grpc/proto/` folder
- `bank_statement_match_grpc_pb.js`
- `bank_statement_match_pb.js`
- `base_data_type_grpc_pb.js`
- `base_data_type_pb.js`
- `business_grpc_pb.js`
- `business_pb.js`
- `business_partner_grpc_pb.js`
- `business_partner_pb.js`
- `core_functionality_grpc_pb.js`
- `core_functionality_pb.js`
- `dashboarding_grpc_pb.js`
- `dashboarding_pb.js`
- `dictionary_grpc_pb.js`
- `dictionary_pb.js`
- `enrollment_grpc_pb.js`
- `enrollment_pb.js`
- `express_movement_grpc_pb.js`
- `express_movement_pb.js`
- `express_receipt_grpc_pb.js`
- `express_receipt_pb.js`
- `express_shipment_grpc_pb.js`
- `express_shipment_pb.js`
- `file_management_pb.js`
- `file_management_grpc_pb.js`
- `general_ledger_pb.js`
- `general_ledger_grpc_pb.js`
- `import_file_loader_pb.js`
- `import_file_loader_grpc_pb.js`
- `in_out_grpc_pb.js`
- `in_out_pb.js`
- `invoice_grpc_pb.js`
- `invoice_pb.js`
- `issue_management_grpc_pb.js`
- `issue_management_pb.js`
- `logs_grpc_pb.js`
- `logs_pb.js`
- `match_po_receipt_invoice_grpc_pb.js`
- `match_po_receipt_invoice_pb.js`
- `material_management_grpc_pb.js`
- `material_management_pb.js`
- `order_grpc_pb.js`
- `order_pb.js`
- `payment_allocation_grpc_pb.js`
- `payment_allocation_pb.js`
- `payment_grpc_pb.js`
- `payment_pb.js`
- `payment_print_export_grpc_pb.js`
- `payment_print_export_pb.js`
- `payroll_action_notice_grpc_pb.js`
- `payroll_action_notice_pb.js`
- `point_of_sales_grpc_pb.js`
- `point_of_sales_pb.js`
- `product_grpc_pb.js`
- `product_pb.js`
- `record_management_grpc_pb.js`
- `record_management_pb.js`
- `security_grpc_pb.js`
- `security_pb.js`
- `time_control_grpc_pb.js`
- `time_control_pb.js`
- `time_record_grpc_pb.js`
- `time_record_pb.js`
- `user_customization_grpc_pb.js`
- `user_customization_pb.js`
- `workflow_grpc_pb.js`
- `workflow_pb.js`


## Sponsors

Become a sponsor and get your logo on our README on GitHub with a link to your site. [Become a sponsor](https://www.paypal.com/paypalme/YamelSenih)

<a href="http://erpya.com/">
  <img width="250px" src="https://erpya.com/wp-content/uploads/2017/11/ERP-logotipo-H-color.png" />
</a>
