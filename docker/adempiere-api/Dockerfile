ARG NODE_RELEASE $NODE_RELEASE
FROM node:$NODE_RELEASE

LABEL maintainer="EdwinBetanc0urt@outlook.com" \
	description="Proxy ADempiere API RESTful"


# Init ENV with default values
ENV \
	SERVER_PORT=8085 \
	ES_HOST="localhost" \
	ES_PORT=9200 \
	REDIS_HOST="localhost" \
	REDIS_PORT=6379 \
	REDIS_DB=0 \
	AD_DEFAULT_HOST="localhost" \
	AD_DEFAULT_PORT=50059 \
	AD_TOKEN="adempiere_token" \
	AD_STORE_TOKEN="adempiere_store_token" \
	API_URL_IMAGES="localhost" \
	API_HTTP_BASED="false" \
	STORE_URL_IMAGES="localhost" \
	STORE_HTTP_BASED="false"\
	RESTORE_DB="N" \
	INDEX="vue_storefront_catalog" \
	LANGUAGE="en_US"

WORKDIR /var/www/proxy-adempiere-api/

EXPOSE ${SERVER_PORT}

# Copy src files
ADD proxy-adempiere-api.tar.gz /var/www/proxy-adempiere-api
COPY docker/adempiere-api/start.sh /var/www/proxy-adempiere-api/start.sh
COPY docker/adempiere-api/setting.sh /var/www/proxy-adempiere-api/setting.sh


RUN cd /var/www/proxy-adempiere-api/ && \
    addgroup adempiere && \
    adduser --disabled-password --gecos ""  --ingroup adempiere --no-create-home adempiere && \
    chown -R adempiere ../ && \
    chmod +x *.sh && \
    sh setting.sh


USER adempiere
ENTRYPOINT ["sh" , "start.sh"]
