const { TONClient } = require('ton-client-node-js');
const client = new TONClient();
client.config.setData({ servers: ['https://net.ton.dev'] });

async function convertAddress(inputAddress) {
    try {
        const result = await client.utils.convert_address({
            address: inputAddress,
            output_format: {
                type: 'AccountID'
            }
        });
        console.log('Converted Address:', result.address);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Замените строку ниже на ваш адрес
convertAddress("UQDvwxW0HJu8FlW_QLqE_foZbm5LwntHJ_OSeB0GKDN0lkP4");