/*
---
tags: api
done: true
---

# documentation

url: https://vmo.org/price?path=13_116&id=13

Root & Rhizome

REQ0601
*/

import X from 'x-ray';
export const x = X().timeout(15000).delay('3s', '10s').concurrency(6);

export async function listRootsPrice(): Promise<Object[]> {
  let roots_w_header = await x('https://vmo.org/price?path=13_116&id=13', {
    items: x('tr', [
      {
        chinese_name: 'td:nth-child(2)',
        this_morning_price_HKD: 'td:nth-child(3)',
        weekly_avg_price_HKD: 'td:nth-child(4)',
        img_href: 'td:nth-child(1) a@href',
      },
    ]),
  });
  let roots_price = roots_w_header.items.slice(1);
  return roots_price;
}
