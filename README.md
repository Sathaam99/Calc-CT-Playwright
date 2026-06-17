Here is an interactive visualization of how your two CI/CD pipelines function, followed by the generation of a comprehensive `README.md` file for your repository.

### Interactive Pipeline Architecture



<img width="350" height="478" alt="Screenshot 2026-06-18 at 12 59 18 AM" src="https://github.com/user-attachments/assets/dc647458-e665-44ad-a218-5fc55df5f011" />



Here is the complete, formatted Markdown content for your `README.md` file. You can copy this entire block and paste it directly into your repository.

```markdown
# 🧮 Calculator API & CI/CD Ecosystem

Welcome to the Calculator API repository! This project houses a lightweight, full-stack Python Flask calculator application, completely containerized with Docker, and supported by a robust, enterprise-grade Jenkins CI/CD pipeline featuring Playwright end-to-end testing and Allure reporting.

---

## 🏗️ Architecture Overview

* **Backend:** Python 3.9 + Flask
* **Frontend:** HTML/JS/CSS (served natively by Flask via `render_template`)
* **Containerization:** Docker (`python:3.9-slim` base image)
* **Port Mapping:** Host Port `5050` ➡️ Container Port `5060`
* **CI/CD:** Jenkins Declarative Pipelines
* **Testing:** Playwright (Headless Chromium) + Pytest
* **Reporting:** Allure Dashboards

---

## 🚀 The Pipelines

This repository utilizes two distinct pipeline paths to ensure rapid deployment and rigorous quality assurance. Both pipelines execute cleanly without polluting the host machine's environment.

### 1. Deployment Pipeline
**Purpose:** Instantly builds and deploys the latest application code to a local Docker environment.

**Stages:**
1.  **Checkout:** Pulls the latest code from the repository.
2.  **Build Docker Image:** Compiles `Dockerfile` into `python-calculator-app:latest`.
3.  **Deploy to Local Endpoint:** * Tears down the existing `calculator-container`.
    * Spins up a fresh container mapping port `5050` to `5060`.
    * Applies a sleep buffer to ensure Flask is fully initialized before accepting traffic.

### 2. Continuous Testing (CT) Pipeline
**Purpose:** A highly isolated, fully containerized testing suite that verifies UI and API health. The entire testing suite runs inside an ephemeral Docker agent to guarantee reproducible results.

**Stages:**
1.  **Checkout:** Pulls the testing manifest and application code.
2.  **Playwright Docker Agent:** Spins up `mcr.microsoft.com/playwright:v1.61.0-jammy` as the execution environment (isolated from the Jenkins host).
    * *Sub-stage: Install Java:* Installs `default-jre` dynamically for Allure compilation.
    * *Sub-stage: Node Dependencies:* Installs required testing packages and `allure-playwright` at runtime (`--no-save`).
    * *Sub-stage: Execution:* Runs the Playwright test suite (`npx playwright test`).
3.  **Post-Execution:** * Generates and publishes the interactive **Allure Report Dashboard**.
    * Archives the standard Playwright HTML artifacts for Jenkins UI access.
    * Destroys the testing container.

---

## 💻 Local Setup & Usage

If you wish to run this application manually without Jenkins, follow these steps:

**1. Build the Docker Image**
Ensure you are in the root directory containing the `Dockerfile`.
```bash
docker build -t python-calculator-app:latest .

```

**2. Run the Container**

```bash
docker run -d -p 5050:5060 --name calculator-container python-calculator-app:latest

```

**3. Access the GUI**
Open your web browser and navigate to:
[http://localhost:5050](https://www.google.com/search?q=http://localhost:5050)

**4. Direct API Usage**
You can bypass the GUI and send calculations directly via URL parameters:

* `http://localhost:5050/calculate?op=add&a=10&b=5`
* `http://localhost:5050/calculate?op=div&a=100&b=4`
* `http://localhost:5050/health`

---

## 📂 Repository Structure

```text
calculator-repo/
│
├── Jenkinsfile          # Deployment and CT Pipeline Definitions
├── Dockerfile           # Application Containerization
├── requirements.txt     # Python Dependencies (Flask, Flask-Cors)
├── app.py               # Main Application Logic & Routing
│
├── templates/           # Frontend GUI
│   └── index.html       
│
├── tests/               # Automated Testing Suites
│   ├── backend/         # Pytest Scripts (Optional)
│   └── frontend/        # Playwright Spec Files
│
├── package.json         # Node Testing Dependencies
└── playwright.config.js # Playwright & Allure Configuration

```

---

*Maintained by the DevOps Engineering Team*

```

```

This widget allows you to step through the stages of both your Deployment and Testing pipelines to see exactly what happens under the hood at each step.

Now, I will generate the beautifully formatted `README.md` file containing all the documentation and structural details for your repository.

```python
readme_content = """# 🧮 Calculator API & CI/CD Ecosystem

Welcome to the Calculator API repository! This project houses a lightweight, full-stack Python Flask calculator application, completely containerized with Docker, and supported by a robust, enterprise-grade Jenkins CI/CD pipeline featuring Playwright end-to-end testing and Allure reporting.

---

## 🏗️ Architecture Overview

* **Backend:** Python 3.9 + Flask
* **Frontend:** HTML/JS/CSS (served natively by Flask via `render_template`)
* **Containerization:** Docker (`python:3.9-slim` base image)
* **Port Mapping:** Host Port `5050` ➡️ Container Port `5060`
* **CI/CD:** Jenkins Declarative Pipelines
* **Testing:** Playwright (Headless Chromium) + Pytest
* **Reporting:** Allure Dashboards

---

## 🚀 The Pipelines

This repository utilizes two distinct pipeline paths to ensure rapid deployment and rigorous quality assurance.

### 1. Deployment Pipeline
**Purpose:** Instantly builds and deploys the latest application code to a local Docker environment.

**Stages:**
1.  **Checkout:** Pulls the latest code from the repository.
2.  **Build Docker Image:** Compiles `Dockerfile` into `python-calculator-app:latest`.
3.  **Deploy to Local Endpoint:** * Tears down the existing `calculator-container`.
    * Spins up a fresh container mapping port `5050` to `5060`.
    * Applies a sleep buffer to ensure Flask is fully initialized before accepting traffic.

### 2. Continuous Testing (CT) Pipeline
**Purpose:** A highly isolated, fully containerized testing suite that verifies UI and API health without polluting the host machine.

**Stages:**
1.  **Checkout:** Pulls the testing manifest.
2.  **Playwright Docker Agent:** Spins up `mcr.microsoft.com/playwright:v1.61.0-jammy` as the execution environment.
    * *Sub-stage: Install Java:* Installs `default-jre` dynamically for Allure compilation.
    * *Sub-stage: Node Dependencies:* Installs `allure-playwright` at runtime (`--no-save`).
    * *Sub-stage: Execution:* Runs the Playwright test suite against `http://localhost:5050`.
3.  **Post-Execution (Natively on Host):** * Generates and publishes the interactive **Allure Report Dashboard**.
    * Archives the standard Playwright HTML artifacts.

---

## 💻 Local Setup & Usage

If you wish to run this application manually without Jenkins, follow these steps:

**1. Build the Docker Image**

```

```text
File generated: README.md

```bash
docker build -t python-calculator-app:latest .

```

**2. Run the Container**

```bash
docker run -d -p 5050:5060 --name calculator-container python-calculator-app:latest

```

**3. Access the GUI**
Open your web browser and navigate to:
[http://localhost:5050](https://www.google.com/search?q=http://localhost:5050)

**4. Direct API Usage**
You can bypass the GUI and send calculations directly via URL parameters:

* `http://localhost:5050/calculate?op=add&a=10&b=5`
* `http://localhost:5050/calculate?op=div&a=100&b=4`
* `http://localhost:5050/health`

---

## 📂 Repository Structure

```text
calculator-repo/
│
├── Jenkinsfile          # Deployment and CT Pipeline Definitions
├── Dockerfile           # Application Containerization
├── requirements.txt     # Python Dependencies (Flask, Flask-Cors)
├── app.py               # Main Application Logic & Routing
│
├── templates/           # Frontend GUI
│   └── index.html       
│
├── tests/               # Automated Testing Suites
│   ├── backend/         # Pytest Scripts
│   └── frontend/        # Playwright Spec Files
│
├── package.json         # Node Testing Dependencies
└── playwright.config.js # Playwright & Allure Configuration

```

---

*Maintained by the DevOps Engineering Team*
"""

with open('README.md', 'w') as f:
f.write(readme_content)

print("File generated: README.md")

```
Your Markdown file is ready
[file-tag: code-generated-file-0-1781724339449979251]

I have included all the architectural details, the structure we mapped out, and distinct sections explaining the purpose and stages of both the Deployment and Testing pipelines. This serves as excellent documentation for anyone else on your team interacting with the repository.

```
