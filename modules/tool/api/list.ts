import { s } from '@/router/init';
import { contract } from '@/contract';
import { tools } from '@tool/constants';
import { formatToolList } from '@tool/utils/tool';

import axios from 'axios';

import https from 'https';

import http from 'http';

import { setGlobalDispatcher, ProxyAgent }  from "undici";
const httpDispatcher = new ProxyAgent( "http://127.0.0.1:7897");
setGlobalDispatcher(httpDispatcher);


export const getToolsHandler = s.route(contract.tool.list, async () => {


  // fetch("https://httpbin.org/ip")
  //   .then((res) => res.json())
  //   .then((res) => {
  //     console.log("fetch IP:", res);
  //   })
  //   .catch((err) => console.log("请求失败：", err));


  // axios.get('http://httpbin.org/ip')
  // .then(response => {
  //   console.log('axios IP:', response.data.origin);
  // })
  // .catch(error => {
  //   console.error('请求失败:', error.message);
  // });

  // const req = https.get('https://httpbin.org/ip', (res: any) => {
  //   res.on('data', (chunk: any) => {
  //     console.log('https', chunk.toString());
  //   });
  //   req.on('error', (err: any) => {});

  //   res.on('end', () => {
  //     console.log('done');
  //   });
  // });

  // const req2 = http.get('http://49.233.46.121:30840/login', (res: any) => {
  //   console.log('statusCode:', 'ssdsdsd');
  //   res.on('data', (chunk: any) => {
  //     console.log('gteese', chunk.toString());
  //   });
  //   req.on('error', (err: any) => {});

  //   res.on('end', () => {
  //     console.log('dsdsd');
  //   });
  // });

  // req.end();

  return {
    status: 200,
    body: formatToolList(tools)
  };
});
