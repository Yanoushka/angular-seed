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
            when {
                branch 'develop'
            }
            steps {
                sh 'npm run build'
            }
        }
        stage('Build') {
            when {
                anyOf {
                    branch 'master'
                    branch 'release'
                }
            }
            steps {
                sh 'npm run build:prod'
            }
        }
        stage('Deploy') {
            when {
                branch 'release'
            }
            steps {
                sh 'echo \'deploy to pre-production env\''
            }
        }
        stage('Deploy') {
            when {
                branch 'master'
            }
            steps {
                sh 'echo \'deploy to production env\''
            }
        }
    }
}
