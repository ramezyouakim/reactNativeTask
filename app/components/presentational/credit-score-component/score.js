
/**
* Credit Score Presentational Component 
* This component is responsible for displaying
* Username, user profile picture,
* Lenme score and credit score details
*/

/**Import */
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../../../modules/styles';
import {
    View,
    Image,
    Text
} from 'react-native';
import colors from '../../../modules/colors';

/**
* Pass Props to a Stateless Functional Component
*/
ScoreComponent = (props) => {
    return (
        <View style={styles.scoreContainer}>
            <Text style={styles.scoreTitle}>{props.title}</Text>
            <View style={styles.rowSpaceBetween}>
                <Image
                    style={styles.scoreIcon}
                    source={props.icon}
                />
                <Text style={styles.scoreValue}>{props.score}</Text>
                <Icon name="info" size={17} color={colors.yellow} />
            </View>

        </View>
    );
};

/**Export */
export default ScoreComponent;