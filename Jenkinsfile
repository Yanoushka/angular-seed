pipeline {
    agent {
        docker { image 'node:12.15.0' }
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Unit Test') {
            steps {
                sh 'npm run test:run'
            }
        }
        stage('E2E Test') {
            steps {
                sh 'npm run e2e:run'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}
