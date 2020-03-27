pipeline {
    agent {
        docker { image 'cypress/browsers:node12.6.0-chrome75' }
    }
    stages {
        stage('Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Unit Tests') {
            steps {
                sh 'npm run test'
            }
        }
        stage('E2e Tests') {
            steps {
                sh 'npm run cypress:install'
                sh 'npm run e2e'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
