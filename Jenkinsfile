node {
    checkout scm
    
    stage "Build"
    
    sh 'npm install'
    sh 'npm run build'

    stage "Test"

    sh 'node --version'
}
