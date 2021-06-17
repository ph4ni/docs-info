(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{369:function(e,t,a){"use strict";a.r(t);var r=a(45),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"risks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#risks"}},[e._v("#")]),e._v(" Risks")]),e._v(" "),a("p",[a("strong",[e._v("Capital Allocation Risks")])]),e._v(" "),a("p",[e._v("When investing in anything, there are risks, and for investing in Rari Capital, there are a few sources of risk with varying levels of severity: underlying risk, the “lego” risk of our integrated protocols, customer side risk, and risk within the Rari product.")]),e._v(" "),a("p",[e._v("https://www.notion.so/rari/Capital-Allocation-Risks-f4bccf324a594f46b849e6358e0a2464#296741f6d91a463fa51430248666d563")]),e._v(" "),a("h3",{attrs:{id:"underlying-risk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#underlying-risk"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Underlying Risk")])]),e._v(" "),a("p",[e._v("The Ethereum Virtual Machine, or EVM, is what powers everything on the Ethereum blockchain. As Rari is currently on the said blockchain, it has an innate risk tied to the EVM. If the EVM fails or breaks, Rari will break. However, this is extremely unlikely as such a bug could devastate the entire Ethereum ecosystem.")]),e._v(" "),a("h3",{attrs:{id:"integrated-protocols"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integrated-protocols"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Integrated Protocols")])]),e._v(" "),a("p",[e._v("Since Rari has several protocols (currently including 0x, dYdX, and Compound) integrated to maximize profits, we carry the “lego” risk of these protocols. For example, an integrated protocol could lose our funds from a bug or hack; however, along with the failure of the EVM, this is one of the more severe and unlikely risks. There are varying levels of severity with this as well, as an integrated lending protocol may fail to generate interest despite appearing as the ideal protocol, but wouldn’t result in the loss of consumer funds.")]),e._v(" "),a("h3",{attrs:{id:"customer-side"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customer-side"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Customer Side")])]),e._v(" "),a("p",[e._v("In terms of consumer side risk, there is always the possibility of a bug or hack of a user’s browser or OS which could cause a loss of funds, or, more mildly, it may temporarily break withdrawals.")]),e._v(" "),a("h3",{attrs:{id:"rari-capital-yield-aggregator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rari-capital-yield-aggregator"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Rari Capital Yield Aggregator")])]),e._v(" "),a("p",[e._v("There are 3 sources of risk within the product itself: the frontend, the rebalancer, and the smart contracts.")]),e._v(" "),a("h3",{attrs:{id:"frontend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontend"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Frontend")])]),e._v(" "),a("p",[e._v("In the frontend, breaches and bugs can occur either in code, domain, or hosting, with the most extreme cases involving a loss of customer funds, but lesser incidents resulting in withdrawals temporarily breaking, without a loss of funds.")]),e._v(" "),a("h3",{attrs:{id:"rebalancer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebalancer"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Rebalancer")])]),e._v(" "),a("p",[e._v("The rebalancer has a risk of a bug or hack of code/hosting or general theft of a balancer’s private key that could cause stablecoins to be traded via 0x at poor prices. However, the more moderate situations would be if a bug caused funds to be allocated incorrectly.")]),e._v(" "),a("h3",{attrs:{id:"contracts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contracts"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Contracts")])]),e._v(" "),a("p",[e._v("The risk for our contracts lies in the possibility of a standard bug or hack of our Solidity code as well as the possibility of a hacker compromising 2 of the 3 keys in the Rari multisig federation and “upgrading” a contract to code that steals customer funds. A smaller source of risk is the use of the “experimental” feature of Solidity ABIEncoderv2 where we are using Solidity version 0.5.7. The known bugs are fixed and the feature is used widely, but it is still technically “experimental.”")]),e._v(" "),a("h3",{attrs:{id:"divergence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#divergence"}},[e._v("#")]),e._v(" Divergence")]),e._v(" "),a("p",[e._v("In our "),a("strong",[e._v("yield pool")]),e._v(", there is divergence risk, which occurs when the pool's stablecoins move from their peg (this occurs more often and at higher severity with synthetic assets, such as DAI and sUSD but still happens with centralized coins like USDC and USDT). These assets can either rise or fall in price relative to USD, leading to very small increases and decreases in the total pool dollar amount locked. During these events, user balances experience slight fluctuations, both positive and negative, and have the opportunity to see small losses during the negative fluctuations, as the total price of the assets in the pool has dropped.")]),e._v(" "),a("p",[e._v("To counter this, it is advised to not deposit and withdraw in quick succession, as you are more at risk to see divergence, whereas long-term deposits will notice negligible differences, as returns will outweigh any possible price fluctuations.")]),e._v(" "),a("p",[a("strong",[e._v("Learn more here:")]),e._v(" https://medium.com/rari-capital/raris-divergence-risk-12ec11609af7")]),e._v(" "),a("h3",{attrs:{id:"rari-capital-yield-aggregator-strategy-assessment-framework"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rari-capital-yield-aggregator-strategy-assessment-framework"}},[e._v("#")]),e._v(" **Rari Capital Yield Aggregator Strategy Assessment Framework **")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("To admit new strategies and protocols into the Rari Capital pools, such as the stable pool and yield pool, each strategy must be evaluated for risk. This evaluation occurs to help determine which pool a specific strategy belongs in and if the strategy is suitable for the protocol.  To conduct this analysis, we have created a strategy assessment framework to compare strategy risks at a glance, while offering a structure to facilitate thorough appraisal.")]),e._v(" "),a("p",[e._v("First, there are brackets for strategies to be sorted into. Currently, a strategy can fall into the lending, yield farming, or automated market maker categories. It is worth noting that as DeFi evolves, this framework will adapt and establish new categories for newly innovated strategies. Furthermore, within each category, there is a specific risk framework catered to each strategy style, which is combined to synthesize an overall strategy score.")]),e._v(" "),a("p",[e._v("Strategy risk scores can then be presented to the community in governance proposals to add new strategies to the Rari Protocol.")]),e._v(" "),a("p",[e._v("We will be publishing a public form for community members to conduct their own checks on strategies in the future. Shown below is a brief outline of the covered areas, inspired by "),a("a",{attrs:{href:"https://defiscore.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("DeFi Score's"),a("OutboundLink")],1),e._v(" metrics.")]),e._v(" "),a("h2",{attrs:{id:"lending"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lending"}},[e._v("#")]),e._v(" Lending")]),e._v(" "),a("p",[e._v("This is the risk assessment framework for lending strategies. Each section has a designated score allocation and the overall score is calculated from their distributions.")]),e._v(" "),a("h3",{attrs:{id:"smart-contract-risk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smart-contract-risk"}},[e._v("#")]),e._v(" Smart Contract Risk")]),e._v(" "),a("ul",[a("li",[e._v("Audit")]),e._v(" "),a("li",[e._v("Bug Bounty")]),e._v(" "),a("li",[e._v("Contract History")])]),e._v(" "),a("h3",{attrs:{id:"financial-risk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#financial-risk"}},[e._v("#")]),e._v(" Financial Risk")]),e._v(" "),a("ul",[a("li",[e._v("Collateral Ratio")]),e._v(" "),a("li",[e._v("Liquidity")]),e._v(" "),a("li",[e._v("Asset Risk")])]),e._v(" "),a("h3",{attrs:{id:"centralization-risk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centralization-risk"}},[e._v("#")]),e._v(" Centralization Risk")]),e._v(" "),a("ul",[a("li",[e._v("Protocol Administration")]),e._v(" "),a("li",[e._v("Oracles")]),e._v(" "),a("li",[e._v("Team Background")])]),e._v(" "),a("h2",{attrs:{id:"yield-aggregating"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yield-aggregating"}},[e._v("#")]),e._v(" Yield Aggregating")]),e._v(" "),a("p",[e._v("This is the risk assessment framework for yield aggregating strategies. Each section has a designated score allocation and the overall score is calculated from their distributions.")]),e._v(" "),a("h3",{attrs:{id:"smart-contract-risk-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smart-contract-risk-2"}},[e._v("#")]),e._v(" Smart Contract Risk")]),e._v(" "),a("ul",[a("li",[e._v("Audit")]),e._v(" "),a("li",[e._v("Bug Bounty")]),e._v(" "),a("li",[e._v("Contract History")])]),e._v(" "),a("h3",{attrs:{id:"financial-risk-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#financial-risk-2"}},[e._v("#")]),e._v(" Financial Risk")]),e._v(" "),a("ul",[a("li",[e._v("Liquidity")]),e._v(" "),a("li",[e._v("Asset Risk")])]),e._v(" "),a("h3",{attrs:{id:"centralization-risk-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centralization-risk-2"}},[e._v("#")]),e._v(" Centralization Risk")]),e._v(" "),a("ul",[a("li",[e._v("Protocol Administration")]),e._v(" "),a("li",[e._v("Team Background")])]),e._v(" "),a("h3",{attrs:{id:"lego-risk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lego-risk"}},[e._v("#")]),e._v(" Lego Risk")]),e._v(" "),a("ul",[a("li",[e._v("Unique Alpha vs. Integrations")])]),e._v(" "),a("h2",{attrs:{id:"automated-market-making"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automated-market-making"}},[e._v("#")]),e._v(" Automated Market Making")]),e._v(" "),a("p",[e._v("This is the risk assessment framework for AMM strategies. Each section has a designated score allocation and the overall score is calculated from their distributions.")]),e._v(" "),a("h3",{attrs:{id:"smart-contract-risk-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smart-contract-risk-3"}},[e._v("#")]),e._v(" Smart Contract Risk")]),e._v(" "),a("ul",[a("li",[e._v("Audit")]),e._v(" "),a("li",[e._v("Bug Bounty")]),e._v(" "),a("li",[e._v("Contract History")])]),e._v(" "),a("h3",{attrs:{id:"financial-risk-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#financial-risk-3"}},[e._v("#")]),e._v(" Financial Risk")]),e._v(" "),a("ul",[a("li",[e._v("Liquidity")]),e._v(" "),a("li",[e._v("Impermanent Loss")]),e._v(" "),a("li",[e._v("Asset Risk")])]),e._v(" "),a("h3",{attrs:{id:"centralization-risk-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centralization-risk-3"}},[e._v("#")]),e._v(" Centralization Risk")]),e._v(" "),a("ul",[a("li",[e._v("Protocol Administration")]),e._v(" "),a("li",[e._v("Team Background")])])])}),[],!1,null,null,null);t.default=s.exports}}]);