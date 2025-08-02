import { s } from '@/router/init';
import { contract } from '@/contract';
import { tools } from '@tool/constants';
import { formatToolList } from '@tool/utils/tool';

import https from 'https';

import http from 'http';

export const getToolsHandler = s.route(contract.tool.list, async () => {
  const req = https.get('https://httpbin.org/ip', (res: any) => {
    console.log('statusCode:', 'ssdsdsd');
    res.on('data', (chunk: any) => {
      console.log('gteese', chunk.toString());
    });
    req.on('error', (err: any) => {});

    res.on('end', () => {
      console.log('dsdsd');
    });
  });

  const req2 = http.get('http://49.233.46.121:30840/login', (res: any) => {
    console.log('statusCode:', 'ssdsdsd');
    res.on('data', (chunk: any) => {
      console.log('gteese', chunk.toString());
    });
    req.on('error', (err: any) => {});

    res.on('end', () => {
      console.log('dsdsd');
    });
  });

  req.end();

  return {
    status: 200,
    body: formatToolList(tools)
  };
});
