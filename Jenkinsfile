node {
    // stage "Checkout"

    checkout scm

      env.NODEJS_HOME = "${tool 'Node 12.15.0''}"
    // on linux / mac
    env.PATH="${env.NODEJS_HOME}:${env.PATH}"
    sh 'npm --version'
    
    // stage "Build"
    // env.NODEJS_HOME = "${tool 'Node 12.15.0'}"
	// // on windows
	// env.PATH="${env.NODEJS_HOME};${env.PATH}"
    // withNPM(npmrcConfig: 'MyNpmrcConfig') {
    //     sh 'npm install'
    //     sh 'npm run build'
    // }

    stage "Test"
    env.NODEJS_HOME = "${tool node7}"
	// on windows
	env.PATH="${env.NODEJS_HOME};${env.PATH}"
    echo ${env.PATH}
    sh 'node --version'
}
