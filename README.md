# LAB - Class 19

## Caps Cloud

A real-time service that allows for vendors, such as flower shops or restaurants, to alert a system of a package needing to be delivered, for drivers to instantly see what’s in their pickup queue, and then to alert the vendors as to the state of the deliveries (in transit, and then delivered).

### Jarrell Houston

### Links and Resources

- [Pull Request](https://github.com/Jarrell28/serverless-api/pull/1)

### Setup

1. Requires setup of AWS SNS and AWS SQS 

     AWS SNS - Create a standard SNS for the vendors to publish notifications to drivers

     AWS SQS - Create a standard SQS for packages to be queued and drivers to pickup

     AWS SQS - Create a standard SQS per vendor to receive delivery confirmations from drivers

2. Replace the AWS SQS/SNS arns and urls appropriately in vendor.js and driver.js

 **Initialize Application**

```node vendor.js```

```node driver.js```


#### UML / Application Wiring Diagram

![image](https://user-images.githubusercontent.com/33704616/118372444-42b7a780-b577-11eb-9435-4a12b478fb2d.png)
