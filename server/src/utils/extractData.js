function extractData(xmlData) {
  // TODO: Implement this function
  // Extract data from XML and return an object
  // This is a placeholder function
  return {
    basicDetails: {
      name: xmlData.basicDetails.name[0],
      mobilePhone: xmlData.basicDetails.mobilePhone[0],
      pan: xmlData.basicDetails.pan[0],
      creditScore: parseInt(xmlData.basicDetails.creditScore[0]),
    },
    reportSummary: {
      totalAccounts: parseInt(xmlData.reportSummary.totalAccounts[0]),
      activeAccounts: parseInt(xmlData.reportSummary.activeAccounts[0]),
      closedAccounts: parseInt(xmlData.reportSummary.closedAccounts[0]),
      currentBalanceAmount: parseInt(
        xmlData.reportSummary.currentBalanceAmount[0]
      ),
      securedAccountsAmount: parseInt(
        xmlData.reportSummary.securedAccountsAmount[0]
      ),
      unsecuredAccountsAmount: parseInt(
        xmlData.reportSummary.unsecuredAccountsAmount[0]
      ),
      last7DaysCreditEnquiries: parseInt(
        xmlData.reportSummary.last7DaysCreditEnquiries[0]
      ),
    },
    creditAccountsInformation: xmlData.creditAccountsInformation.map(
      (account) => ({
        creditCard: account.creditCard[0],
        bank: account.bank[0],
        address: account.address[0],
        accountNumber: account.accountNumber[0],
        amountOverdue: parseInt(account.amountOverdue[0]),
        currentBalance: parseInt(account.currentBalance[0]),
      })
    ),
  };
}

export default extractData;