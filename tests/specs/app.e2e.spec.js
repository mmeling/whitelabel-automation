// dependencies
var shell = require('shelljs');

// screen objects
import TutorialScreen from '../screenobjects/tutorial.screen';
import LandingScreen from '../screenobjects/landing.screen';
import LoginScreen from '../screenobjects/login.screen';
import RegistrationAccountInfoScreen from '../screenobjects/registration.account.info.screen';
import RegistrationLinkCardScreen from '../screenobjects/registration.link.card.screen';
import RegistrationPurposeScreen from '../screenobjects/registration.purpose.screen';
import RegistrationOptionalInfoScreen from '../screenobjects/registration.optional.info.screen';
import RegistrationMigratePointsScreen from '../screenobjects/registration.migrate.points.screen';
import ProfileCardManageScreen from '../screenobjects/profile.card.manage.screen';
import ProfileCardAddScreen from '../screenobjects/profile.card.add.screen';
import ProfileCardPreferencesScreen from '../screenobjects/profile.card.preferences.screen';
import Menu from '../screenobjects/components/menu';
import HomeScreen from '../screenobjects/home.screen';
import OrderScreen from '../screenobjects/order.screen';
import LocationsMapScreen from '../screenobjects/location.map.screen';
import LocationDetailsScreen from '../screenobjects/location.details.screen';
import OrderMenuScreen from '../screenobjects/order.menu.screen';
import OrderItemScreen from '../screenobjects/order.item.screen';
import OrderReviewScreen from '../screenobjects/order.review.screen';
import OrderSubmittedScreen from '../screenobjects/order.submitted.screen';
import HistoryScreen from '../screenobjects/history.screen';
import HistoryReceiptScreen from '../screenobjects/history.receipt.screen';
import RewardsScreen from '../screenobjects/rewards.screen';
import RewardsRewardsScreen from '../screenobjects/rewards.rewards.screen';
import RewardsStatusScreen from '../screenobjects/rewards.status.screen';
// data stuff
const User = require('../lib/classes/User');
let user;

describe('When logging in with existing account,', () => {
  it('should successfully run end to end', () => {

    /////////////////////////////////////////////////////////////////////
    //
    // Fresh data
    //
    ////////////////////////////////////////////////////////////////////

    // Fresh user, fresh app
    user = new User;
    // card = new Card;
    driver.launchApp();

    /////////////////////////////////////////////////////////////////////
    //
    // Register
    //
    ////////////////////////////////////////////////////////////////////

    // Register new user to have clean history
    TutorialScreen.skip();
    LandingScreen.clickSignInButton();
    LoginScreen.useEmail(user.email);
    RegistrationAccountInfoScreen.register(user);

    //Skip anything in registration as we will do it after reg
    RegistrationLinkCardScreen.skip({button: false});
    RegistrationPurposeScreen.skip({button: true});
    RegistrationOptionalInfoScreen.skip();
    RegistrationMigratePointsScreen.skip();

    /////////////////////////////////////////////////////////////////////
    //
    // Add a card
    //
    ////////////////////////////////////////////////////////////////////

    // Add a new card set to pay when used
    Menu.openCards({returning: false});
    ProfileCardManageScreen.clickAddCardButton({button: false});
    ProfileCardAddScreen.addCard({card: user.cards[0]});
    ProfileCardPreferencesScreen.clickConfirmButton();
    ProfileCardManageScreen.clickBackButton();

    /////////////////////////////////////////////////////////////////////
    //
    // Create an order for delivery
    //
    ////////////////////////////////////////////////////////////////////

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
    // OrderReviewScreen.verifyOrder();

    // Add the order info (item/ price/ all that stuff) to the user object
    // user.addOrder(OrderReviewScreen.getOrderDetails());

    // Place the order
    OrderReviewScreen.clickPlaceOrderButton();
    // OrderSubmittedScreen.verifySubmittedOrder();
    OrderSubmittedScreen.clickCloseButton();

    // Verify Order History
    Menu.openHistory({returning: true});
    HistoryScreen.selectFirstReceipt();
    // HistoryReceiptScreen.verifyOrder(user.order(1));
    HistoryReceiptScreen.clickBackButton();
    HistoryScreen.clickBackButton();

    // Verify Rewards and Status updated
    HomeScreen.clickRewardsButton();
    RewardsScreen.clickRewards();
    // RewardsRewardsScreen.verifyRewards(user.order(1));
    RewardsScreen.clickStatus();
    // RewardsStatusScreen.verifyStatus(user.order(1));
    RewardsScreen.clickBackButton();

    /////////////////////////////////////////////////////////////////////
    //
    // Create an order for delivery
    //
    ////////////////////////////////////////////////////////////////////

    // Create a new order
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

    // Add a second item
    OrderMenuScreen.selectSecondItem();
    OrderItemScreen.selectAllRequired();
    OrderItemScreen.clickAddToOrderButton();

    // Checkout
    OrderMenuScreen.clickReviewOrderButton();

    // Verify the order is correct (item/ price)
    OrderReviewScreen.verifyOrder();

    // Add the order info (item/ price/ all that stuff) to the user object
    user.addOrder(OrderReviewScreen.getOrderDetails());

    // Place the order
    OrderReviewScreen.clickPlaceOrderButton();
    // OrderSubmittedScreen.verifySubmittedOrder();
    OrderSubmittedScreen.clickCloseButton();

    // Verify Order History
    Menu.openHistory({returning: true});
    HistoryScreen.selectFirstReceipt();
    // HistoryReceiptScreen.verifyOrder(user.order(1));
    HistoryReceiptScreen.clickBackButton();
    HistoryScreen.clickBackButton();

    // Verify Rewards and Status
    HomeScreen.clickRewardsButton();
    RewardsScreen.clickRewards();
    RewardsRewardsScreen.verifyRewards(user.order(1));
    RewardsScreen.clickStatus();
    RewardsStatusScreen.verifyStatus(user.order(1));
    RewardsScreen.clickBackButton();

    /////////////////////////////////////////////////////////////////////
    //
    // Verify all remaining menu items
    //
    ////////////////////////////////////////////////////////////////////

    // Verify all menu buttons open expected pages
    Menu.openCards({returning: false});

    // logout for next run
    Menu.logout({returning: true});
  });
});
