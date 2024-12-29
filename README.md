# 🌸 FlowerMarket.io

<div align="center">

![FlowerMarket Logo](frontend/public/logo.png)

*Modern Flower Market Platform with Real-time Updates*

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black)]()
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100-green)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)]()
[![Docker](https://img.shields.io/badge/Docker-ready-blue)]()

</div>

## 🏗️ System Architecture

```mermaid
graph TB
    subgraph "Frontend Layer"
        A[Next.js Web App] --> B[API Gateway]
    end
    
    subgraph "Backend Services"
        B --> C[FastAPI Server]
        C --> D[Price Service]
        C --> E[User Service]
        C --> F[Order Service]
    end
    
    subgraph "Data Layer"
        D & E & F --> G[PostgreSQL]
        D & E & F --> H[Redis Cache]
        F --> I[MinIO Storage]
    end

    style A fill:#64a6f1
    style B fill:#64a6f1
    style C fill:#64a6f1
    style D fill:#64a6f1
    style E fill:#64a6f1
    style F fill:#64a6f1
    style G fill:#64a6f1
    style H fill:#64a6f1
    style I fill:#64a6f1
```

## 🔄 Real-time Price Update Flow

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Backend
    participant Cache
    participant Database

    User->>Frontend: View Flower Prices
    Frontend->>Backend: Request Prices
    Backend->>Cache: Check Cache
    alt Cache Hit
        Cache-->>Backend: Return Cached Prices
    else Cache Miss
        Backend->>Database: Query Prices
        Database-->>Backend: Price Data
        Backend->>Cache: Update Cache
    end
    Backend-->>Frontend: Price Data
    Frontend-->>User: Display Prices
```

## 📱 Application Components

```mermaid
graph TD
    subgraph "Frontend Components"
        A[Pages] --> B[Components]
        B --> C[Price Display]
        B --> D[User Dashboard]
        B --> E[Order Management]
    end
    
    subgraph "State Management"
        F[Redux Store] --> G[Price State]
        F --> H[User State]
        F --> I[Order State]
    end
    
    A --> F
    
    style A fill:#64a6f1
    style B fill:#64a6f1
    style C fill:#64a6f1
    style D fill:#64a6f1
    style E fill:#64a6f1
    style F fill:#64a6f1
    style G fill:#64a6f1
    style H fill:#64a6f1
    style I fill:#64a6f1
```

## 📁 Project Structure
```
FlowerMarket.io/
├── frontend/                # Next.js Frontend
│   ├── app/                # App Router Pages
│   ├── components/         # React Components
│   └── store/             # Redux Store
├── backend/                # FastAPI Backend
│   ├── services/          # Business Logic
│   ├── models/            # Data Models
│   └── api/               # API Routes
└── infrastructure/        # Docker & Deploy Configs
```

## 🔒 Authentication Flow

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Auth Service
    participant Database

    User->>Frontend: Login Request
    Frontend->>Auth Service: Authenticate
    Auth Service->>Database: Verify Credentials
    Database-->>Auth Service: User Data
    Auth Service-->>Frontend: JWT Token
    Frontend-->>User: Access Granted
```

## 🚀 Quick Start

```bash
# Clone and setup
git clone https://github.com/flowermarket/platform
cd platform

# Development
docker-compose up

# Production
docker-compose -f deploy-docker-compose.yml up
```

## 🔑 Key Features

### For Buyers
```mermaid
graph LR
    A[Browse Flowers] --> B[Real-time Prices]
    B --> C[Place Order]
    C --> D[Track Delivery]
    
    style A fill:#64a6f1
    style B fill:#64a6f1
    style C fill:#64a6f1
    style D fill:#64a6f1
```

### For Sellers
```mermaid
graph LR
    A[List Flowers] --> B[Manage Inventory]
    B --> C[Process Orders]
    C --> D[Analytics]
    
    style A fill:#64a6f1
    style B fill:#64a6f1
    style C fill:#64a6f1
    style D fill:#64a6f1
```

## 📈 Performance Metrics

```mermaid
graph TD
    A[Performance Metrics] --> B[Lighthouse Score: 98]
    A --> C[SEO Score: 100]
    A --> D[Accessibility: 100]
    A --> E[Best Practices: 95]
    
    style A fill:#64a6f1
    style B fill:#64a6f1
    style C fill:#64a6f1
    style D fill:#64a6f1
    style E fill:#64a6f1
```

## 🔄 Development Workflow

```mermaid
graph LR
    A[Code] --> B[Test]
    B --> C[Review]
    C --> D[Deploy]
    
    style A fill:#64a6f1
    style B fill:#64a6f1
    style C fill:#64a6f1
    style D fill:#64a6f1
```

## 🌟 Future Roadmap

```mermaid
graph TD
    A[2024 Q1] --> B[AI Price Predictions]
    A[2024 Q2] --> C[Blockchain Payments]
    A[2024 Q3] --> D[Multi-language]
    A[2024 Q4] --> E[IoT Integration]
    
    style A fill:#64a6f1
    style B fill:#64a6f1
    style C fill:#64a6f1
    style D fill:#64a6f1
    style E fill:#64a6f1
```

## 📞 Support

- Email: alpahamoris45@gmail.com


---

<div align="center">

*Building the future of flower trading, one bloom at a time* 🌸

</div>
