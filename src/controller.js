const https = require("https");

const payStack = {
  acceptPayment: async (req, res) => {
    //request body from the clients
    console.log("req: ", req);
    const email = req.body.email;

    const params = JSON.stringify({
      email: email,
      amount: 7000 * 100,
    });
    console.log("params: ", params);

    const options = {
      hostname: "api.paystack.co",
      port: 443,
      path: "/transaction/initialize",
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
    };

    const reqPaystack = https
      .request(options, (resPaystack) => {
        let data = "";

        resPaystack.on("data", (chunk) => {
          data += chunk;
        });

        resPaystack.on("end", () => {
          console.log(JSON.parse(data));
          res.send(data).status(200);
        });
      })
      .on("error", (error) => {
        console.error(error);
      });

    reqPaystack.write(params);
    reqPaystack.end();
  },

  mfoh: async (req, res) => {
    res.send("Welcome to MFOH! I am healthy!").status(200);
  },
};

const initializePayment = payStack;
module.exports = initializePayment;
