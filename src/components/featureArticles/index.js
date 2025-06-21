import RealTimeStockTracking from "./1RealTimeStockTracking";
import GSTBilling from "./2GSTBilling";
import AdvancedReports from "./3AdvancedReports";
import CustomerSupport from "./4CustomerSupport";
import UnlimitedWarehouse from "./5UnlimitedWarehouse.js";
import ExpiryAlert from "./6ExpiryAlert.js";
import DiscountOffers from "./7DiscountOffers.js";
import CentralizedDashboard from "./8CentralizedDashboard.js";
import UserAccessManagement from "./9UserAccessManagement.js";
import ExpensesTracking from "./10ExpenseTracking.js";
import OrderDeliveryTracking from "./11OrderDeliveryTracking.js";
import SharableInvoice from "./12SharableInvoice.js";
import UnlimitedTeams from "./13UnlimitedTeams.js";
import CustomBusinessURL from "./14CustomBusinessURL.js";
import Suppliers from "./15Suppliers.js";
import CreditManagement from "./16CreditManagement.js";
import SecurityOfData from "./17SecurityOfData.js";
import SalesSummary from "./18SalesSummary.js";
import CustomOrdersWithApp from "./19CustomOrdersWithApp.js";
import IndividualPerformance from "./20IndividualPerformance.js";

const featureArticles = {
    'real-time-stock-tracking': RealTimeStockTracking,
    'gst-billing': GSTBilling,
    'advanced-reports': AdvancedReports,
    'dedicated-customer-support': CustomerSupport,
    'unlimited-warehouse': UnlimitedWarehouse,
    'expiry-alert': ExpiryAlert,
    'discount-offers': DiscountOffers,
    'centralized-dashboard': CentralizedDashboard, 
    'user-access-management': UserAccessManagement,
    'expenses-tracking': ExpensesTracking,
    'order-delivery-tracking': OrderDeliveryTracking,
    'sharable-invoice': SharableInvoice,
    'unlimited-teams': UnlimitedTeams,
    'custom-business-url': CustomBusinessURL,
    'suppliers': Suppliers,
    'credit-management': CreditManagement,
    'security-of-data': SecurityOfData,
    'sales-summary': SalesSummary,
    'custom-orders-with-app': CustomOrdersWithApp,
    'individual-performance': IndividualPerformance
}

export default featureArticles;