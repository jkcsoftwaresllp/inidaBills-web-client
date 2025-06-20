import ExpensesTracking from "./10ExpenseTracking.js";
import RealTimeStockTracking from "./1RealTimeStockTracking";
import GSTBilling from "./2GSTBilling";
import AdvancedReports from "./3AdvancedReports";
import CustomerSupport from "./4CustomerSupport";
import UnlimitedWarehouse from "./5UnlimitedWarehouse.js";
import ExpiryAlert from "./6ExpiryAlert.js";
import DiscountOffers from "./7DiscountOffers.js";
import CentralizedDashboard from "./8CentralizedDashboard.js";
import UserAccessManagement from "./9UserAccessManagement.js";

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
    'order-delivery-tracking': RealTimeStockTracking, // Reusing for now
    'sharable-invoice': GSTBilling, // Reusing for now
}

export default featureArticles;