let AWS = require("aws-sdk");

let dynamoConfig = {
    endpoint:        process.env.DYNAMODB_ENDPOINT,
    region:          process.env.AWS_REGION || "us-east-"
};

const docClient = new AWS.DynamoDB.DocumentClient(dynamoConfig);

const schema = {
    AttributeDefinitions: [{
        AttributeName: "profileId",
        AttributeType: "S"
    }],
    KeySchema: [{
        AttributeName: "profileId",
        KeyType: "HASH"
    }],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    },
    TableName: "profiles"
};

module.exports = {
    handlers: {
        getProfiles: getProfiles
    }
};

function getProfiles(limit, cursor) {
    return new Promise((resolve, reject) => {
        var params = {
            TableName: schema.TableName,
            AttributesToGet: [
                "profileId",
                "firstName",
                "lastName",
                "country",
                "city",
                "avatarImgUrl"
            ],
        };

        if(limit){
            params.Limit = limit;
        }

        if(cursor){
            params.ExclusiveStartKey = {
                "profileId": cursor
            };
        }

        docClient.scan(params, (err, data) => {
            if (err){
                console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
                reject(err);
            }

            resolve({
                lastCursor: (data && data.LastEvaluatedKey) ? data.LastEvaluatedKey.profileId : null,
                items: data && data.Items ? data.Items : []
            });
        });
    });
}
