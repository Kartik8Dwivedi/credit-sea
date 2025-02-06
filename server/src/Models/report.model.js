import mongoose from "mongoose";

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
      bank: String,
      address: String,
      accountNumber: String,
      overdueAmount: Number,
      currentBalance: Number,
    },
  ],
},{timestamps: true});

const Report = mongoose.model("Report", reportSchema);

export default Report;
