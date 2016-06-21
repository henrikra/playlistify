#!/bin/bash

# Node.js
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
apt-get install nodejs -y
apt-get install build-essential -y
mkdir -p /vagrant_node_modules
chown vagrant:vagrant /vagrant_node_modules
mkdir -p /vagrant/node_modules
mount --bind /vagrant_node_modules /vagrant/node_modules
