# 🚀 CloudCart - Microservices Application with Docker, Kubernetes & GitHub Actions

CloudCart is a microservices-based e-commerce backend application built to demonstrate modern DevOps and Cloud-Native practices.

The project showcases:

* Microservices Architecture
* Docker Containerization
* Kubernetes Orchestration
* GitHub Actions CI Pipeline
* Docker Hub Integration
* Kubernetes Service Discovery
* Ingress-based Routing

---

# 📌 Architecture

```text
                 +------------------+
                 |      Client      |
                 +--------+---------+
                          |
                          v
                 +------------------+
                 |      Ingress      |
                 +--------+---------+
                          |
       -----------------------------------------
       |                   |                   |
       v                   v                   v

+---------------+  +---------------+  +---------------+
| User Service  |  | Product       |  | Order Service |
|               |  | Service       |  |               |
+-------+-------+  +-------+-------+  +-------+-------+
        |                  |                  |
        ----------------------------------------
                           |
                           v

                    Kubernetes Cluster
```

---

# 🏗️ Tech Stack

| Technology     | Purpose                 |
| -------------- | ----------------------- |
| Node.js        | Microservices           |
| Express.js     | REST APIs               |
| Docker         | Containerization        |
| Kubernetes     | Container Orchestration |
| GitHub Actions | CI Pipeline             |
| Docker Hub     | Image Registry          |
| NGINX Ingress  | API Routing             |
| YAML           | Kubernetes Manifests    |

---

# 📂 Project Structure

```text
CloudCart/
│
├── user-service/
│   ├── Dockerfile
│   ├── package.json
│   └── app.js
│
├── product-service/
│   ├── Dockerfile
│   ├── package.json
│   └── app.js
│
├── order-service/
│   ├── Dockerfile
│   ├── package.json
│   └── app.js
│
├── k8s/
│   ├── user/
│   ├── product/
│   ├── order/
│   └── ingress/
│
└── .github/
    └── workflows/
        └── deploy.yml
```

---

# 🔥 Microservices

## User Service

Endpoint:

```http
GET /users
```

Sample Response:

```json
[
  {
    "id": 1,
    "name": "Rahul"
  }
]
```

---

## Product Service

Endpoint:

```http
GET /products
```

Sample Response:

```json
[
  {
    "id": 101,
    "name": "Laptop"
  }
]
```

---

## Order Service

Endpoint:

```http
GET /orders
```

Sample Response:

```json
[
  {
    "id": 5001,
    "status": "created"
  }
]
```

---

# 🐳 Docker Setup

Build Images:

```bash
docker build -t cloudcart-user-service ./user-service

docker build -t cloudcart-product-service ./product-service

docker build -t cloudcart-order-service ./order-service
```

Verify Images:

```bash
docker images
```

---

# ☸️ Kubernetes Deployment

Apply Kubernetes Manifests:

```bash
kubectl apply -R -f k8s/
```

Verify Deployments:

```bash
kubectl get deployments
```

Verify Pods:

```bash
kubectl get pods
```

Verify Services:

```bash
kubectl get svc
```

---

# 🌐 Ingress Routing

Routes:

```text
/users     → user-service
/products  → product-service
/orders    → order-service
```

Ingress allows all APIs to be accessed through a single entry point.

---

# ⚙️ GitHub Actions CI Pipeline

Pipeline Workflow:

```text
Developer Push
      |
      v
GitHub Actions
      |
      v
Build Docker Images
      |
      v
Push Docker Hub
```

Workflow File:

```text
.github/workflows/deploy.yml
```

---

# 🐋 Docker Hub Images

The CI pipeline automatically pushes:

```text
cloudcart-user-service
cloudcart-product-service
cloudcart-order-service
```

to Docker Hub whenever code is pushed to the main branch.

---

# 🚀 Features Implemented

✅ Microservices Architecture

✅ Dockerized Services

✅ Kubernetes Deployments

✅ Kubernetes Services

✅ Ingress Routing

✅ GitHub Actions CI Pipeline

✅ Docker Hub Integration

✅ Multi-Container Deployment

✅ Replica-based Scaling

---

# 🔮 Future Enhancements

* Service-to-Service Communication
* ConfigMaps
* Secrets Management
* Liveness & Readiness Probes
* Prometheus Monitoring
* Grafana Dashboards
* AWS EKS Deployment
* Terraform Infrastructure Provisioning
* Full CI/CD Pipeline
* Helm Charts

---

# 📈 Learning Outcomes

This project demonstrates practical experience with:

* Docker
* Kubernetes
* GitHub Actions
* DevOps Fundamentals
* Container Orchestration
* CI/CD Concepts
* Cloud-Native Architecture
* Microservices Design

---

# 👨‍💻 Author

Rahul Prajapati

DevOps | Cloud | Kubernetes | CI/CD Enthusiast

Built as a hands-on project to learn modern cloud-native application deployment and DevOps workflows.
