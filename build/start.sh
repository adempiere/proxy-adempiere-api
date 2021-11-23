#!/usr/bin/env sh
# @autor Edwin Betancourt <EdwinBetanc0urt@outlook.com>
# Set enviroment variables to config file default.json

# Set env values to proxy api rest ful
sed -i "s|SERVER_HOST|$(hostname)|g"  /var/www/proxy-adempiere-api/config/default.json
sed -i "s|SERVER_PORT|$SERVER_PORT|g"  /var/www/proxy-adempiere-api/config/default.json
sed -i "s|en_US|$LANGUAGE|g"  /var/www/proxy-adempiere-api/config/default.json


# Set env values to grpc access service
if [ -z "$AD_ACCESS_HOST" ]; then
    AD_ACCESS_HOST=$AD_DEFAULT_HOST
fi
if [ -z "$AD_ACCESS_PORT" ]; then
    AD_ACCESS_PORT=$AD_DEFAULT_PORT
fi
sed -i "s|AD_ACCESS_HOST|$AD_ACCESS_HOST|g"  /var/www/proxy-adempiere-api/config/default.json
sed -i "s|AD_ACCESS_PORT|$AD_ACCESS_PORT|g"  /var/www/proxy-adempiere-api/config/default.json


# Set env values to grpc business data service
if [ -z "$AD_BUSINESS_HOST" ]; then
    AD_BUSINESS_HOST=$AD_DEFAULT_HOST
fi
if [ -z "$AD_BUSINESS_PORT" ]; then
    AD_BUSINESS_PORT=$AD_DEFAULT_PORT
fi
sed -i "s|AD_BUSINESS_HOST|$AD_BUSINESS_HOST|g"  /var/www/proxy-adempiere-api/config/default.json
sed -i "s|AD_BUSINESS_PORT|$AD_BUSINESS_PORT|g"  /var/www/proxy-adempiere-api/config/default.json


# Set env values to grpc dictionary service
if [ -z "$AD_DICTIONARY_HOST" ]; then
    AD_DICTIONARY_HOST=$AD_DEFAULT_HOST
fi
if [ -z "$AD_DICTIONARY_PORT" ]; then
    AD_DICTIONARY_PORT=$AD_DEFAULT_PORT
fi
sed -i "s|AD_DICTIONARY_HOST|$AD_DICTIONARY_HOST|g"  /var/www/proxy-adempiere-api/config/default.json
sed -i "s|AD_DICTIONARY_PORT|$AD_DICTIONARY_PORT|g"  /var/www/proxy-adempiere-api/config/default.json


# Set env values to grpc store service
if [ -z "$AD_STORE_HOST" ]; then
    AD_STORE_HOST=$AD_DEFAULT_HOST
fi
if [ -z "$AD_STORE_PORT" ]; then
    AD_STORE_PORT=$AD_DEFAULT_PORT
fi
sed -i "s|AD_STORE_HOST|$AD_STORE_HOST|g"  /var/www/proxy-adempiere-api/config/default.json
sed -i "s|AD_STORE_PORT|$AD_STORE_PORT|g"  /var/www/proxy-adempiere-api/config/default.json

# Set env values to grpc access store service
if [ -z "$AD_STORE_ACCESS_HOST" ]; then
    AD_STORE_ACCESS_HOST=$AD_STORE_HOST
fi
if [ -z "$AD_STORE_ACCESS_PORT" ]; then
    AD_STORE_ACCESS_PORT=$AD_STORE_PORT
fi
sed -i "s|AD_STORE_ACCESS_HOST|$AD_STORE_ACCESS_HOST|g"  /var/www/proxy-adempiere-api/config/default.json
sed -i "s|AD_STORE_ACCESS_PORT|$AD_STORE_ACCESS_PORT|g"  /var/www/proxy-adempiere-api/config/default.json


sed -i "s|adempiere_token|$AD_TOKEN|g"  /var/www/proxy-adempiere-api/config/default.json
sed -i "s|adempiere_store_token|$AD_STORE_TOKEN|g"  /var/www/proxy-adempiere-api/config/default.json
sed -i "s|API_URL_IMAGES|$API_URL_IMAGES|g"  /var/www/proxy-adempiere-api/config/default.json
# Boolean value, default false
sed -i "s|\"API_HTTP_BASED\"|$API_HTTP_BASED|g"  /var/www/proxy-adempiere-api/config/default.json
sed -i "s|STORE_URL_IMAGES|$STORE_URL_IMAGES|g"  /var/www/proxy-adempiere-api/config/default.json
# Boolean value, default false
sed -i "s|\"STORE_HTTP_BASED\"|$STORE_HTTP_BASED|g"  /var/www/proxy-adempiere-api/config/default.json


# Set env values to redis service
sed -i "s|REDIS_HOST|$REDIS_HOST|g"  /var/www/proxy-adempiere-api/config/default.json
sed -i "s|REDIS_PORT|$REDIS_PORT|g"  /var/www/proxy-adempiere-api/config/default.json
sed -i "s|REDIS_DB|$REDIS_DB|g"  /var/www/proxy-adempiere-api/config/default.json


# Set env elastic search values
sed -i "s|ES_HOST|$ES_HOST|g"  /var/www/proxy-adempiere-api/config/default.json
sed -i "s|ES_PORT|$ES_PORT|g"  /var/www/proxy-adempiere-api/config/default.json
# Set elastic search indices value
sed -i "s|vue_storefront_catalog|$INDEX|g"  /var/www/proxy-adempiere-api/config/default.json


cd /var/www/proxy-adempiere-api


if [ "$RESTORE_DB" = 'Y' ]; then
  yarn restore7
fi


# Run app
yarn dev && tail -f /dev/null
