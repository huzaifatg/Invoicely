require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const invoiceRoutes = require("./routes/invoiceRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

//middleware to handle cors - only in development
if (process.env.NODE_ENV !== "production") {
    app.use(
        cors({
            origin: "http://localhost:5173",
            methods: ["GET", "POST", "PUT", "DELETE"],
            allowedHeaders: ["Content-Type", "Authorization"],
        })
    );
}

//connect db
connectDB();

//middleware to handle json data
app.use(express.json());

//routes
app.use("/api/auth", authRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/ai", aiRoutes);

//serve static files in production
if (process.env.NODE_ENV === "production") {
    const staticPath = path.join(__dirname, "../frontend/dist");
    app.use(express.static(staticPath));
    
    // Handle React Router - send index.html for all non-API routes
    app.use((req, res, next) => {
        if (!req.path.startsWith('/api')) {
            res.sendFile(path.join(staticPath, "index.html"));
        } else {
            next();
        }
    });
}

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});