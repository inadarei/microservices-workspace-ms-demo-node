# Alpine Linux-based, tiny Node container:
FROM node:8.9-alpine

ADD ./ /opt/app
WORKDIR /opt/app

USER root

RUN rm -rf node_modules \
 && npm install \
 && chown -R node /opt/app \
 && npm install -g nodemon

USER node

ENV HOME_DIR=/opt/app \
    NODE_CLUSTERED=1 \
    NODE_ENV=production \
    NODE_HOT_RELOAD=0 \
    PORT=5501

EXPOSE 5501
