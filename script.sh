#!/bin/bash

# Check if PM2 is installed
if ! [ -x "$(command -v pm2)" ]; then
  echo 'Error: PM2 is not installed.' >&2
  exit 1
fi

# Start the Node.js application with PM2
pm2 start npm --name "faucet" -- run start

# Save the current PM2 process list
pm2 save

# Make sure that PM2 and the Node.js application are restarted automatically on server reboot
pm2 startup
