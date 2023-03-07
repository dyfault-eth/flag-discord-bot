const { Client, GatewayIntentBits, AttachmentBuilder } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const coingecko = require('coingecko-api');
const coingeckoclient = new coingecko();
const ChartJSImage = require('chart.js-image');

const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

const sleep = ms => new Promise(r => setTimeout(r, ms));
const token = process.env.TOKEN
const chanID = process.env.CHANID

bot.on('ready', async() => {


    setInterval(async function() {
        
        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();

        let now = `${day}/${month}/${year} ${hour}:${minute}:${second}`
        let update = `${day}/${month}/${year} 10:30:0`

        if (now == update) {
        
            console.log("starting create chart")
            let flag = await coingeckoclient.coins.fetchMarketChart('for-loot-and-glory', {
                vs_currency: 'usd',
                days: '7',
                interval: 'daily',
            });
            let flagPrices = flag.data.prices;
            let flagPricesArr = [];
            let flagTimearr = [];
            let dateArr = [];
            let dateArrFormat = [];

            for (let i = 0; i < 7; i++) {
                flagTimearr.push(flagPrices[i][0]);
                flagPricesArr.push(flagPrices[i][1]);
            }

            for (let i = 0; i < 7; i++) {
                dateArr[i] = new Date(flagTimearr[i])
                dateArrFormat[i] = dateArr[i].getDate() + "/" + ( dateArr[i].getMonth() + 1 )+ "/" + (dateArr[i].getFullYear() % 100);
            }

            const mychart = ChartJSImage().chart({
                'type': 'line',
                'data': {
                    'labels': [
                        dateArrFormat[0],
                        dateArrFormat[1],
                        dateArrFormat[2],
                        dateArrFormat[3],
                        dateArrFormat[4],
                        dateArrFormat[5],
                        dateArrFormat[6]
                    ],
                    'datasets': [
                        {
                            "label": "FLAG",
                            "backgroundColor": "rgb(255, 100, 23)",
                            'data': [
                                flagPricesArr[0],
                                flagPricesArr[1],
                                flagPricesArr[2],
                                flagPricesArr[3],
                                flagPricesArr[4],
                                flagPricesArr[5],
                                flagPricesArr[6]
                            ],
                            "lineTension": 0.4,
                            "fill": false,
                            "borderColor": "rgb(255, 100, 23)",
                            "pointBackgroundColor": "rgb(255, 100, 23)"
                }]
                },
                "options": {
                    "title": {
                      "display": true,
                      "text": "Prix FLAG Weekly"
                    },
                    "scales": {
                      "xAxes": [
                        {
                          "scaleLabel": {
                            "display": true,
                            "labelString": "Date"
                          }
                        }
                      ],
                    }
                }
            }).backgroundColor('rgb(61, 61, 61)').width(500).height(300);

            let fulldate = `${day}-${month}-${year} ${hour}-${minute}-${second}`

            let path = `./chart/chart_${fulldate}.png`;

            mychart.toFile(path)
            await sleep(10000)

            let file = new AttachmentBuilder(`./chart/chart_${fulldate}.png`);
            let embed = {
                title: 'chart flag',
                image: {
                    url: `attachment://chart_${fulldate}.png`
                }
            }
            bot.channels.cache.get(chanID).send({embed: [embed], files: [file]});
            console.log("image successfully sent")

        }

    }, 1000);

    setInterval(async function() {
        
        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        var now = `${day}/${month}/${year} ${hour}:${minute}:${second}`

        if (month === 2) {
            let update = `28/${month}/${year} 11:0:0`

            if (now == update) {

                console.log("starting create chart")
                let flag = await coingeckoclient.coins.fetchMarketChart('for-loot-and-glory', {
                    vs_currency: 'usd',
                    days: '28',
                    interval: 'daily',
                });
                let flagPrices = flag.data.prices;
                let flagPricesArr = [];
                let flagTimearr = [];
                let dateArr = [];
                let dateArrFormat = [];

                for (let i = 0; i < flagPrices.length; i++) {
                    flagTimearr.push(flagPrices[i][0]);
                    flagPricesArr.push(flagPrices[i][1]);
                }

                for (let i = 0; i < flagPrices.length; i++) {
                    dateArr[i] = new Date(flagTimearr[i])
                    dateArrFormat[i] = dateArr[i].getDate() + "/" + ( dateArr[i].getMonth() + 1 )+ "/" + (dateArr[i].getFullYear() % 100);
                }

                const mychart = ChartJSImage().chart({
                    'type': 'line',
                    'data': {
                        'labels': [
                            dateArrFormat[0],
                            dateArrFormat[1],
                            dateArrFormat[2],
                            dateArrFormat[3],
                            dateArrFormat[4],
                            dateArrFormat[5],
                            dateArrFormat[6],
                            dateArrFormat[7],
                            dateArrFormat[8],
                            dateArrFormat[9],
                            dateArrFormat[10],
                            dateArrFormat[11],
                            dateArrFormat[12],
                            dateArrFormat[13],
                            dateArrFormat[14],
                            dateArrFormat[15],
                            dateArrFormat[16],
                            dateArrFormat[17],
                            dateArrFormat[18],
                            dateArrFormat[19],
                            dateArrFormat[20],
                            dateArrFormat[21],
                            dateArrFormat[22],
                            dateArrFormat[23],
                            dateArrFormat[24],
                            dateArrFormat[25],
                            dateArrFormat[26],
                            dateArrFormat[27],
                        ],
                        'datasets': [
                            {
                                "label": "FLAG",
                                "backgroundColor": "rgb(0, 198, 15)",
                                'data': [
                                    flagPricesArr[0],
                                    flagPricesArr[1],
                                    flagPricesArr[2],
                                    flagPricesArr[3],
                                    flagPricesArr[4],
                                    flagPricesArr[5],
                                    flagPricesArr[6],
                                    flagPricesArr[7],
                                    flagPricesArr[8],
                                    flagPricesArr[9],
                                    flagPricesArr[10],
                                    flagPricesArr[11],
                                    flagPricesArr[12],
                                    flagPricesArr[13],
                                    flagPricesArr[14],
                                    flagPricesArr[15],
                                    flagPricesArr[16],
                                    flagPricesArr[17],
                                    flagPricesArr[18],
                                    flagPricesArr[19],
                                    flagPricesArr[20],
                                    flagPricesArr[21],
                                    flagPricesArr[22],
                                    flagPricesArr[23],
                                    flagPricesArr[24],
                                    flagPricesArr[25],
                                    flagPricesArr[26],
                                    flagPricesArr[27],
                                ],
                                "lineTension": 0.4,
                                "fill": false,
                                "borderColor": "rgb(0, 198, 15)",
                                "borderWidth": "3",
                                "pointRadius": 0
                    }]
                    },
                    "options": {
                        "title": {
                        "display": true,
                        "text": "Prix FLAG Monthly"
                        },
                        "scales": {
                        "xAxes": [
                            {
                            "scaleLabel": {
                                "display": true,
                                "labelString": "Date"
                            }
                            }
                        ],
                        }
                    }
                }).backgroundColor('rgb(61, 61, 61)').width(700).height(300);

                let fulldate = `${day}-${month}-${year} ${hour}-${minute}-${second}`

                let path = `./chart_month/chart_${fulldate}.png`;

                mychart.toFile(path)
                await sleep(10000)

                let file = new AttachmentBuilder(`./chart_month/chart_${fulldate}.png`);
                let embed = {
                    title: 'chart flag',
                    image: {
                        url: `attachment://chart_${fulldate}.png`
                    }
                }
                bot.channels.cache.get(chanID).send({embed: [embed], files: [file]});
                console.log("image successfully sent")

            }
        }
        else {
            let update = `30/${month}/${year} 11:45:0`
        
            if (now == update) {

                console.log("starting create chart")
                let flag = await coingeckoclient.coins.fetchMarketChart('for-loot-and-glory', {
                    vs_currency: 'usd',
                    days: '30',
                    interval: 'daily',
                });
                let flagPrices = flag.data.prices;
                let flagPricesArr = [];
                let flagTimearr = [];
                let dateArr = [];
                let dateArrFormat = [];

                for (let i = 0; i < flagPrices.length; i++) {
                    flagTimearr.push(flagPrices[i][0]);
                    flagPricesArr.push(flagPrices[i][1]);
                }

                for (let i = 0; i < flagPrices.length; i++) {
                    dateArr[i] = new Date(flagTimearr[i])
                    dateArrFormat[i] = dateArr[i].getDate() + "/" + ( dateArr[i].getMonth() + 1 )+ "/" + (dateArr[i].getFullYear() % 100);
                }

                const mychart = ChartJSImage().chart({
                    'type': 'line',
                    'data': {
                        'labels': [
                            dateArrFormat[0],
                            dateArrFormat[1],
                            dateArrFormat[2],
                            dateArrFormat[3],
                            dateArrFormat[4],
                            dateArrFormat[5],
                            dateArrFormat[6],
                            dateArrFormat[7],
                            dateArrFormat[8],
                            dateArrFormat[9],
                            dateArrFormat[10],
                            dateArrFormat[11],
                            dateArrFormat[12],
                            dateArrFormat[13],
                            dateArrFormat[14],
                            dateArrFormat[15],
                            dateArrFormat[16],
                            dateArrFormat[17],
                            dateArrFormat[18],
                            dateArrFormat[19],
                            dateArrFormat[20],
                            dateArrFormat[21],
                            dateArrFormat[22],
                            dateArrFormat[23],
                            dateArrFormat[24],
                            dateArrFormat[25],
                            dateArrFormat[26],
                            dateArrFormat[27],
                            dateArrFormat[28],
                            dateArrFormat[29]
                        ],
                        'datasets': [
                            {
                                "label": "FLAG",
                                "backgroundColor": "rgb(0, 198, 15)",
                                'data': [
                                    flagPricesArr[0],
                                    flagPricesArr[1],
                                    flagPricesArr[2],
                                    flagPricesArr[3],
                                    flagPricesArr[4],
                                    flagPricesArr[5],
                                    flagPricesArr[6],
                                    flagPricesArr[7],
                                    flagPricesArr[8],
                                    flagPricesArr[9],
                                    flagPricesArr[10],
                                    flagPricesArr[11],
                                    flagPricesArr[12],
                                    flagPricesArr[13],
                                    flagPricesArr[14],
                                    flagPricesArr[15],
                                    flagPricesArr[16],
                                    flagPricesArr[17],
                                    flagPricesArr[18],
                                    flagPricesArr[19],
                                    flagPricesArr[20],
                                    flagPricesArr[21],
                                    flagPricesArr[22],
                                    flagPricesArr[23],
                                    flagPricesArr[24],
                                    flagPricesArr[25],
                                    flagPricesArr[26],
                                    flagPricesArr[27],
                                    flagPricesArr[28],
                                    flagPricesArr[29]
                                ],
                                "lineTension": 0.4,
                                "fill": false,
                                "borderColor": "rgb(0, 198, 15)",
                                "borderWidth": "3",
                                "pointRadius": 0
                    }]
                    },
                    "options": {
                        "title": {
                        "display": true,
                        "text": "Prix FLAG Monthly"
                        },
                        "scales": {
                        "xAxes": [
                            {
                            "scaleLabel": {
                                "display": true,
                                "labelString": "Date"
                            }
                            }
                        ],
                        }
                    }
                }).backgroundColor('rgb(61, 61, 61)').width(700).height(300);

                let fulldate = `${day}-${month}-${year} ${hour}-${minute}-${second}`

                let path = `./chart_month/chart_${fulldate}.png`;

                mychart.toFile(path)
                await sleep(10000)

                let file = new AttachmentBuilder(`./chart_month/chart_${fulldate}.png`);
                let embed = {
                    title: 'chart flag',
                    image: {
                        url: `attachment://chart_${fulldate}.png`
                    }
                }
                bot.channels.cache.get(chanID).send({embed: [embed], files: [file]});
                console.log("image successfully sent")

            }

        }}, 1000)


    setInterval(async function() {
        try {
            let coin = 'for-loot-and-glory'
            let currencie = 'usd'

            const data = await coingeckoclient.simple.price({
                ids: [coin],
                vs_currencies: [currencie]
            })

            console.log(data.data)
            const price = data['data'][coin][currencie];
            bot.user.setActivity('FLAG ' + price + '$')
            console.log(price)
        } catch (error) {
            console.log(error)
        }
    }, 300000);

    console.log("discord bot ready");
});

bot.login(token);
