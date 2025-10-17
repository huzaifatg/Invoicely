const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:8000/api" : "/api";

export { BASE_URL };

export const API_PATHS = {
    AUTH: {
        REGISTER: "/auth/register", //signup
        LOGIN: "/auth/login", //login
        GET_PROFILE: "/auth/me", //get current user profile
        UPDATE_PROFILE: "/auth/me", //update user profile
    },
    INVOICES: {
        CREATE: "/invoices",
        GET_ALL_INVOICES: "/invoices",
        GET_INVOICE_BY_ID: (id) => `/invoices/${id}`,
        UPDATE_INVOICE: (id) => `/invoices/${id}`,
        DELETE_INVOICE: (id) => `/invoices/${id}`,
    },
    AI: {
        PARSE_INVOICE_TEXT: "/ai/parse-text",
        GENERATE_REMINDER: "/ai/generate-reminder",
        GET_DASHBOARD_SUMMARY: "/ai/dashboard-summary",
    }
}