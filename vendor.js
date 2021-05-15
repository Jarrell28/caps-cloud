'use strict';

const AWS = require('aws-sdk');
const faker = require('faker');
const { Consumer } = require('sqs-consumer');
AWS.config.update({ region: 'us-east-2' });

const sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-east-2:126385538192:pickup';
const vendorId = 'https://sqs.us-east-2.amazonaws.com/126385538192/vendor1';

setInterval(() => {

    const order = JSON.stringify({
        orderId: faker.datatype.uuid(),
        customer: faker.name.findName(),
        address: faker.address.streetAddress(),
        vendorId
    })

    const payload = {
        Message: order,
        TopicArn: topic,
    };

    sns.publish(payload).promise()
        .then(data => {
            console.log("Sent Pickup Order");
        })
        .catch(console.error);
}, 5000);


const app = Consumer.create({
    queueUrl: vendorId,
    handleMessage: async (message) => {
        console.log("Order Delivered:", message.Body);
    },
    pollingWaitTimeMs: 3000
});

app.start();
