/*
---
tags: api
done: true
---

# documentation

url: https://vmo.org/price?path=13_113&id=3

Leafy

REQ0301
*/
import X from 'x-ray';
export const x = X().timeout(15000).delay('3s', '10s').concurrency(6);
export async function listLeafyVegetablesPrice() {
    let leafy_vegetables_w_header = await x('https://vmo.org/price?path=13_113&id=3', {
        items: x('tr', [
            {
                chinese_name: 'td:nth-child(2)',
                this_morning_price_HKD: 'td:nth-child(3)',
                weekly_avg_price_HKD: 'td:nth-child(4)',
                img_href: 'td:nth-child(1) a@href',
            },
        ]),
    });
    let leafy_vegetables_price = leafy_vegetables_w_header.items.slice(1);
    return leafy_vegetables_price;
}
