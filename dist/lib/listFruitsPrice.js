/*
---
tags: api
done: true
---

# documentation

url: https://vmo.org/price?path=13_115&id=12

Fruit

REQ0501
*/
import X from 'x-ray';
export const x = X().timeout(15000).delay('3s', '10s').concurrency(6);
export async function listFruitsPrice() {
    let fruits_w_header = await x('https://vmo.org/price?path=13_115&id=12', {
        items: x('tr', [
            {
                chinese_name: 'td:nth-child(2)',
                this_morning_price_HKD: 'td:nth-child(3)',
                weekly_avg_price_HKD: 'td:nth-child(4)',
                img_href: 'td:nth-child(1) a@href',
            },
        ]),
    });
    let fruits_price = fruits_w_header.items.slice(1);
    return fruits_price;
}
