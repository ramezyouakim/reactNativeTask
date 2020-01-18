/*
*
* Loan Request Details Screen which has three main parts :-
*
* 1- Credit Score
* 2- Financial health
* 3- Offer information
*
*/

/**Import */
import React from 'react';
import CreditScoreComponent from '../../components/presentational/credit-score-component';
import FinancialHealthComponent from '../../components/presentational/financail-health-component';
import OfferInformationComponent from '../../components/presentational/offer-information';
import {
    SafeAreaView,
    ScrollView
} from 'react-native';

class LoanRequestDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: 'IO',
                profilePicture: require('../../assets/images/userPhoto.png')
            },
            FinancialHealth: [
                {
                    title: 'PAYMENT HISTORY',
                    detail: '1 yr 5 mos',
                    type: 'primary',
                    info: 'some info'
                },
                {
                    title: 'CREDIT UTILIZATION',
                    detail: '100%',
                    type: 'primary',
                    info: 'some info'
                },
                {
                    title: 'TOTAL ACCOUNTS',
                    detail: '2',
                    type: 'secondary',
                    info: 'some info'
                },
                {
                    title: 'TOTAL ACCOUNTS',
                    detail: '11%',
                    type: 'secondary',
                    info: 'some info'
                },
                {
                    title: 'ANNUAL INCOME',
                    detail: '$53,000/yr',
                    type: 'secondary',
                    info: 'some info'
                },
                {
                    title: 'DEROGATORY MARKS',
                    detail: '3',
                    type: 'secondary',
                    info: 'some info'
                }
            ],
            scoreDetails: [
                {
                    title: 'LENME SCORE',
                    icon: require('../../assets/images/lenme-score-logo.png'),
                    score: '73',
                    info: 'some info'
                },
                {
                    title: 'CREDIT SCORE',
                    icon: require('../../assets/images/credit-score-logo.png'),
                    score: '500 - 630',
                    info: 'some info'
                }
            ]
        };
    };

    render() {
        return (
            <>
                <SafeAreaView>
                    <ScrollView>
                        <CreditScoreComponent
                            profilePicture={this.state.user.profilePicture}
                            username={this.state.user.username}
                            scoreDetails={this.state.scoreDetails}
                        />
                        <FinancialHealthComponent
                            FinancialHealthDetails={this.state.FinancialHealth}
                        />
                        <OfferInformationComponent
                            investmentAmount={970}
                            paybackPeriod={1}
                        />
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    };
};

/**Export */
export default LoanRequestDetails;