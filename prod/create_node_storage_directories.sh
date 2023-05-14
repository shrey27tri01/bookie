#!/bin/sh
if [ ! -d /var/lib/data/mysql_data ]; then
    mkdir -p /var/lib/data/mysql_data;
fi;
chmod -R 777 /var/lib/data/mysql_data;
chown -R 999:999 /var/lib/data/mysql_data;

if [ ! -d /var/lib/data/static_assets_data ]; then
    mkdir -p /var/lib/data/static_assets_data;
fi;
chmod -R 777 /var/lib/data/static_assets_data;
chown -R 999:999 /var/lib/data/static_assets_data;