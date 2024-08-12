const ip=require('ip');


exports.configurations={
  serverInformation={
    host:ip.host(),
    port:5000
  },
  https:false,
  maxSockets:1000000
};
