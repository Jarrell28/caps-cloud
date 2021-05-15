'use strict';

const uuid = require('uuid').v4;

const { Producer } = require('sqs-producer');
const { Consumer } = require('sqs-consumer');


const app = Consumer.create({
    queueUrl: 'https://sqs.us-east-2.amazonaws.com/126385538192/packages',
    handleMessage: async (message) => {
        const order = JSON.parse(JSON.parse(message.Body).Message);
        console.log("Picked up order: ", order);

        setTimeout(async () => {
            const producer = Producer.create({
                queueUrl: order.vendorId,
                region: 'us-east-2'
            });

            await producer.send({
                id: uuid(),
                body: JSON.stringify(order)
            });
            console.log(`Delivered Order ${order.orderId}`)
            console.log('Sending Delivery Confirmation to Vendor')
        }, 3000)

    },
    pollingWaitTimeMs: 5000

});


app.start();
