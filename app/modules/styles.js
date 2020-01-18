
/**
* Style Sheet File
*/

/**Import */
import { StyleSheet } from 'react-native';
import colors from '../modules/colors'

const styles = StyleSheet.create({
    creditScoreMainContainer: {
        flexDirection: 'row',
        padding: 25
    },
    creditScoreDetailsContainer: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 20,
        marginRight: 10
    },
    scoreContainer: {
        flexDirection: 'column',
        alignContent: 'center',
        marginRight: 30
    },
    rowSpaceBetween: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    scoreIcon: {
        height: 15,
        width: 15,
        resizeMode: 'contain'
    },
    userProfilePicture: {
        height: 90,
        width: 90,
        borderColor: colors.blue,
        borderWidth: 7,
        borderRadius: 100,
        marginTop: 15,
        marginBottom: 10
    },
    username: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    scoreTitle: {
        fontSize: 12,
        color: colors.gray
    },
    scoreValue: {
        fontSize: 18,
        marginLeft: 7,
        marginRight: 7
    },
    FinancialHealthCard: {
        width: '45%',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        backgroundColor: colors.white,
        margin: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 7,
        paddingLeft: 10,
        borderRadius: 3,
        borderLeftWidth: 4
    },
    FinancialHealthCardSubText: {
        marginTop: 5,
        fontSize: 20
    },
    FinancialHealthMainContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 20,
        marginTop: 10
    },
    shadowBox: {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    OfferInformationMainContainer:{
        backgroundColor:colors.white,
        flexDirection:'column',
        marginTop: 25
    },
    OfferInformationItem:{
        marginLeft:30
    },  
    OfferInfoItemTitle:{
        color:colors.purple,
        fontSize:13
    },
    OfferInfoItemDetail:{
        flexDirection:'row',
        marginTop:10
    },
    OfferInformationItemDetailNumber:{
        fontSize:23,  
    },
    OfferInformationItemDetailSymbol:{
        marginTop:4,
        marginRight:5,
        fontSize:13
    },
    OfferInfoRow:{
        flexDirection:'row',
        paddingTop:20
    },
    Btn:{
        marginTop:15,
        borderRadius:5,
        borderColor:colors.gray,
        borderWidth:0.5
    },
    buttonText:{
        color:colors.white,
        fontWeight:'bold',
        textAlign:'center',
        padding:15
    },
    annualContainer:{
        margin:30
    },
    thumb:{
        borderColor:colors.gray,
        borderWidth:0.5
    },
    silder:{
        marginTop:20,
        marginBottom:30
    }
});

/**Export */
export default styles;