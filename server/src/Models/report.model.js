const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  basicDetails: {
    name: String,
    mobilePhone: String,
    pan: String,
    creditScore: Number,
  },
  reportSummary: {
    totalAccounts: Number,
    activeAccounts: Number,
    closedAccounts: Number,
    currentBalanceAmount: Number,
    securedAccountsAmount: Number,
    unsecuredAccountsAmount: Number,
    last7DaysCreditEnquiries: Number,
  },
  creditAccountsInformation: [
    {
      creditCard: String,
      bank: String,
      address: String,
      accountNumber: String,
      amountOverdue: Number,
      currentBalance: Number,
    },
  ],
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
