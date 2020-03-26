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
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}
