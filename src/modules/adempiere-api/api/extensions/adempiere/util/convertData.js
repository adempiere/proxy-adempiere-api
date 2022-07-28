
import {
  convertEntityFromGRPC
} from '@adempiere/grpc-api/lib/convertBaseDataType';

export function convertEntitiesListFromGRPC (entitiesList) {
  return {
    record_count: entitiesList.getRecordCount(),
    next_page_token: entitiesList.getNextPageToken(),
    records: entitiesList.getRecordsList().map(entity => {
      return convertEntityFromGRPC(entity);
    })
  }
}
