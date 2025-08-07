
console.log("init fetch Proxy");
import {ProxyAgent,setGlobalDispatcher} from "undici";
const httpDispatcher = new ProxyAgent(process.env.HTTP_PROXY as string);
setGlobalDispatcher(httpDispatcher);
