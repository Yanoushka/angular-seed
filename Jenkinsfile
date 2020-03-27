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
        stage('Dev Build') {
            when {
                anyOf {
                    branch 'develop'
                    branch pattern: "^feature", comparator: "REGEXP"
                }
            }
            steps {
                sh 'npm run build'
            }
        }
        stage('Prod/Preprod Build') {
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
        stage('Preprod Deploy') {
            when {
                branch 'release'
            }
            steps {
                sh 'echo \'deploy to pre-production env\''
            }
        }
        stage('Prod Deploy') {
            when {
                branch 'master'
            }
            steps {
                sh 'echo \'deploy to production env\''
            }
        }
    }
}
