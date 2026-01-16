pipeline {
agent any
tools {
nodejs 'node18'
}
environment {
APP_NAME = 'ci-cd-lab'
DEPLOY_DIR = '/tmp/ci-cd-lab'
}
stages {
stage('Checkout') {
steps {
sh 'npm ci'
}}
stage('Test') {
steps {
sh 'npm test'
}}
stage('Build') {
steps {
sh 'npm run build'
}}}
post {
success {
echo 'CI pipeline passed'
}
failure {
echo 'CI pipeline failed' }}}

