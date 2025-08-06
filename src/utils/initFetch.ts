import { setGlobalDispatcher, ProxyAgent }  from"undici";
const initFetch = ()=>{
  console.log('initFetch',process.env.HTTP_PROXY);
  if(process.env.HTTP_PROXY){
    console.log('initFetch','start');
    const httpDispatcher = new ProxyAgent(process.env.HTTP_PROXY);
    setGlobalDispatcher(httpDispatcher);
    console.log('initFetch','success');
  }
}
export default initFetch;