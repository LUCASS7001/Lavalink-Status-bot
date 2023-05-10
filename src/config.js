module.exports = {
  token: process.env.token || "", // Your bot token
  channelId: process.env.channelId || "", //Channel Id you want to send the message

  nodes: [
    {
      host: "", //your host
      password: "", //youe password
      port: 80, // your part 
      retryDelay: 300000,
      retryAmount: 25,
      identifier: "", //your host
      secure: false, 
    }
  ],
};
