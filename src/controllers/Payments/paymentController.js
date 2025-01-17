class PaymentController {
    constructor(suscriptionService) {
      this.suscriptionService = suscriptionService;
    }
  
    async getPaymentLink(req, res, prod) {
      try {
        const payment = await this.suscriptionService.createPayment(req, res, prod);
  
        return res.json(payment);
      } catch (error) {
        console.log(error);
  
        return res.status(500).json({ error: true, msg: "Failed to create payment" });
      }
    }
  }
  
  module.exports = PaymentController;