// dependencies
var shell = require('shelljs');

// screen objects
import FacebookScreen from '../screenobjects/facebook.screen';
import GiftCardScreen from '../screenobjects/gift.card.screen';
import HistoryOpenOrderScreen from '../screenobjects/history.open.order.screen';
import HistoryReceiptScreen from '../screenobjects/history.receipt.screen';
import HistoryScreen from '../screenobjects/history.screen';
import HomeScreen from '../screenobjects/home.screen';
import InstagramScreen from '../screenobjects/instagram.screen';
import LandingScreen from '../screenobjects/landing.screen';
import LocationDetailsScreen from '../screenobjects/location.details.screen';
import LocationsMapScreen from '../screenobjects/location.map.screen';
import LocationsScreen from '../screenobjects/locations.screen';
import LoginScreen from '../screenobjects/login.screen';
import Menu from '../screenobjects/components/menu';
import OrderItemScreen from '../screenobjects/order.item.screen';
import OrderMenuScreen from '../screenobjects/order.menu.screen';
import OrderReviewScreen from '../screenobjects/order.review.screen';
import OrderScreen from '../screenobjects/order.screen';
import OrderSubmittedScreen from '../screenobjects/order.submitted.screen';
import PINScreen from '../screenobjects/pin.screen';
import ProfileCardAddScreen from '../screenobjects/profile.card.add.screen';
import ProfileCardManageScreen from '../screenobjects/profile.card.manage.screen';
import ProfileCardPreferencesScreen from '../screenobjects/profile.card.preferences.screen';
import ProfileScreen from '../screenobjects/profile.screen';
import RegistrationAccountInfoScreen from '../screenobjects/registration.account.info.screen';
import RegistrationGiftCardScreen from '../screenobjects/registration.gift.card.screen';
import RegistrationLinkCardScreen from '../screenobjects/registration.link.card.screen';
import RegistrationMigratePointsScreen from '../screenobjects/registration.migrate.points.screen';
import RegistrationOptionalInfoScreen from '../screenobjects/registration.optional.info.screen';
import RegistrationPurposeScreen from '../screenobjects/registration.purpose.screen';
import RewardsRewardsScreen from '../screenobjects/rewards.rewards.screen';
import RewardsScreen from '../screenobjects/rewards.screen';
import RewardsStatusScreen from '../screenobjects/rewards.status.screen';
import SubscriptionsScreen from '../screenobjects/subscriptions.screen';
import SupportScreen from '../screenobjects/support.screen';
import TutorialScreen from '../screenobjects/tutorial.screen';
import TwitterScreen from '../screenobjects/twitter.screen';
// data stuff
const User = require('../lib/classes/User');
let user;

describe('When logging in with existing account,', () => {
  it('should successfully run end to end', () => {
    /**
     * Fresh user, fresh app
     * 
     * User generates new card for itself. 
     */
    user = new User;
    driver.launchApp();

    /**
     * Register new user to have clean history
     */
    TutorialScreen.skip();
    LandingScreen.clickSignInButton();
    LoginScreen.useEmail(user.email);
    RegistrationAccountInfoScreen.register(user);

    /**
     * Skip anything in registration as we will do it after reg
     */
    RegistrationLinkCardScreen.skip({button: false});
    RegistrationPurposeScreen.skip({button: true});
    RegistrationOptionalInfoScreen.skip();
    RegistrationGiftCardScreen.skip();
    RegistrationMigratePointsScreen.skip();

    /**
     * Handle the annoying location services alert
     */
    HomeScreen.handleLocationAlert();

    /**
     * Add a new card set to pay when used
     */
    Menu.openCards({returning: false});
    ProfileCardManageScreen.clickAddCardButton({button: false});
    ProfileCardAddScreen.addCard({card: user.cards[0]});
    ProfileCardPreferencesScreen.clickConfirmButton();
    ProfileCardManageScreen.clickBackButton();

    /**
     * Create an order for delivery
     */

    // Open Orders
    HomeScreen.clickOrderButton();

    // Set your location
    OrderScreen.clickChangeLocationButton();
    LocationsMapScreen.selectTopLocation();
    LocationDetailsScreen.clickOrderButton();

    // Order the first item in the
    OrderScreen.clickOrderNowButton();
    OrderMenuScreen.selectFirstItem();
    OrderItemScreen.selectAllRequired();
    OrderItemScreen.clickAddToOrderButton();
    OrderMenuScreen.clickReviewOrderButton();

    // Verify the order is correct (item/ price)
    OrderReviewScreen.verifyOrder();

    // Add the order info (item/ price/ all that stuff) to the user object
    user.addOrder(OrderReviewScreen.getOrderDetails());

    // Place the order
    OrderReviewScreen.clickPlaceOrderButton();

    // Verify the submitted order
    OrderSubmittedScreen.verifyOrder(user.orders[0]);
    OrderSubmittedScreen.clickCloseButton();

    // Verify Open Order in History
    Menu.openHistory({returning: true});
    HistoryScreen.selectOpenOrder();
    HistoryOpenOrderScreen.verifyOrder(user.orders[0]);
    HistoryOpenOrderScreen.clickBackButton();

    // Verify Receipt
    HistoryScreen.selectTopReceipt();
    HistoryReceiptScreen.verifyOrder(user.orders[0]);
    HistoryReceiptScreen.clickBackButton();
    HistoryScreen.clickBackButton();

    // Verify Rewards and Status updated
    Menu.openRewards({returning: true});
    RewardsScreen.clickRewards();
    RewardsRewardsScreen.verifyRewards(user.orders[0]);
    RewardsScreen.clickStatus();
    RewardsStatusScreen.verifyStatus(user.orders[0]);
    RewardsScreen.clickBackButton();

    /**
     * Verify all menu items
     */
    Menu.openProfile({returning: false});
    ProfileScreen.verifyScreen();
    ProfileScreen.clickBackButton();

    Menu.openHistory({returning: false});
    HistoryScreen.verifyScreen();
    HistoryScreen.clickBackButton();

    Menu.openCards({returning: false});
    ProfileCardManageScreen.verifyScreen();
    ProfileCardManageScreen.clickBackButton();

    // Menu.openLocations({returning: false});
    // LocationsScreen.verifyScreen();
    // LocationsScreen.clickBackButton();

    // Menu.openSubscriptions({returning: false});
    // SubscriptionScreen.verifyScreen();
    // SubscriptionScreen.clickBackButton();

    Menu.openRewards({returning: false});
    RewardsScreen.verifyScreen();
    RewardsScreen.clickBackButton();

    // Menu.openGiftCard({returning: false});
    // GiftCardScreen.verifyScreen();
    // GiftCardScreen.clickBackButton();

    // Menu.openPIN({returning: false});
    // PINScreen.verifyScreen();
    // PINScreen.clickBackButton();

    Menu.openSupport({returning: false});
    SupportScreen.verifyScreen();
    SupportScreen.clickBackButton();

    Menu.openFacebook({returning: false});
    FacebookScreen.verifyScreen();
    FacebookScreen.clickBackButton();

    Menu.openInstagram({returning: false});
    InstagramScreen.verifyScreen();
    InstagramScreen.clickBackButton();

    Menu.openTwitter({returning: false});
    TwitterScreen.verifyScreen();
    TwitterScreen.clickBackButton();

    /**
     * Logout for net run
     */
    Menu.logout({returning: true});
  });
});
