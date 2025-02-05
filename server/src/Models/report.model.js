const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  basicDetails: {
    name: String,
    mobile: String,
    pan: String,
    creditScore: Number,
  },
  reportSummary: {
    totalAccounts: Number,
    activeAccounts: Number,
    closedAccounts: Number,
    currentBalance: Number,
    securedAmount: Number,
    unsecuredAmount: Number,
    recentEnquiries: Number,
  },
  creditAccountsInformation: [
    {
      type: String, // 'Credit Card' or 'Loan'
      bank: String,
      address: String,
      accountNumber: String,
      overdueAmount: Number,
      currentBalance: Number,
    },
  ],
  timestamps: true,
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
