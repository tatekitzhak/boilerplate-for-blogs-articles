FROM ubuntu/nginx

RUN echo '++++++++ Hello Docker +++++ +++'

COPY ./dist /var/www/html
RUN apt update -y && \
    apt install vim -y && \
    apt install -y iputils-ping
# COPY nginx.conf /etc/nginx/nginx.conf