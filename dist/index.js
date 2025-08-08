#!/usr/bin/env node
import { FastMCP } from 'fastmcp';
// import { z } from 'zod'
//
import { listWinterVegetablesPrice } from './lib/listWinterVegetablesPrice.js';
import { listSummerVegetablesPrice } from './lib/listSummerVegetablesPrice.js';
import { listLeafyVegetablesPrice } from './lib/listLeafyVegetablesPrice.js';
import { listMelonsPrice } from './lib/listMelonsPrice.js';
import { listFruitsPrice } from './lib/listFruitsPrice.js';
import { listRootsPrice } from './lib/listRootsPrice.js';
import { listBeansPrice } from './lib/listBeansPrice.js';
import { listHerbsPrice } from './lib/listHerbsPrice.js';
import { listMushroomsPrice } from './lib/listMushroomsPrice.js';
import { listOthersPrice } from './lib/listOthersPrice.js';
export const USER_AGENT = 'weather-app/1.0';
const server = new FastMCP({ name: 'mcp-hko', version: '1.0.0' });
function delay_ms(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
function addListWinterVegetablesPrice(server) {
    server.addTool({
        name: 'list_prices_winter',
        description: `List today winter vegetable(s) price`,
        execute: async () => {
            const result = JSON.stringify(await listWinterVegetablesPrice());
            return result || '<error>nothing returned</error>';
        },
    });
}
function addListSummerVegetablesPrice(server) {
    server.addTool({
        name: 'list_prices_summer',
        description: `List today summer vegetable(s) price`,
        execute: async () => {
            const result = JSON.stringify(await listSummerVegetablesPrice());
            return result || '<error>nothing returned</error>';
        },
    });
}
function addListLeafyVegetablesPrice(server) {
    server.addTool({
        name: 'list_prices_leafy',
        description: `List today leafy vegetable(s) price`,
        execute: async () => {
            const result = JSON.stringify(await listLeafyVegetablesPrice());
            return result || '<error>nothing returned</error>';
        },
    });
}
function addListMelonsPrice(server) {
    server.addTool({
        name: 'list_prices_melons',
        description: `List today melon(s) price`,
        execute: async () => {
            const result = JSON.stringify(await listMelonsPrice());
            return result || '<error>nothing returned</error>';
        },
    });
}
function addListFruitsPrice(server) {
    server.addTool({
        name: 'list_prices_fruits',
        description: `List today fruit(s) price`,
        execute: async () => {
            const result = JSON.stringify(await listFruitsPrice());
            return result || '<error>nothing returned</error>';
        },
    });
}
function addListRootsPrice(server) {
    server.addTool({
        name: 'list_prices_roots',
        description: `List today root vegetable(s) price`,
        execute: async () => {
            const result = JSON.stringify(await listRootsPrice());
            return result || '<error>nothing returned</error>';
        },
    });
}
function addListBeansPrice(server) {
    server.addTool({
        name: 'list_prices_beans',
        description: `List today bean(s) price`,
        execute: async () => {
            const result = JSON.stringify(await listBeansPrice());
            return result || '<error>nothing returned</error>';
        },
    });
}
function addListHerbsPrice(server) {
    server.addTool({
        name: 'list_prices_herbs',
        description: `List today herb(s) price`,
        execute: async () => {
            const result = JSON.stringify(await listHerbsPrice());
            return result || '<error>nothing returned</error>';
        },
    });
}
function addListMushroomsPrice(server) {
    server.addTool({
        name: 'list_prices_mushrooms',
        description: `List today mushroom(s) price`,
        execute: async () => {
            const result = JSON.stringify(await listMushroomsPrice());
            return result || '<error>nothing returned</error>';
        },
    });
}
function addListOthersPrice(server) {
    server.addTool({
        name: 'list_prices_others',
        description: `List today other vegetable(s) price`,
        execute: async () => {
            const result = JSON.stringify(await listOthersPrice());
            return result || '<error>nothing returned</error>';
        },
    });
}
// NOTES: remember to tell user increase timeout of this mcp e.g. 30 seconds
//
function addListAllVegetablesPrice(server) {
    server.addTool({
        name: 'list_prices_all',
        description: 'List today prices for all vegetable categories (winter, summer, leafy, melons, fruits, roots, beans, herbs, mushrooms, others)',
        execute: async () => {
            const winter = await listWinterVegetablesPrice();
            const summer = await listSummerVegetablesPrice();
            const leafy = await listLeafyVegetablesPrice();
            await delay_ms(500);
            const melons = await listMelonsPrice();
            const fruits = await listFruitsPrice();
            const roots = await listRootsPrice();
            await delay_ms(500);
            const beans = await listBeansPrice();
            const herbs = await listHerbsPrice();
            const mushrooms = await listMushroomsPrice();
            await delay_ms(500);
            const others = await listOthersPrice();
            const allPrices = [
                //
                ...winter,
                ...summer,
                ...leafy,
                ...melons,
                ...fruits,
                ...roots,
                ...beans,
                ...herbs,
                ...mushrooms,
                ...others,
            ];
            return JSON.stringify(allPrices) || '<error>nothing returned</error>';
        },
    });
}
//
addListAllVegetablesPrice(server);
//
addListWinterVegetablesPrice(server);
addListSummerVegetablesPrice(server);
addListLeafyVegetablesPrice(server);
addListMelonsPrice(server);
addListFruitsPrice(server);
addListRootsPrice(server);
addListBeansPrice(server);
addListHerbsPrice(server);
addListMushroomsPrice(server);
addListOthersPrice(server);
server.start({ transportType: 'stdio' });
process.on('uncaughtException', (error) => {
    console.error(`[mcp-hko] exception: ${error instanceof Error ? error.stack : String(error)}`);
});
