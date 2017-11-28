FROM ubuntu:16.04

MAINTAINER FedericoMolina

RUN apt-get update
RUN apt-get -y install apache2

COPY ./all/ /var/www/html/

EXPOSE 80

ENTRYPOINT ["apache2ctl"]
CMD ["-DFOREGROUND"]