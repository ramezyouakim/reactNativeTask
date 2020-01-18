
/**
* Financial health Presentational Component 
* This component is responsible for displaying
* Financial health details
* Payment history, credit utilization, total accounts
* total accounts percentage, annual income, derogatory marks
*/

/**Import */
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../../modules/colors';
import styles from '../../../modules/styles';
import {
    View,
    Image,
    Text
} from 'react-native';

/**
* Pass Props to a Stateless Functional Component
*/
FinancialHealthComponent = (props) => {
    return (
        <View style={styles.FinancialHealthMainContainer}>
            {
                props.FinancialHealthDetails.map((item) =>
                    <View style={[styles.FinancialHealthCard, styles.shadowBox, { borderLeftColor: colors[item.type] }]}>
                        <View style={styles.rowSpaceBetween}>
                            <Text style={styles.scoreTitle}>{item.title}</Text>
                            <Icon name="info" size={17} color={colors.yellow} />
                        </View>
                        <Text style={styles.FinancialHealthCardSubText}>
                            {item.detail}
                        </Text>
                    </View>
                )
            }
        </View>
    );
};

/**Export */
export default FinancialHealthComponent;