/*
---
tags: api
done: true
---

# documentation

url: https://vmo.org/price?path=13_120&id=17

Others

REQ1001
*/

import X from 'x-ray';
export const x = X().timeout(15000).delay('3s', '10s').concurrency(6);

export async function listOthersPrice(): Promise<Object[]> {
  let others_w_header = await x('https://vmo.org/price?path=13_120&id=17', {
    items: x('tr', [
      {
        chinese_name: 'td:nth-child(2)',
        this_morning_price_HKD: 'td:nth-child(3)',
        weekly_avg_price_HKD: 'td:nth-child(4)',
        img_href: 'td:nth-child(1) a@href',
      },
    ]),
  });
  let others_price = others_w_header.items.slice(1);
  return others_price;
}
