

function extractData(inputData) {
  const { INProfileResponse } = inputData;
  const applicantDetails = INProfileResponse.Current_Application.Current_Application_Details.Current_Applicant_Details;
  const reportData = INProfileResponse.CAIS_Account.CAIS_Summary;
  const accountData = INProfileResponse.CAIS_Account.CAIS_Account_DETAILS;


  const basicDetails = {
    name: applicantDetails.First_Name + " " + applicantDetails.Last_Name,
    mobile: applicantDetails.MobilePhoneNumber,
    pan: accountData[0].CAIS_Holder_ID_Details.Income_TAX_PAN,
    creditScore: INProfileResponse.SCORE.BureauScore || "N/A",
  };

  

  const reportSummary = {
    totalAccounts: reportData.Credit_Account.CreditAccountTotal,
    activeAccounts: reportData.Credit_Account.CreditAccountActive,
    closedAccounts: reportData.Credit_Account.CreditAccountClosed,
    currentBalance:
      reportData.Total_Outstanding_Balance.Outstanding_Balance_All,
    securedAmount:
      reportData.Total_Outstanding_Balance.Outstanding_Balance_Secured,
    unsecuredAmount:
      reportData.Total_Outstanding_Balance.Outstanding_Balance_UnSecured,
    recentEnquiries:
      INProfileResponse.TotalCAPS_Summary.TotalCAPSLast7Days,
  };

  const creditAccountsInformation = accountData.map((account)=>{
    let addData = account.CAIS_Holder_Address_Details;
    const add = [
      addData.First_Line_Of_Address_non_normalized,
      addData.Second_Line_Of_Address_non_normalized,
      addData.Third_Line_Of_Address_non_normalized,
      addData.City_non_normalized,
      addData.Fifth_Line_Of_Address_non_normalized,
      addData.ZIP_Postal_Code_non_normalized,
      addData.CountryCode_non_normalized,
    ]
      .filter((item) => item)
      .join(", ");

    return {
      bank: account.Subscriber_Name,
      address: add,
      accountNumber: account.Account_Number,
      overdueAmount: account.Amount_Past_Due,
      currentBalance: account.Current_Balance,
    };
  });

  const obj = {
    basicDetails,
    reportSummary,
    creditAccountsInformation,
  };
  console.log("obj");
  console.log(obj);
  return obj
}

export default extractData;
