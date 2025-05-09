// var braintree = require("braintree");
// require("dotenv").config();

// var gateway = new braintree.BraintreeGateway({
//   environment: braintree.Environment.Sandbox,
//   merchantId: process.env.BRAINTREE_MERCHANT_ID,
//   publicKey: process.env.BRAINTREE_PUBLIC_KEY,
//   privateKey: process.env.BRAINTREE_PRIVATE_KEY,
// });

// class brainTree {
//   ganerateToken(req, res) {
//     gateway.clientToken.generate({}, (err, response) => {
//       if (err) {
//         return res.json(err);
//       }
//       return res.json(response);
//     });
//   }
  //paymentProcess(req, res) {
   // let { amountTotal, paymentMethod} = req.body; 
   // gateway.transaction.sale(
    //  {
//         amount: amountTotal,
//         paymentMethodNonce: paymentMethod,
//         options: {
//           submitForSettlement: true,
//         },
//       },
//       (err, result) => {
//         if (err) {
//           console.error(err);
//           return res.json(err);
//         }

//         if (result.success) {
//           console.log("Transaction ID: " + result.transaction.id);
//           return res.json(result);
//         } else {
//           console.error(result.message);
//         }
//       }
//     );
//   }
//  }

// const brainTreeController = new brainTree();
// module.exports = brainTreeController;
// Bỏ phần khởi tạo Braintree gateway
var braintree = require("braintree");
require("dotenv").config();

class brainTree {
  // Bỏ hàm ganerateToken vì không cần token thanh toán nữa
  
  paymentProcess(req, res) {
    let { amountTotal } = req.body;
    // Chỉ cần trả về success để client tiếp tục xử lý order
    const result = {
      success: true,
      transaction: {
        id: 'ORDER_' + Date.now(),
        amount: amountTotal
      }
    };
    return res.json(result);
  }
}