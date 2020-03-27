pipeline {
    agent {
        docker { image 'node:12.15.0' }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Unit Test') {
            steps {
                sh 'npm run test:run'
            }
        }
        stage('E2E Test') {
            steps {
                sh "npm run cypress:install"
                sh 'npm run e2e:run'
            }
        }
    }
}
