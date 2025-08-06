
import { HttpsProxyAgent } from 'https-proxy-agent';
import { HttpProxyAgent } from 'http-proxy-agent';
import { setGlobalDispatcher, ProxyAgent,fetch as unFetch}  from "undici";
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

  console.log('init fetch proxy',proxy);
  
    // @ts-ignore
    globalThis.fetch =(url:string, options:any = {}) => {
      console.log('init axios fetch');
      return axios(url,{
        method: options.method || 'GET',
        data: options.body || {},
        headers: options.headers || {}
      }).then(response => ({
        ok: response.status >= 200 && response.status < 300,
        status: response.status,
        json: () => Promise.resolve(response.data),
        text: () => Promise.resolve(JSON.stringify(response.data))
      }));
    };
}

export default initProxy;
