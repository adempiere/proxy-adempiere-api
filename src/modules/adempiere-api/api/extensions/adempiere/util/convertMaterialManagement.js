/************************************************************************************
 * Copyright (C) 2012-2022 E.R.P. Consultores y Asociados, C.A.                     *
 * Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                     *
 * This program is free software: you can redistribute it and/or modify             *
 * it under the terms of the GNU General Public License as published by             *
 * the Free Software Foundation, either version 2 of the License, or                *
 * (at your option) any later version.                                              *
 * This program is distributed in the hope that it will be useful,                  *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of                   *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the                     *
 * GNU General Public License for more details.                                     *
 * You should have received a copy of the GNU General Public License                *
 * along with this program. If not, see <https://www.gnu.org/licenses/>.            *
 ************************************************************************************/

import {
  getDecimalFromGRPC
} from '@adempiere/grpc-api/lib/convertBaseDataType';

export function convertProductAttributeValue (productAttributeValue) {
  if (!productAttributeValue) {
    return undefined
  }

  return {
    id: productAttributeValue.getId(),
    uuid: productAttributeValue.getUuid(),
    value: productAttributeValue.getValue(),
    name: productAttributeValue.getName(),
    description: productAttributeValue.getDescription()
  }
}

export function convertProductAttribute (productAttribute) {
  if (!productAttribute) {
    return undefined
  }

  return {
    id: productAttribute.getId(),
    uuid: productAttribute.getUuid(),
    name: productAttribute.getName(),
    description: productAttribute.getDescription(),
    value_type: productAttribute.getValueType(),
    is_mandatory: productAttribute.getIsMandatory(),
    is_instance_attribute: productAttribute.getIsInstanceAttribute(),
    sequence: productAttribute.getSequence(),
    product_attribute_values: productAttribute.getProductAttributeValuesList().map(productAttributeValue => {
      return convertProductAttributeValue(productAttributeValue)
    })
  }
}

export function convertProductAttributeSet (productAttributeSet) {
  if (!productAttributeSet) {
    return undefined;
  }

  return {
    id: productAttributeSet.getId(),
    uuid: productAttributeSet.getUuid(),
    name: productAttributeSet.getName(),
    description: productAttributeSet.getDescription(),
    is_instance_attribute: productAttributeSet.getIsInstanceAttribute(),
    is_lot: productAttributeSet.getIsLot(),
    is_lot_mandatory: productAttributeSet.getIsLotMandatory(),
    lot_control_id: productAttributeSet.getLotControlId(),
    lot_char_start_overwrite: productAttributeSet.getLotCharStartOverwrite(),
    lot_char_end_overwrite: productAttributeSet.getLotCharEndOverwrite(),
    // Serial Attributes
    is_serial: productAttributeSet.getIsSerial(),
    is_serial_mandatory: productAttributeSet.getIsSerialMandatory(),
    serial_control_id: productAttributeSet.getSerialControlId(),
    serial_char_start_overwrite: productAttributeSet.getSerialCharStartOverwrite(),
    serial_char_end_overwrite: productAttributeSet.getSerialCharEndOverwrite(),
    // Guarantee Date Attributes
    is_guarantee_date: productAttributeSet.getIsGuaranteeDate(),
    is_guarantee_date_mandatory: productAttributeSet.getIsGuaranteeDateMandatory(),
    guarantee_days: productAttributeSet.getGuaranteeDays(),
    madatory_type: productAttributeSet.getMandatoryType(),
    product_attributes: productAttributeSet.getProductAttributesList().map(productAttribute => {
      return convertProductAttribute(productAttribute)
    })
  }
}

export function convertProductAttributeInstance (productAttributeInstance) {
  if (!productAttributeInstance) {
    return undefined
  }

  return {
    id: productAttributeInstance.getId(),
    uuid: productAttributeInstance.getUuid(),
    value: productAttributeInstance.getValue(),
    value_number: getDecimalFromGRPC(
      productAttributeInstance.getValueNumber()
    ),
    product_attribute_id: productAttributeInstance.getProductAttributeId(),
    product_attribute_uuid: productAttributeInstance.getProductAttributeUuid(),
    product_attribute_value_id: productAttributeInstance.getProductAttributeValueId(),
    product_attribute_value_uuid: productAttributeInstance.getProductAttributeValueUuid(),
    product_attribute_set_instance_id: productAttributeInstance.getProductAttributeSetInstanceId(),
    product_attribute_set_instance_uuid: productAttributeInstance.getProductAttributeSetInstanceUuid()
  }
}

export function convertProductAttributeSetInstance (productAttributeSetInstance) {
  if (!productAttributeSetInstance) {
    return undefined
  }

  return {
    id: productAttributeSetInstance.getId(),
    uuid: productAttributeSetInstance.getUuid(),
    description: productAttributeSetInstance.getDescription(),
    guarantee_date: productAttributeSetInstance.getGuaranteeDate(),
    lot: productAttributeSetInstance.getLot(),
    lot_id: productAttributeSetInstance.getLotId(),
    serial: productAttributeSetInstance.getSerial(),
    product_attribute_set: convertProductAttributeSet(
      productAttributeSetInstance.getProductAttributeSet()
    ),
    product_attribute_instances: productAttributeSetInstance.getProductAttributeInstancesList().map(attributeInstance => {
      return convertProductAttributeInstance(attributeInstance);
    })
  }
}

export function convertListProductAttributeSetInstances (productAttributeSetInstancesList) {
  return {
    record_count: productAttributeSetInstancesList.getRecordCount(),
    next_page_token: productAttributeSetInstancesList.getNextPageToken(),
    records: productAttributeSetInstancesList.getRecordsList().map(productAttributeSetInstance => {
      return convertProductAttributeSetInstance(productAttributeSetInstance);
    })
  }
}
