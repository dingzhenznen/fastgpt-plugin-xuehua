import { s } from '@/router/init';
import { contract } from '@/contract';
import { tools } from '@tool/constants';
import { formatToolList } from '@tool/utils/tool';

import axios from 'axios';

export const getToolsHandler = s.route(contract.tool.list, async () => {


  fetch("https://www.baidu.com/")
    .then((res) => res.text())
    .then((res) => {
      console.log('baidu result',res.length);
    })
    .catch((err) => console.log("baidu 请求失败：", err));


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
