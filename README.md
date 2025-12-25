
# Prisight 🔍📊  
**AI-Powered Product Demand & Pricing Intelligence Platform**

Prisight is a full-stack data analytics platform designed to help businesses gain actionable insights into **product demand forecasting, pricing intelligence, and sales performance**.  
The project combines a **FastAPI-powered backend** with a **React-based frontend**, delivering an end-to-end, analytics-ready system.

This project was **co-developed collaboratively**, with clear separation of concerns between backend services, data modeling, analytics logic, and frontend user experience.

---

## 🚀 Key Features

### 📊 Analytics & Intelligence
- 📈 **Demand Forecasting**
  - Predicts future product demand using historical sales data
  - Time-based forecasting per product

- 💰 **Pricing & Performance Insights**
  - Analytical insights on pricing trends and product performance
  - Extendable to AI/ML-driven recommendations

- 🧠 **Insight Generation Layer**
  - Structured NLP insights (pricing, inventory, promotions, forecasts)
  - Designed for future LLM-based intelligence

---

### 🖥 Frontend (React)
- Clean and modular **React UI**
- Dashboard-style layout for analytics visualization
- API-driven data rendering from FastAPI backend
- Component-based architecture for scalability
- Designed to be extended with charts and real-time data

---

### 🗄 Backend & Data
- Well-structured relational data models
- Forecast storage and model evaluation tracking
- REST APIs for frontend consumption
- Secure and environment-safe configuration

---

## 🛠️ Tech Stack

### Frontend
- **React**
- **JavaScript (ES6+)**
- **Axios** (API communication)
- **Component-based UI architecture**

### Backend
- **Python**
- **FastAPI**
- **SQLAlchemy**
- **SQLite** (development database)

### Data & Analytics
- Demand forecasting models
- Evaluation metrics:
  - MAE (Mean Absolute Error)
  - RMSE (Root Mean Squared Error)
  - MAPE (Mean Absolute Percentage Error)

### Tooling & Practices
- Git & GitHub
- Virtual environment isolation
- Clean repository history
- Modular full-stack architecture

---

## 📂 Project Structure

```text
Prisight/
│
├── Frontend/                # React frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Application pages
│   │   ├── services/        # API service layer
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── Backend/
│   ├── app/                 # FastAPI application logic
│   ├── models/              # Database & analytics models
│   ├── run.py               # Backend entry point
│   ├── req.txt              # Python dependencies
│   ├── products.csv         # Sample product data
│   ├── sales.csv            # Sample sales data
│   └── prisight.db          # Local development database
│
├── .gitignore
└── README.md
````

---

## 🧪 Core Data Models

* **Product**
* **DemandForecast**
* **ModelEvaluation**
* **NLPInsight**

These models collectively enable forecasting, performance evaluation, and AI-driven insight generation.

---

## ⚙️ Setup & Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/AviRedDevil/Prisight.git
cd Prisight
```

---

### 2. Backend Setup

```bash
cd Backend
python -m venv .venv
.venv\Scripts\activate   # Windows
pip install -r req.txt
python run.py
```

Backend runs on:

```text
http://localhost:8000
```

---

### 3. Frontend Setup

```bash
cd ../Frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## 🔗 Frontend–Backend Integration

* Frontend communicates with backend via REST APIs
* Axios is used for API calls
* Backend serves analytics data to React components
* Designed for easy integration with charts and dashboards

---


## 🎯 Use Cases

* Product demand forecasting
* Business intelligence dashboards
* Pricing strategy analysis
* Inventory planning support
* AI-powered analytics platforms

---

## 🔮 Future Enhancements

* Advanced ML and time-series models
* LLM-powered insight explanations
* Interactive charts and dashboards
* Authentication & role-based access
* Cloud deployment (AWS / Render)
* Real-time analytics pipelines

---

## 📌 Repository Notes

* Virtual environments (`.venv`) are excluded from version control
* Environment variables and secrets are not committed
* Dependencies are managed via `req.txt` and `package.json`

---

## 📄 License

This project is intended for **educational and demonstrative purposes** and can be extended for real-world deployments.

```
```
