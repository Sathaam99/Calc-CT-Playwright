pipeline {
    // 1. GLOBAL AGENT: Traps the entire pipeline (including the post block) inside Docker
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.61.0-jammy'
            // Added Volume Mount (-v) so the container can physically see the Allure CLI tool
            args "--ipc=host -u root -v ${JENKINS_HOME}/tools:${JENKINS_HOME}/tools"
        }
    }
    
    environment {
        CI = 'true'
        PLAYWRIGHT_BROWSERS_PATH = '0' 
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install System Dependencies (Java)') {
            steps {
                script {
                    echo "Installing Java inside the container for Allure compilation..."
                    // Because we are running as root inside an Ubuntu container, we can install Java on the fly
                    sh "apt-get update && apt-get install -y default-jre"
                }
            }
        }

        stage('Install Node Dependencies') {
            steps {
                script {
                    echo "Installing base dependencies..."
                    sh "npm install --cache .npm-cache"
                    
                    echo "Installing Allure Playwright dynamically at runtime..."
                    sh "npm install allure-playwright --no-save --cache .npm-cache"
                }
            }
        }

        stage('Install Browsers') {
            steps {
                sh 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                sh "npx playwright test --project=chromium"
            }
        }
    }

    // 2. POST BLOCK: Runs perfectly inside Docker because Java is installed and the tool path is mounted
    post {
        always {
            echo "Archiving standard reports..."
            archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
            
            echo "Generating and Publishing Allure Report..."
            allure includeProperties: false, results: [[path: 'allure-results']]
        }
        success {
            echo "Pipeline Green! Deployment and CT passed."
        }
        failure {
            echo "Pipeline Failed. Check the Allure report to see what broke."
        }
    }
}
