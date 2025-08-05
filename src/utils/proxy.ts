const https = require('https');
const http = require('http');
const { HttpsProxyAgent } = require('https-proxy-agent');
const { HttpProxyAgent } = require('http-proxy-agent');
const axios = require('axios');

let httpProxyAgent: any = null;
let httpsProxyAgent: any = null;

const setupProxy = () => {
  console.log('process.env.HTTP_PROXY', process.env?.HTTP_PROXY);
  if (process.env?.HTTP_PROXY) {
    httpsProxyAgent = new HttpsProxyAgent(process.env.HTTP_PROXY);
    httpProxyAgent = new HttpProxyAgent(process.env.HTTP_PROXY);
    
    // 设置全局 agent
    http.globalAgent = httpProxyAgent;
    https.globalAgent = httpsProxyAgent;
    
    // 配置 axios 默认代理
    axios.defaults.httpAgent = httpProxyAgent;
    axios.defaults.httpsAgent = httpsProxyAgent;
    
    console.log('Proxy configured for HTTP_PROXY:', process.env.HTTP_PROXY);
  }
};

export { httpProxyAgent, httpsProxyAgent };

export default setupProxy;
