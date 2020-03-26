pipeline {
    agent {
        docker { image 'node:10.15.3' }
    }
    stages {
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
