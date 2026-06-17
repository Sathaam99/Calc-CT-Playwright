pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.61.0-jammy'
            args '--ipc=host' 
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

        stage('Install Dependencies') {
            steps {
                sh 'npm install --log-level=info'
            }
        }

        stage('Install Browsers') {
            steps {
                sh 'npx playwright install'
            }
        }

        stage('Run Tests') {
            
            steps {
                sh "npx playwright test tests/new.spec.ts"
            }
        }
    }

    post {
        always {
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report',
                reportTitles: ''
            ])

          archiveArtifacts artifacts: '/test-results/**, /playwright-report/**/*', allowEmptyArchive: true


            
        }
    }
}
