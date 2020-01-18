
/**
* Credit Score Presentational Component 
* This component is responsible for displaying
* Username, user profile picture,
* Lenme score and credit score details
*/

/**Import */
import React from 'react';
import styles from '../../../modules/styles';
import ScoreComponent from './score'
import {
    View,
    Image,
    Text
} from 'react-native';

/**
* Pass Props to a Stateless Functional Component
*/
CreditScoreComponent = (props) => {
    return (
        <View style={styles.creditScoreMainContainer}>
            <Image
                style={styles.userProfilePicture}
                source={props.profilePicture}
            />
            <View style={styles.creditScoreDetailsContainer}>
                <Text style={styles.username}>{props.username}</Text>
                <View style={[styles.rowSpaceBetween,
                { justifyContent: 'flex-start' }]}>
                    {
                        props.scoreDetails.map((item) =>
                            <ScoreComponent
                                title={item.title}
                                icon={item.icon}
                                score={item.score}
                                info={item.info}
                            />
                        )
                    }
                </View>
                <Text style={[styles.scoreTitle, { fontSize: 10 }]}>
                    Vantage Score 4.0
                </Text>
            </View>
        </View>
    );
};

/**Export */
export default CreditScoreComponent;