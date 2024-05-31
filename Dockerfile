FROM debian:bullseye

ARG userUID=1000

RUN useradd -m -u $userUID node_user

RUN  DEBIAN_FRONTEND=noninteractive apt update && apt install -y nodejs npm curl

RUN npm -g install n && n stable

WORKDIR /home/node_user/src

ADD package.json .

RUN chown -R 1000:1000 /home/node_user/src

USER node_user

RUN npm install