pipeline {
    agent {
        docker { image 'node:10.15.3' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}
