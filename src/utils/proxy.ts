
import { HttpsProxyAgent } from 'https-proxy-agent';
import { HttpProxyAgent } from 'http-proxy-agent';
import { setGlobalDispatcher, ProxyAgent,fetch }  from "undici";
import axios from 'axios';
const initProxy = () => {
  if(process.env?.HTTP_PROXY){
    const proxy = process.env?.HTTP_PROXY;
    handleAxios(proxy)
    handleFetch(proxy)
  }
};
const handleAxios =(proxy:string)=>{
  console.log('init axios proxy',proxy);
  axios.defaults.httpAgent = new HttpProxyAgent(proxy);;
  axios.defaults.httpsAgent =  new HttpsProxyAgent(proxy);
}
const handleFetch = (proxy:string)=>{
  console.log('initFetch proxy',proxy);
  const httpDispatcher = new ProxyAgent(proxy);
    setGlobalDispatcher(httpDispatcher);
    // @ts-ignore
    global.fetch = fetch;
}

export default initProxy;
