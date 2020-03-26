node {    
    env.NODEJS_HOME = "${tool 'Node 12.15.0'}"
	// on windows
	env.PATH="${env.NODEJS_HOME};${env.PATH}"
    stage "Checkout"

    checkout scm
    
    stage "Build"
    
    sh 'npm install'
    sh 'npm run build'

    stage "Test"

    sh 'node --version'
}
