module.exports = {
  notification: {
    risk: {
      title: "The system detects that your account is abnormal",
      message:
        "The system cannot be used temporarily, please remove the risk control according to the prompt",
      btn: "relieve",
    },
  },
  topBar: {
    name1: "EOTC website",
    name2: "Decentralized OTC exchanges",
    name3: "Decentralized coin exchange",
    name4: "Decentralized lending exchanges",
    name5: "Decentralized contract exchanges",
    name6: "On the chain to earn money",
    name7: "DID Decentralized identity system",
    name8: "Decentralized application systems",
    name9: "EOTC yuan universe",
  },
  home: {
    text1: "The team built around all EOTC's decentralization business",
    text2: "Allow any member to make decisions and participate in governance",
    btn: "create",
    title: "Latest proposal",
    more: "more",
    company: "ticket",
    tip: "The minimum threshold for submitting proposals is 10000 EOTC",
    copyright: "Copyright 2022 EOTC。",
    language: "English",
    status1: "In process",
    status2: "Failed",
    status3: "Passed",
    status4: "Terminated",
    not_data: "No proposal information yet",
    remove_risk: "Remove risk control",
  },
  user: {
    total: "Total revenue (EOTC)",
    detailed: "Income Details",
    parent: "on-line",
    text: "On line switch, the audit and arbitration case will assign you corresponding processing events/cases",
    proposal: "My proposal",
    work_order: "Work order system",
    destroy: "Destroy Query",
    risk: "Risk relief",
    arbitration: "arbitration",
    check: "to examine",
    feedback: "Feedback&Suggestions",
    menu: {},
  },
  becomeAnArbitrator: {
    title: "arbitrator",
    text1: "Become an arbitrator",
    title4: "Review the node",
    text2: "Maintain a secure, stable and trusted trading environment",
    text3: "Become an audit node",
    title2: "application requirement",
    list1: "DID authentication",
    right1: "De certification",
    list2: "Pledge over 5000 EOTC",
    right2: "To pledge",
    list3: "Learn arbitration rules",
    _list3: "Learn audit rules",
    right3: "To learn",
    list4text1: "pass the exam",
    list4text2: "Test scores exceed 90",
    right4: "To test",
    identifNumber: "Identity number",
    identityTtime: "time of application",
    arbitratorNum: "Number of arbitration",
    arbitratorRecovered: "Arbitration wins (one)",
    _processaudit: "Processing audit (one)",
    eotc: "Earnings (EOTC)",
    explain: "Test Explanation",
    ruls: "Pass at 90",
    titleNumber: "The title number",
    titleNumbertext1: "twelve",
    titleNumbertext2: "Royale",
    testTime: "The test time",
    testTimetext1: "thirty",
    titleNumbertext3: "ten",
    testTimetext2: "Minutes",
    start: "Starting to work",
    point: "minute",
    applyimmediately: "Apply immediately",
    relieve: "Deauthentication",
    know: "roger",
    message1: "Congratulations on passing the arbitration examination",
    message2: "I'm sorry I didn't pass the arbitration exam",
    _message1: "Congratulations on passing the Audit node exam",
    _message2: "I'm sorry I didn't pass the audit node exam",
    idcardtitle: "identity authentication",
    idcardmessage:
      "You have not been authenticated. Please go to DID for identity authentication",
    pledgetitle: "pledge",
    pledgemessage:
      "Pledge does not meet the conditions, please go to the OTC exchange for pledge",
    approved: "application approved",
    approvedmsg:
      "After becoming an arbitrator, the platform will assign you an arbitration case",
    _approvedmsg:
      "When you become an audit node, the platform assigns you an audit",
    approvedbText2: "alright",
    relievetitle3: "warm prompt",
    relievemsg:
      "The platform will not be assigned to handle arbitration cases after the removal of the identity, and the application for the identity of arbitrator needs to be re-studied and tested",
    _relievemsg:
      "After removing the identity, the platform will not assign any audit, and the application for the identity of the audit node needs to be studied and tested again",
    think: "Let me think",
    relievetitle4: "Remove prompt",
    relievemssg: "Discharge prompt to confirm discharge of arbitrator?",
    _relievemssg: "Are you sure to de-authenticate the node?",
  },
  learningRules: {
    rulstitle1: "basic rules",
    rulstitle2: "The point deduction rules",
    title1: "Understand the rules of study",
    rus1: " (one) The payment can not be noted to buy U, USDT, BTC, ETH and any other blockchain related information, otherwise it is judged to be evil transactions, play money will be frozen, pledge tokens are all forfeited, continuous deduction points.",
    rus2: "(two) Payment must be made using the account with the same name of DID, and arbitration DAO does not support arbitration with different names.",
    rus3: "(three) According to the credit score, the system defaults to release coins 24-48 hours after the payment is received. The seller releases coins in advance, and the loss caused by this is borne by itself.",
    rus4: "(four) The seller can initiate black money arbitration within 6 months after receiving the payment, and the proof of arbitration needs to prepare the freezing notice of the bank or the relevant unit.",
    rus5: "(five) Buyers to apply for payment arbitration, need to provide legal evidence of payment, the bank can save electronic receipts, wechat search bills, find transfer records, apply for electronic receipts.",
    rus6: "(six) No arbitration is required within 30 minutes of timeout, and the system automatically deducts points. Overtime of more than 60 minutes can apply for arbitration release of coins.",
    _rus1title: "(one) Non-malicious transactions fail",
    _rus1content1:
      " ① Users deducted 3 points; ② referees deducted 1 point; ③ nodes, referees for the upper 3 generations, and users for the lower 6 generations deducted 0.5 points (automatically adjusted according to the arbitration probability)",
    _rus2title: " (two) Timeout put COINS",
    _rus2content1:
      " ① 30-60 minutes overtime: ① user deduct 3 points ② referee deduct 1 point ③ node, 3 generations above the referee and 6 generations below the user deduct 0.5 points (automatically adjust the deduction points according to the arbitration probability)",
    _rus2content2:
      "① Over 60 minutes overtime: ① user loses 6 points for every 60 minutes overtime ② Referee loses 3 points for every 60 minutes overtime ③ Node, the previous 3 generations of the referee, and the next 6 generations of the user loses 1 point for every 6O minutes overtime (automatically adjust the deduction points according to the arbitration probability)",
    _rus3title: "(three) Trading for evil, money laundering",
    _rus3content1:
      "① The user deducts 120 points and freezes all pledged EOTc tokens. After proper processing, the user can apply for arbitration to unseal them, and arbitration can confiscate part or all of the tokens, and the confiscated tokens are sent into the black hole. ③ Node, three generations above the recommender and six generations below the user: six points will be deducted (the deduction will be automatically adjusted according to the arbitration probability)",
    btnmsg: "I have finished my study",
  },
  exam: {
    title: "Arbitration test",
    _title: "Review the test",
    quittitle: "Quit the test",
    quitmessage: "Are you sure you want to stop this exam",
    Text1: "confirm",
    Text2: "cancel",
    timeoverT: "End of examination time",
    timeoverMsg:
      "Unfortunately, the examination time has come to an end. Please take the examination again",
    blank: "Enter your answer in the horizontal line",
    next: "Next question",
    pre: "Previous question",
    submit: "submit",
    testQuestionData: [
      {
        id: 1,
        question: "Topic 1",
        questionContant:
          "Transaction, the buyer makes a note transaction relevant information will be judged?",
        topicType: "(single choice)",
        result: "",
        isTrue: false,
        questionAnswer: [
          {
            title: "A、",
            contant: "Evil trading",
            Check: false,
          },
          {
            title: "B、",
            contant: "money-laundering",
            Check: false,
          },
          {
            title: "C、",
            contant: "illegal transaction",
            Check: false,
          },
        ],
        Answers: 0,
      },
      {
        id: 2,
        question: "Topic 2",
        questionContant:
          "Based on the credit score, how many hours after the default payment is released?",
        topicType: "(single choice)",
        result: "",
        questionAnswer: [
          {
            title: "A、",
            contant: "12-24 hours",
            Check: false,
          },
          {
            title: "B、",
            contant: "24-48 hours",
            Check: false,
          },
          {
            title: "C、",
            contant: "36-48 hours",
            Check: false,
          },
        ],
        Answers: 1,
      },
      {
        id: 3,
        question: "Topic 3",
        questionContant:
          "Within what period can a seller initiate a black money arbitration?",
        topicType: "(single choice)",
        result: "",
        questionAnswer: [
          {
            title: "A、",
            contant: "Buyer after 12 months after payment",
            Check: false,
          },
          {
            title: "B、",
            contant: "3 months after the seller receives the payment",
            Check: false,
          },
          {
            title: "C、",
            contant: "Within 6 months after the seller receives the payment",
            Check: false,
          },
        ],
        Answers: 2,
      },
      {
        id: 4,
        question: "Topic 4",
        questionContant: "What will the buyer do to deal with the violation?",
        topicType: "(multiple choice)",
        result: [],
        questionAnswer: [
          {
            title: "A、",
            contant: "Decide to trade wickedly",
            Check: false,
          },
          {
            title: "B、",
            contant: "Blocking of outgoing funds",
            Check: false,
          },
          {
            title: "C、",
            contant: "All the pledged tokens shall be confiscated",
            Check: false,
          },
          {
            title: "D、",
            contant: "Sit down points",
            Check: false,
          },
        ],
        Answers: 3,
      },
      {
        id: 5,
        question: "Topic 5",
        questionContant:
          "Which of the following is valid evidence in arbitration?",
        topicType: "(multiple choice)",
        result: [],
        questionAnswer: [
          {
            title: "A、",
            contant: "Chat history of both parties",
            Check: false,
          },
          {
            title: "B、",
            contant: "Electronic bank statement",
            Check: false,
          },
          {
            title: "C、",
            contant: "Wechat Payment transfer electronic certificate",
            Check: false,
          },
          {
            title: "D、",
            contant: "Alipay electronic receipt",
            Check: false,
          },
        ],
        Answers: 3,
      },
      {
        id: 6,
        question: "Topic 6",
        questionContant:
          "Based on the credit score, the system defaults to 12-24 hours after the payment is received?",
        topicType: "(Judgmental question)",
        result: "",
        questionAnswer: [
          {
            title: "A、",
            contant: "yes",
            Check: false,
          },
          {
            title: "B、",
            contant: "wrong",
            Check: false,
          },
        ],
        Answers: 1,
      },
      {
        id: 7,
        question: "Topic 7",
        questionContant:
          "Do you need to use the same name account of DID to make money?",
        topicType: "(Judgmental question)",
        result: "",
        questionAnswer: [
          {
            title: "A、",
            contant: "yes",
            Check: false,
          },
          {
            title: "B、",
            contant: "wrong",
            Check: false,
          },
        ],
        Answers: 1,
      },
      {
        id: 8,
        question: "Topic 8",
        questionContant:
          "Arbitration DAO does not support arbitration for out-of-name payment?",
        topicType: "(Judgmental question)",
        result: "",
        questionAnswer: [
          {
            title: "A、",
            contant: "yes",
            Check: false,
          },
          {
            title: "B、",
            contant: "wrong",
            Check: false,
          },
        ],
        Answers: 0,
      },
      {
        id: 9,
        question: "Topic 9",
        questionContant: [
          "Timeout put COINS",
          "There is no need for arbitration, and the system automatically deducts points.",
        ],
        topicType: "(Completion)",
        result: "",
        Answers: "30 minutes",
      },
      {
        id: 10,
        question: "Topic 10",
        questionContant: [
          "After the system automatically deducts the points, the overtime is more than 60 minutes can apply",
        ],
        topicType: "(Completion)",
        result: "",
        Answers: "Arbitration put COINS",
      },
      {
        id: 11,
        question: "Topic 11",
        questionContant: [
          "The loss caused by the seller's early release of coins in a transaction",
          "undertake",
        ],
        topicType: "(Completion)",
        result: "",
        Answers: "voluntarily",
      },
      {
        id: 12,
        question: "Topic 12",
        questionContant: [
          "Buyer to apply for paid arbitration, need to provide with",
          "The payment voucher",
        ],
        topicType: "(Completion)",
        result: "",
        Answers: "force of law",
      },
    ],
    AuditTopic: [
      {
        id: 1,
        question: "Topic 1",
        questionContant: "Why does identity authentication deduct points?",
        topicType: "(single choice)",
        result: "",
        isTrue: false,
        questionAnswer: [
          {
            title: "A、",
            contant: "Fuzzy information",
            Check: false,
          },
          {
            title: "B、",
            contant: "Malicious submitted",
            Check: false,
          },
          {
            title: "C、",
            contant: "Other",
            Check: false,
          },
        ],
        Answers: 1,
      },
      {
        id: 2,
        question: "Topic 2",
        questionContant: "How many malicious submissions will disable the account?",
        topicType: "(single choice)",
        result: "",
        questionAnswer: [
          {
            title: "A、",
            contant: "three",
            Check: false,
          },
          {
            title: "B、",
            contant: "six",
            Check: false,
          },
          {
            title: "C、",
            contant: "nine",
            Check: "nine",
          },
        ],
        Answers: 0,
      },
      {
        id: 3,
        question: "Topic 3",
        questionContant: "In what way will the certification activities be carried out?",
        topicType: "(multiple choice)",
        result: [],
        questionAnswer: [
          {
            title: "A、",
            contant: "justice",
            Check: false,
          },
          {
            title: "B、",
            contant: "fair",
            Check: false,
          },
          {
            title: "C、",
            contant: "objective",
            Check: false,
          },
        ],
        Answers: 3,
      },
      {
        id: 4,
        question: "Topic 4",
        questionContant: "Authentication rules?",
        topicType: "(multiple choice)",
        result: [],
        questionAnswer: [
          {
            title: "A、",
            contant: "The border is not occluded",
            Check: false,
          },
          {
            title: "B、",
            contant: "The credentials should not be too small",
            Check: false,
          },
          {
            title: "C、",
            contant: "You can't be too vague",
            Check: false,
          }
        ],
        Answers: 3,
      },
      {
        id: 5,
        question: "Topic 5",
        questionContant: "The auditor must assume the auditee's proprietary information confidential obligation?",
        topicType: "(Judgmental question)",
        result: "",
        questionAnswer: [
          {
            title: "A、",
            contant: "right",
            Check: false,
          },
          {
            title: "B、",
            contant: "wrong",
            Check: false,
          },
        ],
        Answers: 0,
      },
      {
        id: 6,
        question: "Topic 6",
        questionContant: "'Just' is 'fair and upright, without partiality'?",
        topicType: "(Judgmental question)",
        result: "",
        questionAnswer: [
          {
            title: "A、",
            contant: "right",
            Check: false,
          },
          {
            title: "B、",
            contant: "wrong",
            Check: false,
          },
        ],
        Answers: 0,
      },
      {
        id: 7,
        question: "Topic 7",
        questionContant: ["Audit activities are conducted by", "accomplish"],
        topicType: "(Completion)",
        result: "",
        Answers: "auditor",
      },
      {
        id: 8,
        question: "Topic 8",
        questionContant: ["The auditor can not subjectively assume and speculate to draw conclusions, everything to", "speak"],
        topicType: "(Completion)",
        result: "",
        Answers: "evidence",
      },
      {
        id: 9,
        question: "Topic 9",
        questionContant: ['', "It is a requirement for the morality of the auditor."],
        topicType: "(Completion)",
        result: "",
        Answers: "honesty and integrity",
      },
      {
        id: 10,
        question: "Topic 10",
        questionContant: ["The auditor shall carefully use and protect the information obtained during the audit process", ' '],
        topicType: "(Completion)",
        result: "",
        Answers: "message",
      },
    ],
  },
  learningRules2: {
    rulstitle1: "basic rules",
    rulstitle2: "The point deduction rules",
    title1: "Learn about learning rules",
    rus1: " Audit is an important part of certification, and its core is to 'transfer trust'. Carrying out certification activities in a fair, just and objective way and treating certification related parties with a sincere attitude and standardized practice are the specific processes of transferring trust. The audit activity is done by the auditor.",
    rus2: "(1) Honesty and integrity are the requirements for the morality of auditors.",
    rus3: "(2) 'As an auditor, justice is a position issue, but also the most basic requirement, justice' is 'fair and upright, no partiality",
    rus4: "(3) The auditor should have identification and analysis ability to make correct judgments",
    rus5: "(4) The auditor shall prudently use and protect the information obtained during the audit process. In order to achieve the purpose of effective and necessary information required by the audit, the auditor must assume the obligation to keep confidential the proprietary information of the auditee during the audit process.",
    rus6: "(5)The auditor can not subjectively assume and speculate conclusions, all to speak with evidence.",
    rus7: "(6)Authentication ensures that the border of the ID card is not obscured, and that the document is not too small or fuzzy.",
    _rus1title: "(1) Authentication is submitted maliciously",
    _rus1content1:
      "① 3 points are deducted for those who pass the audit  ② The user submitted three malicious submissions to disable the account.",
    btnmsg: "I have finished my study",
  },
  Detailsofproposal: {
    propose: "suggest",
    schedule: "Voting schedule",
    inall1: "common",
    inall2: "People involved in",
    favorVotes: "affirmative vote",
    opposeVotes: "negative vote",
    ticket: "ticket",
    introduce1:
      "The proposal needs 99 votes to progress, and the author can terminate at any time",
    introduce2:
      "The proposal has been voted on by 99 people and the vote is complete",
    detail: "Details of the proposal",
    withal: "This proposal",
    vote: "vote",
    endorse: "endorse",
    oppose: "opposition",
    text: "Founded in",
    title: "particulars",
    message1: "Loading...",
    message2: "Load Fail！",
    cancle: "cancel",
    finish: "Voting ends",
    cancletitle: "Cancel the prompt",
    canclemessage: "Confirm cancellation of the proposal?",
    cancelsuccessful: "Cancel the success",
    launch: "Throw",
    votefor: "Proposal voting",
    votemessage:
      "Please select the type you want to vote for, and the current account must have 100 EOTC",
    know: "got it",
  },
  pending: {
    nav_title: "Work order system",
    status_one: "Pending",
    status2_two: "Processing",
    status3_three: "Processed",
    title_one: "BUG feedback",
    title_two: "Function suggestions",
    text: "submitter",
    btn_text: "To handle",
    btn_cancel: "Cancel processing",
    btn_once: "In progress",
    text_finish: "Processing completed",
    finished_text: "No more",
    empty_text: "No data",
    type_all: "whole",
    load_text: "The list is loading",
    dialog_title: "Cancel Prompt",
    dialog_message: "Are you sure you want to cancel processing this job?",
  },
  order: {
    nav_title: "Work Order Details",
    type: "type",
    type_value: "Function suggestions",
    type_value_feed: "BUG feedback",
    time: "Submission time",
    submitter: "submitter",
    information: "contact information",
    describe: "Problem description",
    processing: "Processing records",
    placeholder: "Work Order Processing Record",
    further: "Further processing",
    cancel: "Cancel processing",
    finish: "Processing completed",
    dialog_title: "Cancel Prompt",
    dialog_message: "Are you sure to cancel processing this order?",
    dialog_finish: "Processing completed",
    dialog_messfinish:
      "Please confirm that the work order problem has been solved, and click OK to finish",
  },
  destroy: {
    nav_title: "Destroy Query",
    placeholder: "Enter keyword query",
    text: "screen",
    site: "Destroy Query Address:",
    finished_text: "No more",
    description: "No data",
    screen: "Filter time",
    start: "Start time",
    end: "Deadline",
    btn_reset: "Reset",
    btn_confirm: "determine",
    calendar_text: "Date selection",
    tags_week: "This week",
    tags_month: "This month",
    tags_custom: "custom",
    success: "Copy succeeded",
    fail: "copy failed",
    message: "Loading",
    message_fail: "Loading failed!",
  },
  pneumatic: {
    nav_title: "risk management",
    btn_check: "Check identity information",
    btn_relieve: "Remove risk control",
    btn_already: "ID checked",
    btn_abnormal: "Abnormal identity verification",
    description: "No data",
    dialog_title: "ID verification succeeded",
    dialog_message: "After the risk control is released",
    dialog_know: "got it",
    message: "Loading",
    message_fail: "Loading failed!",
  },
  check: {
    nav_title: "Check identity information",
    name: "full name",
    phone: "phone number",
    card: "Certificate No",
    identity: "ID",
    card_photo: "ID Photo",
    collate: "Check records",
    collate_text:
      "(The other party actually holds the certificate photo and checks part of the process)",
    btn_abnormal: "Abnormal identity verification",
    btn_success: "Verification of identity succeeded",
    btn_remedy: "Remove Exception",
    btn_cancel: "Cancel Release",
    btn_make: "Confirm to dismiss",
    dialog_title: "Check information",
    dialog_message:
      "Please ensure that the video identity has been checked. The identity information is inconsistent, and it will be handled as an exception!",
    dialog_message_error:
      "Please ensure that the video identity has been checked and the identity information is correct!",
    dialog_message_remedy:
      "Please ensure that the video identity has been checked again, the identity information is correct, and the exception is removed",
    handle_success: "Processing succeeded",
  },
  personnel: {
    nav_title: "Publicity of arbitrators",
    finished_text: "No more",
    Application_time: "Application time",
    arbitrations: "Number of arbitrations",
  },
  arbitrate: {
    title1: "arbitration",
    title2: "Become an arbitrator",
    title3: "Identity of arbitrator",
    title4: "Publication of arbitrators",
    title5: "The arbitration case is made public",
    title6: "arbitration case",
    title7: "Arbitration message",
    dialogtitle: "hint",
    dialogmessage: "Has not yet become an arbitrator",
    dialogtext: "To apply for",
  },
  audit: {
    title1: "audit",
    title2: "Become an audit node",
    title3: "Audit Node identity",
    title4: "Authentication audit",
    title5: "Apply for community approval",
    title6: "Team member list application",
    dialogtitle: "hint",
    dialogmessage: "Has not yet become an audit node",
    dialogtext: "To apply for",
  },
  cApproval: {
    title: "Apply for community approval",
    nomore: "No more.",
    name: "Suburb",
    number: "Telephone No",
    email: "e-Mail",
    EOTCnum: "The pledge number",
    address: "Community address",
    hasOffice: "Is there an office",
    hasGroup: "Whether to build group of",
    referrer: "referrals",
    remark: "Back to reason",
    cancel: "turn down",
    ratify: "ratify",
    Nodata: "No data yet",
    cause: "Dismiss the reason",
    data: ["Approval Pending", "Approved", "reject"],
    load: "List loading...",
    Approvalprompt: "Approval prompt",
    Approvalmesg:
      "Please make sure that the information is correct and the application is approved?",
    failure: "operation failure",
    Dismiss: "Dismiss the prompt",
    Dismissmesg: "Do you decide to reject the application?",
  },
  Autionaudit: {
    title: "Authentication audit",
    phoneNum: "Phone number:",
    idCard: "ID number:",
    portraitImage: "Id card and hand-held ID photo",
    cancel: "repulse",
    ratify: "pass",
    arr: [
      "unreviewed",
      "Approved",
      "incomplete information",
      "wrong information",
      "Wrong ID photo",
      "ID photo is not clear",
    ],
  },
  Teammember: {
    title: "Team member list application",
    teanNum: "Number of team members",
    FailCause: ["No real name authentication", "other"],
    data: ["Pending", "Processed"],
    statusdata: [
      "Unapproved",
      "Approved",
      "No real name authentication",
      "other",
    ],
  },
  arbitrationcase: {
    Toprooftl: "Initiate new proof",
    Toproofterm:
      "One of the following conditions shall be met for initiating new evidence",
    Toproofterm1: "Insufficient evidence, unable to make a judgment",
    Toproofterm2: "Partial incomplete proof",
    Toproofexplain: "Description of Application for Re adducing Evidence",
    sumbit: "Submitting…",
    sub: "Submit",
    subfail: "Submit failed",
    subsuss: "Submitted successfully",
  },
  // 仲裁消息
  arbitrationMsg: {
    title1: "Progress of Arbitration Case",
    tags1: "apply for",
    tags2: "notify",
    tags3: "No data yet",
    tags4: "arbitration case",
    tags5: "plaintiff",
    tags6: "seller",
    tags7: "ticket",
    tags8: "defendant",
    tags9: "purchaser",
    tags10: "The account is frozen",
    tags11: "The seller has not confirmed the payment",
    tags12: "rests",
    tags13: "Details of the arbitration",
    tags14: "arbitration result",
    tags15: "A total of",
    tags16:
      "arbitrators participated in the arbitration event. Through the submission of evidence by both sides, ",
    tags17: "arbitrators judged the defendant",
    tags18: "details",
    tags19: "applicant",
    tags20: "reason for applying",
    tags21: "Instructions for Application for Extension of Time",
    tags22: "Application for extension of time",
    tags23: "day",
    tags24: "disagree",
    tags25: "agree",
    tags26: "reason of cancellation",
    tags27: "The plaintiff proof",
    tags28: "The defendant proof",
    tags29: "Additional proof",
    tags30: "initiator",
    tags31: "serial number",
    tags32: "reason for applying",
    tags33: "Instructions for Application for Extension of Time",
    tags34: "explain",
    tags35:
      "This arbitration case has been concluded. If you have any objection, you may apply for further arbitration within 7 days after the conclusion of the case",
    data1: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    data2: "application for adjournment",
    data3: "Additional proof",
    data4: "Initiate a new proof",
    data5: "Cancellation of the arbitration",
    data6: "Final notice",
  },
  publicity: {
    nav_title: "Publication of arbitration case",
    nav_detail: "Details of arbitration case",
    plaintiff: "plaintiff",
    defendant: "defendant",
    seller: "(Seller)",
    Buyer: "(Buyer)",
    ticket: "ticket",
    result: "Arbitration result",
    participate: "Total arbitrators participating in the arbitration judgment",
    evidence: "People, through proof submitted by both parties,",
    determine: "The arbitrators decided that the plaintiff",
    launch: "The seller initiates arbitration, and the arbitration event is",
    Closing_time: "Closing time",
    judgment: "Public judgment",
    no_vote: "No vote",
    name: "full name",
    phone: "cell-phone number",
    card: "Certificate No",
    identity: "ID",
    card_photo: "ID card photo",
    detail: "details",
    no_data: "No data",
    message: "Loading",
    message_fild: "Loading failed!",
  },
  case: {
    nav_title: "arbitration case",
    nav_detail: "Details of arbitration case",
    order_title: "Order Details",
    cancel: "Arbitration cancelled",
    sentence: "Failure to submit judgment upon timeout",
    Adduce_evidence: "Both parties are adducing evidence",
    Win_lawsuit: "Win the lawsuit",
    Lose_lawsuit: "Lose a lawsuit",
    plaintiff: "plaintiff",
    defendant: "defendant",
    seller: "(Seller)",
    Buyer: "(Buyer)",
    ticket: "ticket",
    launch:
      "The plaintiff seller initiated arbitration, and the arbitration event was",
    description: "Details of arbitration",
    result: "Arbitration result",
    participate: "Total arbitrators participating in the arbitration judgment",
    evidence: "People, through proof submitted by both parties,",
    determine: "The arbitrators decided that the plaintiff",
    determine_win: "Five arbitrators awarded the plaintiff",
    determine_be: "Five arbitrators decided that the defendant",
    detail: "details",
    again: "Re adduce evidence",
    Originating_time: "Arbitration initiation time",
    go_sentence: "Go to judgment",
    no_data: "No data",
    To_arbitrated: "To be arbitrated",
    Arbitrated: "Arbitrated",
    message: "The list is loading",
    seller_launch:
      "The seller initiates arbitration, and the arbitration event is",
    Closing_time: "Closing time",
    plaintiff_evidence: "The plaintiff adduced evidence",
    defendant_evidence: "The defendant adduces evidence",
    order_number: "order number",
    transaction: "Transaction quantity",
    price: "Transaction unit price",
    Total_price: "Total transaction price",
    transaction_time: "Transaction time",
    information: "Payment information",
    name: "full name",
    Li_Mu: "Li Mu",
    Bank_deposit: "Bank of deposit",
    Commercial_Bank: "Industrial and Commercial Bank of China",
    Bank_No: "Bank card No",
    public_judgment: "Formula judgement",
    plaintiff_win: "Plaintiff wins",
    defendant_win: "The defendant wins",
    reason: "The plaintiff won the arbitration case",
    ment_reasons: "Judgment reasons",
    explain: "Explanation of judgment",
    according:
      "According to the submitted voucher, the plaintiff in the current arbitration case wins",
    confirm: "I have confirmed the resolution",
    security: "Maintain a safe, stable and trusted trading environment",
    describe: "Please describe the description of the decision",
    think: "I'll think about it again",
    submitting: "Submitting",
    true: "determine",
    message_in: "Loading",
    massage_fail: "Loading failed!",
    exceed: "The voting time has expired",
    become: "Successful judgment",
    fail: "Failure of judgment",
  },
  relieve: {
    nav_title: "Remove risk control",
    notice_text:
      "Remove the risk control In order to use the account normally, please check the video identity with the following five contacts in time (the removal of three or more contacts will take effect)",
    custom_title: "Release risk control contact",
    contacts: "contacts",
    phone: "phone number",
    description: "No data",
    cancel_text: "cancel",
    call: "call",
    copy: "Copy number",
  },
  feedback: {
    nav_title: "Feedback&Suggestions",
    type: "Category label",
    describe: "Description of feedback and suggestions",
    add_photo: "Add picture",
    relation: "contact information",
    type_feed: "BUG feedback",
    type_function: "Function suggestions",
    placeholder:
      "Please explain in detail so that we can solve the problem for you",
    custom_msg: "(Optional, add question screenshot)",
    placeholder_phone: "Please enter your mobile number",
    phone_message: "The entered mobile number is incorrect!",
    submit: "Submit",
    file_text: "File size cannot exceed 500kb",
    submit_text: "Submitted successfully",
  },
  detail: {
    nav_title: "Revenue Details",
    num: "Amount of revenue",
    earnings: "Source of income",
    time: "Income time",
    type_zoer: "Process work order",
    type_one: "Handling arbitration",
    type_two: "Process Audit",
    finished_text: "No more records",
    description: "No data",
    load_text: "The list is loading",
  },
  proposal: {
    nav_title: "My proposal",
    nav_title_one: "proposal",
    ticket: "ticket",
    state_zoer: "have in hand",
    state_one: "Failed",
    state_two: "Passed",
    state_three: "Terminated",
    description: "No data",
    create: "Create Proposal",
    message: "Loading",
    massage_fail: "Load failed",
  },
  create: {
    nav_title: "Create Proposal",
    title: "Proposal Title",
    placeholder: "Please enter a proposal title",
    overview: "Proposal Overview",
    describe: "Describe your proposal",
    btn_text: "You must hold 10000EOTC to submit a proposal",
    btn_submit: "Submit proposal",
    success: "Submitted successfully!",
  },
  reject: {
    tags1: "type",
    tags2:
      "The malicious user and the passing recommender node will be deducted the corresponding credit score",
    tags3: "specific reason",
    tags4: "Please enter the specific reason",
    data: [
      "incomplete information",
      "wrong information",
      "The ID photo is wrong",
      "The ID photo is not clear",
    ],
  },
  public: {
    cancel: "cancel",
    confirm: "confirm",
  },
};
