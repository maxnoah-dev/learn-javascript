FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# WORKDIR /root
# COPY package.json .

COPY ./index.html /usr/share/nginx/html/index.html
COPY ./index.js   /usr/share/nginx/html/index.js
COPY ./public /usr/share/nginx/html/public
# RUN yarn config set network-timeout 3000000
# RUN yarn install
# EXPOSE 8088
# CMD ["node", "server.js"]

# ===============================
# port default: private port (80)
# docker build . -t img-html:1.0.0 
# -t => name command
# :*.*.* => tag

# ===============================
#  docker run -d -p 8088:80 --name demo-container-new-image -e DATABASE=example img-html:latest