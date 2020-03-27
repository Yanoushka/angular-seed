pipeline {
    agent {
        docker { image 'node:12.15.0' }
    }
    stages {
        stage('Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Unit Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('E2E Test') {
            steps {
                sh "npm run cypress:install"
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
