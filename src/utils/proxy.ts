const https = require('https');
const http = require('http');
const { HttpsProxyAgent } = require('https-proxy-agent');
const { HttpProxyAgent } = require('http-proxy-agent');
const setupProxy = () => {
  console.log('process.env.HTTP_PROXY', process.env?.HTTP_PROXY);
  if (process.env?.HTTP_PROXY) {
    // const httpsProxyAgent = new HttpsProxyAgent(process.env.HTTP_PROXY);
    // const httpProxyAgent = new HttpProxyAgent(process.env.HTTP_PROXY);
    // // 覆盖全局Agent
    // https.globalAgent = httpsProxyAgent;
    // http.globalAgent = httpProxyAgent;
  }
};

export default setupProxy;
